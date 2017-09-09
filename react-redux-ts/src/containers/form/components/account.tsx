const LOAD = 'redux-form-examples/account/LOAD';

const reducer:any = (state = {}, action:any) => {
    switch (action.type) {
        case LOAD:
            return {
                data: action.data
            }
        default:
            return state
    }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = (data:any) => ({ type: LOAD, data })

export default reducer;