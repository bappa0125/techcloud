import { ITextract } from './ITextract';

export interface ITextractState {
  /**
   * put your state attributes here, for example:
   * myAttribute: any;
   */
  textracts: ITextract[];
  currentTextract: ITextract;
}

export const TextractDefaultState = (): ITextractState => {
  return {
    /**
     * put your default value here, for example:
     * myAttribute: null,
     */
    textracts: [],
    currentTextract: null,
  };
};
