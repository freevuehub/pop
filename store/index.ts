import { getList } from '~/API';
import { List } from './Constant';
import { Dispatch } from 'vuex';

export const state = () => ({
  list: []
});

export const mutations = {
  [List.$Set.List]: (state: { list }, payload: []) => {
    state.list = [
      ...payload
    ]
  }
};

export const getters = {
  [List.$Get.List]: ({ list }) => list
};

export const actions = {
  [List.$Call.List]: (store) =>  new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await getList();
      const { items } = data;

      store.commit(List.$Set.List, items.list);

      return resolve(data);
    } catch(e) {
      console.error('===== List.$Call.List Error =====');
      
      return reject(e);
    }
  })
};