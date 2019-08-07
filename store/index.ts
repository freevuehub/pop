import { test } from '~/API';
import { ActionTree } from 'vuex';

export const state = () => ({
  list: [
    1,
    2,
    3
    3
  ]  
});

export const mutations = {
  
};

export const getters = {
  list: (state) => state.list
};

export const actions = {
  test: () =>  new Promise<any>(async (resolve, reject) => {
    try {
      await test();

      return resolve();
    } catch(e) {
      return reject(e);
    }
  })
};