import Config from 'react-native-config';

import { AxiosClient, IApiConfig } from '@vrs-mobile-framework-ui/core';

export function apiProvider(config: IApiConfig) {
  return new AxiosClient(config)
    .baseUrl(Config.API_BASE_URL)
    .timeout(10000)
    .responseType('json')
    .build();
}
