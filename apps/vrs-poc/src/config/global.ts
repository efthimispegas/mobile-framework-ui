import { AuthConfiguration } from 'react-native-app-auth';
import Config from 'react-native-config';

// Fusion OAuth configuration
export const authConfig: AuthConfiguration = {
  issuer: Config.AUTH_ISSUER_URL,
  clientId: Config.AUTH_CLIENT_ID,
  redirectUrl: Config.AUTH_REDIRECT_URL,
  scopes: ['offline_access'],
};
