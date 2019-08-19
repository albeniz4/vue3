export default {
    namespaced: true,
    state: {
        cities: ['seoul']
    },
    mutations: {
        add(state, city) {
            state.cities.push(city)
        }
    }
}