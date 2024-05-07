let state = {
    users: [],
  };
  
  const getters = {
    getAllUsers: () => state.users,
    getUserById: (id) => state.users.find(user => user.id === +id),
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
  };
  
  const actions = {
    addUser: (user) => mutations.addUser(user),
    updateUser: ({ id, user }) => mutations.updateUser({ id, user }),
    deleteUser: (id) => mutations.deleteUser(id),
  };
  
  module.exports = {
    state,
    getters,
    mutations,
    actions,
  };
  