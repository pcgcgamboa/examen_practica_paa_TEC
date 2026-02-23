export interface AuthConfig {
  useWebApiAuth: boolean;  // true = usar Web API, false = autenticación local
  apiBaseUrl: string;      // URL base de la Web API
}

export const AUTH_CONFIG: AuthConfig = {
  useWebApiAuth: true,  // true = Web API, false = autenticación local
  apiBaseUrl: 'https://localhost:44397'  // URL de tu Web API
};

export const LOCAL_CREDENTIALS = {
  email: 'cea@itcr.ac.cr',
  code: '123'   
};