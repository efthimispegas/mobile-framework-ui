declare module 'react-native-config' {
  export interface NativeConfig {
    // API
    API_BASE_URL?: string;
    STORAGE_KEY?: string;
    // Auth
    AUTH_ISSUER_URL?: string;
    AUTH_CLIENT_ID?: string;
    AUTH_REDIRECT_URL?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
