let state = {
  users: [],
  isLoggedIn: false,
  currentUser: null, 
};

const getters = {
  getAllUsers: () => state.users,
  getUserById: (id) => state.users.find(user => user.id === +id),
  isLoggedIn: () => state.isLoggedIn,
  currentUser: () => state.currentUser,
};

const mutations = {
  addUser: (user) => state.users.push(user),
  updateUser: ({ id, user }) => {
      const index = state.users.findIndex(u => u.id === +id);
      if (index !== -1) {
          state.users[index] = user;
      }
  },
  deleteUser: (id) => {
      state.users = state.users.filter(user => user.id !== +id);
  },
  login: (user) => {
      state.isLoggedIn = true;
      state.currentUser = user;
  },
  logout: () => {
      state.isLoggedIn = false;
      state.currentUser = null;
  },
};

const actions = {
  addUser: (user) => mutations.addUser(user),
  updateUser: ({ id, user }) => mutations.updateUser({ id, user }),
  deleteUser: (id) => mutations.deleteUser(id),
  login: ({ commit }, user) => commit('login', user),
  logout: ({ commit }) => commit('logout'),
};

module.exports = {
  state,
  getters,
  mutations,
  actions,
};
