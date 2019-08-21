export default {
  namespaced: true,
  state: {
    animals: [{ idx: 0, name: "호랑이" }]
  },
  mutations: {
    add(state, animal) {
      state.animals.push({
        idx:
          state.animals.length === 0
            ? 0
            : Math.max(...state.animals.map(obj => obj.idx)) + 1,
        name: animal
      });
    },
    remove(state, idx) {
      let arrayIndex = state.animals.findIndex(obj => obj.idx === idx);
      if (arrayIndex > -1) state.animals.splice(arrayIndex, 1);
    }
  }
};
