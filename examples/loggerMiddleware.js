const loggerMiddleware = (store) => (next) => (action)  => {
    console.log('post=>',action.type)
    next(action)
}
module.exports=loggerMiddleware
