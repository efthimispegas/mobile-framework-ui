import { AuthorizeResult } from 'react-native-app-auth';

import { IErrorResponse } from '@vrs-mobile-framework-ui/core';

import { AppDispatch, RootState } from '../store';

export interface ISignal {
  signal: AbortSignal;
}

export interface IThunk {
  state: RootState;
  rejectValue: IErrorResponse;
  dispatch?: AppDispatch;
  fulfilledMeta?: any;
}

export type InitialState = {
  authData: Partial<AuthorizeResult> & { hasLoggedInOnce: boolean };
  isLoading: boolean;
  error: null | string;
  userInfo: Record<string, string> | null;
};
