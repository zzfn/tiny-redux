const asyncMiddleware = ({dispatch,getState}) => (next) => (action)  => {
    console.log('async=>',action.type)
    if(typeof action==='function'){
        return action(dispatch,getState)
    }
    next(action)
}
module.exports=asyncMiddleware
