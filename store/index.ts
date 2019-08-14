import { getList } from '~/API';
import { MainConst } from '~/Constant';
import { ActionTree, MutationTree } from 'vuex'

interface IMainState {
  list: string[]
}

interface IMainModel {
  list: string[]
}

export const state = (): IMainState => ({
  list: []
});

export const mutations: MutationTree<IMainState> = {
  [MainConst.$Set.List]: (state, payload) => {
    state.list = [
      ...payload
    ]
  }
};

export const getters = {
  [MainConst.$Get.List]: ({ list }) => list
};

export const actions: ActionTree<IMainState, IMainModel> = {
  [MainConst.$Call.List]: (store) => new Promise(async (resolve, reject) => {
    try {
      const { data } = await getList();
      const { items } = data;

      store.commit(MainConst.$Set.List, items.list);

      return resolve(data);
    } catch(e) {
      console.error('===== MainConst.$Call.List Error =====');
      
      return reject(e);
    }
  })
};