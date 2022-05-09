const initialState = {
    countries : [],
    details : []
}


function rootReducer(state = initialState, action) {

    switch(action.type) {
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
        default:
            return state
    }
}


export default rootReducer;