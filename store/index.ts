import { SystemConst } from './Constant';
import { ActionTree, MutationTree } from 'vuex'

interface ISystemState {
  window: {
    width: number
    height: number
  }
  breakPoint: {
    xs: boolean
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean
  }
}

interface ISystemModel {
  window: {
    width: number,
    height: number
  }
  breakPoint: {
    xs: boolean
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean
  }
}

export const state = (): ISystemState => ({
  window: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  breakPoint: {
    xs: window.innerWidth < 600,
    sm: 600 <= window.innerWidth && window.innerWidth < 960,
    md: 960 <= window.innerWidth && window.innerWidth < 1264,
    lg: 1264 <= window.innerWidth && window.innerWidth < 1904,
    xl: 1904 <= window.innerWidth
  }
});

export const mutations: MutationTree<ISystemState> = {
  [SystemConst.$Set.Resize]: ({ window }, payload) => {
    window = {
      ...payload
    }
  },
  [SystemConst.$Set.BreakPoint]: ({ breakPoint }, payload) => {
    breakPoint = {
      ...breakPoint,
      ...payload
    }
  },
};

export const getters = {
  [SystemConst.$Get.Window]: ({ window }) => window,
};

export const actions: ActionTree<ISystemState, ISystemModel> = {
  [SystemConst.$Call.Resize]: (store, model) => new Promise(resolve => {
    store.commit(SystemConst.$Set.Resize, model);

    if (model.width < 600){
      if (!store.state.breakPoint.xs) {
        store.commit(SystemConst.$Set.BreakPoint, { xs: true });
      }
    } else if (600 <= model.width && model.width < 960){
      if (!store.state.breakPoint.sm) {
        store.commit(SystemConst.$Set.BreakPoint, { sm: true });
      }
    } else if (960 <= model.width && model.width < 1264){
      if (!store.state.breakPoint.md) {
        store.commit(SystemConst.$Set.BreakPoint, { md: true }); 
      }
    } else if (1264 <= model.width && model.width < 1904){
      if (!store.state.breakPoint.lg) {
        store.commit(SystemConst.$Set.BreakPoint, { lg: true }); 
      }
    } else if (1904 <= model.width){
      if (!store.state.breakPoint.xl) {
        store.commit(SystemConst.$Set.BreakPoint, { xl: true }); 
      }
    }
    
    return resolve();
  })
};
