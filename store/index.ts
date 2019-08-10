import { getList } from '~/API';
import { MainConst } from './Constant';

export const state = () => ({
  list: []
});

export const mutations = {
  [MainConst.$Set.List]: (state: { list }, payload: []) => {
    state.list = [
      ...payload
    ]
  }
};

export const getters = {
  [MainConst.$Get.List]: ({ list }) => list
};

export const actions = {
  [MainConst.$Call.List]: (store) =>  new Promise<any>(async (resolve, reject) => {
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