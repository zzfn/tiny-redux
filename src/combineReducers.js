import r1 from '../examples/reducer/menu'
import r2 from '../examples/reducer/user'

function combineReducers(reducers) {
    const reducersKeys = Object.keys(reducers)
    console.log(reducersKeys)
}

combineReducers({
    user: r1,
    menu: r2
})