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

// dispatch a la base de datos
export function callApi() {

    return function (dispatch) {
        return fetch(`http://localhost:3002/countries`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }
}


export function detailGet(val) {
    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?ID=${val}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DETAIL', payload: data }))
    }
}

export function detailGetName(val) {
    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?name=${val}`)
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

    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?filterC=${valueFilter}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }
}

export function callApiFilterAct(valueFilter) {

    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?filterA=${valueFilter}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }
}

export function ordenAlpha(mode) {


    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?mode=${mode}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }

}

export function ordenPopul(mode) {


    return function (dispatch) {
        return fetch(`http://localhost:3002/countries?popul=${mode}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'DATA', payload: data }))
    }

}