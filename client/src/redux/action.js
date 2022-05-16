//primer llamado a la api y accion del bulkCreate
export function callAsyncPost() {
    return function (dispatch) {

        return fetch('http://localhost:3002', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(res => res.json())
        // .then(response => console.log('Success: ', response))

    }
}

// peticiones a la base de datos
export function callApi() {

    return function (dispatch) {
        return fetch(`http://localhost:3002/countries`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }
}


export function detailGet(ID) {
    return function (dispatch) {
        return fetch(`http://localhost:3002/countries/${ID}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DETAIL', payload: data }))
    }
}

export function detailGetName(val) {
    return function (dispatch) {
        return fetch(`http://localhost:3002/countries/name?name=${val}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
            .catch(error => console.log(error))
    }
}


export function CreatedActivity(value) {



    return function (dispatch) {
        return fetch('http://localhost:3002/activity', {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(res => res.json())
        // .then(response => console.log('Success: ', response))


    }

}

// acciones de filtrado...

export function callApiFilter(valueFilter) {
// filtro por continente
    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?filterC=${valueFilter}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }
}

export function callApiFilterAct(valueFilter) {
// filtro por actividad turistica
    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?filterA=${valueFilter}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }
}

export function ordenAlpha(mode) {
// filtro alfabetico

    // return function (dispatch) {
    //     return fetch(`http://localhost:3002/countries?mode=${mode}`)
    //         .then(response => response.json())
    //         .then(data => dispatch({ type: 'DATA', payload: data }))
    // }
    
    return {
        type : 'ORDERALPHA',
        payload : mode
    }

}

export function ordenPopul(mode) {
// filtro por poblacion

    // return function (dispatch) {
    //     return fetch(`http://localhost:3002/countries?popul=${mode}`)
    //         .then(response => response.json())
    //         .then(data => dispatch({ type: 'DATA', payload: data }))
    // }

    return {
        type : 'ORDERPOPUL',
        payload : mode
    }

}