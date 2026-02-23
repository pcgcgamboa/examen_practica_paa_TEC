import { AUTH_CONFIG } from '../config/authConfig';
import type { 
  oPPAAAplicada, 
  ExamSubmissionHeaders,
  ExamSubmissionRequest 
} from '../types/examSubmissionTypes';
import type { oRespuesta } from '../types/apiTypes';

/**
 * Obtiene la dirección IP del cliente
 */
const getClientIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.warn('No se pudo obtener la IP del cliente, usando localhost', error);
    return '127.0.0.1';
  }
};

/**
 * Envía el examen completado a la API
 * @param examData - Datos completos del examen (el objeto que antes se descargaba como JSON)
 * @param idPersona - ID de la persona desde el login
 * @param correoElectronico - Correo del usuario
 * @param idCarnet - ID del carnet
 * @param carnet - Número de carnet
 */
export const submitExamToAPI = async (
  examData: any,
  idPersona: number,
  correoElectronico: string,
  idCarnet: number,
  carnet: string
): Promise<{ success: boolean; message: string }> => {
  try {
    // Obtener IP del cliente
    const ipAddress = await getClientIP();

    // Preparar el body: convertir el examData completo a JSON string
    const ppaaAplicada: oPPAAAplicada = {
      IdCarnet: idCarnet,
      Carnet: carnet,
      NumIntento: 1, // Siempre es 1 según los requerimientos
      DatosPrueba: JSON.stringify(examData) // Convertir todo el objeto a JSON string
    };

    // Preparar los headers personalizados
    const customHeaders: ExamSubmissionHeaders = {
      IdPersona: idPersona,
      CorreoElectronico: correoElectronico,
      IpAddress: ipAddress,
      tokenSeguridad: '1' // Valor fijo según requerimientos
    };

    console.log('📤 Enviando examen a la API...');
    console.log('Body:', ppaaAplicada);
    console.log('Headers:', customHeaders);

    // Realizar la petición
    const response = await fetch(
    `${AUTH_CONFIG.apiBaseUrl}/api/PPAA/InsertarPPAA`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // ✅ Todos en minúsculas
        'idpersona': customHeaders.IdPersona.toString(),
        'correoelectronico': customHeaders.CorreoElectronico,
        'ipaddress': customHeaders.IpAddress,
        'tokenseguridad': customHeaders.tokenSeguridad
      },
      body: JSON.stringify(ppaaAplicada)
    }
  );

    // Verificar respuesta HTTP
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    // Parsear respuesta
    const apiResponse: oRespuesta<any> = await response.json();

    console.log('📥 Respuesta de la API:', apiResponse);

    // Validar respuesta según las reglas
    if (apiResponse.CodigoRespuesta !== 0) {
      return {
        success: false,
        message: apiResponse.MensajeRespuesta || 'Error al enviar el examen'
      };
    }

    return {
      success: true,
      message: apiResponse.MensajeRespuesta || 'Examen enviado exitosamente'
    };

  } catch (error) {
    console.error('❌ Error al enviar examen a la API:', error);
    
    let errorMessage = 'Error al enviar el examen al servidor';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage
    };
  }
};
