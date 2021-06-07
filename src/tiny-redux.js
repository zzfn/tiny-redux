function createStore(initState) {
    let state=initState
    let listeners=[]
    function subscribe(listener) {
        listeners.push(listener)
    }
    function dispatch(action) {
        action()
        state=newState
        for(let n of listeners){
            n(state)
        }
    }
    function getState() {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}
// const store=createStore({info:{age:1},person:{age:1}})
// store.subscribe(r=>console.log('变了新状态',r))
// store.changeState({...store.getState(),info:{age:2}})
module.exports={createStore}