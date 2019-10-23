import { ITextractState } from './state';
import { ITextract } from './ITextract';

export interface ITextractMutations {
  SET_TEXTRACTS(state: ITextractState, textracts: ITextract[]): void;
  SET_CURRENT_TEXTRACT(state: ITextractState, textract: ITextract): void;
  ADD_TEXTRACT(state: ITextractState, textract: ITextract): void;
  UPDATE_TEXTRACT(state: ITextractState, textract: ITextract): void;
  DELETE_TEXTRACT(state: ITextractState, textract: ITextract): void;
}

export const TextractMutations: ITextractMutations = {
  SET_TEXTRACTS: (state, textracts) => {
    state.textracts = textracts;
  },
  SET_CURRENT_TEXTRACT: (state, textract) => {
    console.log('mutation called')
    console.log(textract.data)
    state.currentTextract = textract;
    
  },
  ADD_TEXTRACT: (state, textract) => {
    state.textracts.push(textract);
  },
  UPDATE_TEXTRACT: (state, textract) => {
    const idx = state.textracts.findIndex((item) => item.id === textract.id);
    state.textracts.splice(idx, 1, textract);
  },
  DELETE_TEXTRACT: (state, textract) => {
    const idx = state.textracts.findIndex((item) => item.id === textract.id);
    state.textracts.splice(idx, 1);
  },
};
