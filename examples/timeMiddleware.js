const timeMiddleware = store => next => (action) => {
    console.log(`timeMiddleware before next action `)
    next(action)
    console.log(`timeMiddleware after next action `)
}
module.exports = timeMiddleware
