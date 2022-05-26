const initialState = {
    countries: [],
    details: [],
    sorts: []
}


function rootReducer(state = initialState, action) {



    switch (action.type) {
        case 'DATA':

            return {
                ...state,
                countries: action.payload
            }
        case 'DETAIL':
            return {
                ...state,
                details: action.payload
            }
        case 'ORDERALPHA':
            let names = state.countries.map(d => {
                return d.Name
            })

            if (action.payload === 'ASC') {
                let ascendente = names.sort().map(d => {
                    for (let i = 0; i < state.countries.length; i++) {
                        if (d === state.countries[i].Name) {
                            return state.countries[i]
                        }

                    }
                })

                return {
                    ...state,
                    countries: ascendente
                }
            } else {
                let descendente = names.sort().reverse().map(d => {
                    for (let i = 0; i < state.countries.length; i++) {
                        if (d === state.countries[i].Name) {
                            return state.countries[i]
                        }

                    }
                })
                return {
                    ...state,
                    countries: descendente
                }
            }
        case 'ORDERPOPUL':
            let valores = state.countries.map(d => {
                return { population: d.Population, Name: d.Name }
            })

            if (action.payload === 'ASC') {
                let ascendente = valores.sort((a, b) => a.population - b.population).map(d => {
                    for (let i = 0; i < state.countries.length; i++) {
                        if (d.population === state.countries[i].Population && d.Name === state.countries[i].Name) {
                            return state.countries[i]
                        }

                    }
                })

                return {
                    ...state,
                    countries: ascendente
                }
            } else {
                let descendente = valores.sort((a, b) => b.population - a.population).map(d => {
                    for (let i = 0; i < state.countries.length; i++) {
                        if (d.population === state.countries[i].Population && d.Name === state.countries[i].Name) {
                            return state.countries[i]
                        }

                    }
                })
                return {
                    ...state,
                    countries: descendente
                }
            }
        case 'ORDENAREA':
            if(action.payload === 'DESC') {
                return {
                    ...state,
                    countries: state.countries.sort((a, b) => b.Area - a.Area)
                }
            }
            else{
                return {
                    ...state,
                    countries : state.countries.sort((a,b) => a.Area - b.Area)
                }
            }
        default:
            return state
    }
}


export default rootReducer;