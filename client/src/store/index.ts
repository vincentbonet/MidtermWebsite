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
      localStorage.setItem('isLoggedInAsRobert', 'true');
    },
    logout(state) {
      state.isLoggedInAsRobert = false;
      localStorage.removeItem('isLoggedInAsRobert');
    },
  },
  actions: {
  },
  modules: {
  },
});

const loggedIn = localStorage.getItem('isLoggedInAsRobert');
if (loggedIn !== null) {
  store.commit('loginAsRobert');
}

export default store;
