function applyMiddleware(...middlewares) {
    return function (oldCreateStore) {
        return function (reducer, initState) {
            const store = oldCreateStore(reducer, initState)
            const chain = middlewares.map(middleware => middleware(store))
            // let dispatch=store.dispatch
            // chain.reverse().map(middleware => {
            //     dispatch = middleware(dispatch);
            // });
            // let dispatch=compose(...chain)(store.dispatch)
            store.dispatch = compose(...chain)(store.dispatch);
            return store
        }
    }
}

function compose(...args) {
    if (args.length === 1) {
        return args[0]
    }
    return args.reduce((a, b) => (...args) => a(b(...args)))
}

module.exports = applyMiddleware
