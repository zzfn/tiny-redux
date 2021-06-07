function userReducer(state, {type,payload}) {
    switch (type) {
        case 'user/name':
            return {
                ...state,
                name: payload
            }
        case 'user/age':
            return {
                ...state,
                age: payload
            }
        default:
            return state;
    }
}
module.exports= userReducer
