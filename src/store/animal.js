export default {
    namespaced: true,
    state: {
        animals: ['tiger']
    },
    mutations: {
        add(state, animal) {
            state.animals.push(animal)
        }
    }
}