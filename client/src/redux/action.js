
export  function callAsyncPost() {
    return function(dispatch) {
        
        return fetch('http://localhost:3002', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success: ', response))
        
    }
}

export function callApi(value) {
    
    return function(dispatch) {
        return fetch(`http://localhost:3002/countries?page=${value}&size=10`)
        .then(response => response.json()) 
        .then(data => dispatch({type: 'DATA', payload: data.rows}))
    }
}


export function detailGet(val) {
    return function(dispatch) {
        return fetch(`http://localhost:3002/countries?ID=${val}`)
        .then(response => response.json()) 
        .then(data => dispatch({type: 'DETAIL', payload: data}))
    }
}

export function CreatedActivity(value) {

    
    return function(dispatch) {
        return fetch('http://localhost:3002/activity', {
            method : 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log('Success: ', response))
        

    }

}