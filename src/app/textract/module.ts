import { Module } from 'vuex';
import { IState } from '@/app/state';
import { TextractDefaultState, ITextractState } from './state';
import { TextractActions } from './actions';
import { TextractGetters } from './getters';
import { TextractMutations } from './mutations';

export const TextractModule: Module<ITextractState, IState> = {
  namespaced: true,
  actions: {
    ...TextractActions,
  },
  getters: {
    ...TextractGetters,
  },
  state: {
    ...TextractDefaultState(),
  },
  mutations: {
    ...TextractMutations,
  },
};
