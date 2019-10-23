import { ActionContext } from 'vuex';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';
import { ITextractState } from './state';
import { ITextract } from './ITextract';
import axios from 'axios'

export interface ITextractActions {
  fetchTextracts(context: ActionContext<ITextractState, IState>): Promise<any>;
  fetchTextract(context: ActionContext<ITextractState, IState>, id: string): Promise<any>;
  addTextract(context: ActionContext<ITextractState, IState>, textract: ITextract): Promise<any>;
  updateTextract(context: ActionContext<ITextractState, IState>, textract: ITextract): Promise<any>;
  deleteTextract(context: ActionContext<ITextractState, IState>, textract: ITextract): Promise<any>;
}

export const TextractActions: ITextractActions = {
  async fetchTextracts({ commit }) {
    try {
      console.log("hi")
      const response = await HttpService.get<ITextract[]>('/textract');
      commit('SET_TEXTRACTS', response.data);
      console.log("hi")
    } catch (e) {
      throw e;
    }
  },
  async fetchTextract({ commit }, id) {
    try {
      console.log("fucntion is working")
      const response=axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        commit('SET_CURRENT_TEXTRACT', response);
        (this.info = response)})
     // const response = await HttpService.get<ITextract>('https://api.coindesk.com/v1/bpi/currentprice.json');
     
      console.log("hi")
    } catch (e) {
      throw e;
    }
  },
  async addTextract({ commit }, textract) {
    try {
      const response = await HttpService.post<ITextract>('/textract', textract);
      commit('ADD_TEXTRACT', response.data);
    } catch (e) {
      throw e;
    }
  },
  async updateTextract({ commit }, textract) {
    try {
      const response = await HttpService.put<ITextract>(`/textract/${ textract.id }`, textract);
      commit('UPDATE_TEXTRACT', response.data);
    } catch (e) {
      throw e;
    }
  },
  async deleteTextract({ commit }, textract) {
    try {
      await HttpService.delete<ITextract>(`/textract/${ textract.id }`);
      commit('DELETE_TEXTRACT', textract);
    } catch (e) {
      throw e;
    }
  },
};
