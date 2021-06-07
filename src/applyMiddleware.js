function applyMiddleware(...middlewares) {
    return function (oldCreateStore) {
        return function (reducer,initState) {
            const store=oldCreateStore(reducer,initState)
           const chain=middlewares.map(middleware=>middleware(store))
            let dispatch=store.dispatch
            chain.reverse().map(middleware => {
                dispatch = middleware(dispatch);
            });
            store.dispatch = dispatch;
            return store
        }
    }
}


module.exports=applyMiddleware
