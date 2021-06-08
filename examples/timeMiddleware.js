const timeMiddleware = store => next => (action) => {
    console.log('pre=>',action.type)
    next(action)
}
module.exports = timeMiddleware
