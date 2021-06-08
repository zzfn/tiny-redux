const loggerMiddleware = (store) => (next) => (action)  => {
    console.log(`loggerMiddleware before next action `)
    next(action)
    console.log(`loggerMiddleware after next action `)
}
module.exports=loggerMiddleware
