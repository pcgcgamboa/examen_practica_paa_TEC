import { AUTH_CONFIG, LOCAL_CREDENTIALS } from '../config/authConfig';
import type { 
  SolicitanteLoginRequest, 
  oRespuesta, 
  oSolicitante, 
  AuthResponse 
} from '../types/apiTypes';

/**
 * Obtiene la dirección IP del cliente
 * En producción, esto debería hacerse desde el backend
 */
const getClientIP = async (): Promise<string> => {
  try {
    // Usar un servicio público para obtener la IP
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('No se pudo obtener la IP del cliente, usando localhost', error);
    return '127.0.0.1';
  }
};

/**
 * Autenticación mediante Web API
 */
const authenticateWithWebApi = async (
  email: string, 
  password: string
): Promise<AuthResponse> => {
  try {
    // Obtener IP del cliente
    const ipAddress = await getClientIP();

    // Preparar el request
    const loginRequest: SolicitanteLoginRequest = {
      CorreoElectronico: email,
      Password: password,
      IpAddress: ipAddress
    };

    // Realizar la petición a la Web API
    const response = await fetch(
      `${AUTH_CONFIG.apiBaseUrl}/api/PPAA/ValidaUsuario`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(loginRequest)
      }
    );

    // Verificar si la respuesta HTTP fue exitosa
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    // Parsear la respuesta
    const apiResponse: oRespuesta<oSolicitante> = await response.json();

    // Validar la respuesta según las reglas especificadas
    
    // Si CodigoRespuesta es diferente de 0, hay un error
    if (apiResponse.CodigoRespuesta !== 0) {
      return {
        success: false,
        message: apiResponse.MensajeRespuesta || 'Error en la autenticación'
      };
    }

    // Si CodigoRespuesta es 0 pero no hay objeto o es null
    if (!apiResponse.ObjetoRespuesta) {
      return {
        success: false,
        message: 'Credenciales incorrectas. Verifica tu correo y contraseña.'
      };
    }

    // Autenticación exitosa
    return {
      success: true,
      message: apiResponse.MensajeRespuesta || 'Autenticación exitosa',
      solicitante: apiResponse.ObjetoRespuesta,
      requirePasswordChange: apiResponse.ObjetoRespuesta.OcupaCambioContrasena
    };

  } catch (error) {
    console.error('Error en autenticación Web API:', error);
    
    // Manejar errores de red o de parsing
    let errorMessage = 'Error al conectar con el servidor de autenticación';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage
    };
  }
};

/**
 * Autenticación local (sin Web API)
 */
const authenticateLocally = async (
  email: string, 
  password: string
): Promise<AuthResponse> => {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 500));

  if (email === LOCAL_CREDENTIALS.email && password === LOCAL_CREDENTIALS.code) {
    return {
      success: true,
      message: 'Autenticación local exitosa',
      solicitante: {
        IdPersona: 1,
        Identificacion: '123456789',
        Nombre: 'Usuario',
        Apellido1: 'Prueba',
        Apellido2: 'Local',
        OcupaCambioContrasena: false,
        AceptaConsentimientoInf: true,
        CorreoElectronico: email,
        IdCarnet: 1,
        Carnet: 'TEST123',
        IdProcesoAdmision: 1,
        IdFormaIngreso: 1,
        NombreProcesoAdmision: 'Proceso de Prueba'
      }
    };
  }

  return {
    success: false,
    message: `Credenciales incorrectas. Use ${LOCAL_CREDENTIALS.email} y código ${LOCAL_CREDENTIALS.code}`
  };
};

/**
 * Función principal de autenticación
 * Usa Web API o autenticación local según la configuración
 */
export const authenticate = async (
  email: string, 
  password: string
): Promise<AuthResponse> => {
  console.log(`🔐 Modo de autenticación: ${AUTH_CONFIG.useWebApiAuth ? 'Web API' : 'Local'}`);
  
  if (AUTH_CONFIG.useWebApiAuth) {
    return authenticateWithWebApi(email, password);
  } else {
    return authenticateLocally(email, password);
  }
};

/**
 * Validar si un correo tiene formato válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
