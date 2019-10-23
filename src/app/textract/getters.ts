import { ITextractState } from './state';
import { ITextract } from './ITextract';

export interface ITextractGetters {
  textracts(state: ITextractState): ITextract[];
  currentTextract(state: ITextractState): ITextract;
}

export const TextractGetters: ITextractGetters = {
  textracts(state) {
    return state.textracts;
  },
  currentTextract(state) {
    return state.currentTextract;
  },
};
