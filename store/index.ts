import { test, db } from '~/API';

export const state = () => ({
  
});

export const mutations = {
  
};

export const getters = {
  list: (state: any) => state.list
};

export const actions = {
  test: () =>  new Promise<any>(async (resolve, reject) => {
    try {
      await test();
      await db();

      return resolve();
    } catch(e) {
      return reject(e);
    }
  })
};