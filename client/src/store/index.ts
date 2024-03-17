import { createStore, Store } from 'vuex';

interface RootState {
  isLoggedInAsRobert: boolean;
}

const store: Store<RootState> = createStore<RootState>({
  state: {
    isLoggedInAsRobert: false,
  },
  mutations: {
    loginAsRobert(state) {
      state.isLoggedInAsRobert = true;
    },
    logout(state) {
      state.isLoggedInAsRobert = false;
    },
  },
  actions: {
  },
  modules: {
  },
});

export default store;
