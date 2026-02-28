export interface AuthConfig {
  useWebApiAuth: boolean;
  apiBaseUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  useWebApiAuth: false,
  apiBaseUrl: 'https://localhost:44397',
};

export const LOCAL_CREDENTIALS = {
  email: 'cea@itcr.ac.cr',
  code: '123',
};
