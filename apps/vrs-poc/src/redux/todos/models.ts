import { ITodo } from '@vrs-mobile-framework-ui/core';

export type InitialState = {
  data: ITodo[];
  isLoading: boolean;
  error: null | string;
  totals: number;
};
