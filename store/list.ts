export const state = () => ({
  list: [
    1,
    2,
    3
  ]  
});

export const mutations = {
  
};

export const getters = {
  list: (state: any) => state.list
};

export const action = {
  test: (store) => {
    console.log(store);
  }
};