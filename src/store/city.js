export default {
    namespaced: true,
    state: {
        cities: [{idx:0, name:'Seoul'}]
    },
    mutations: {
        add(state, city) {
            state.cities.push(
                {
                    idx: state.cities.length === 0 ? 0 : Math.max(...state.cities.map(obj => obj.idx)) + 1,
                    name: city
                }
            )
        },
        remove(state, idx) {
            let arrayIndex = state.cities.findIndex(obj => obj.idx === idx);
            if (arrayIndex > -1) state.cities.splice(arrayIndex, 1);
        }
    }
}