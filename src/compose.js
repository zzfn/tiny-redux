function compose(...args) {
    if (args.length === 1) {
        return args[0]
    }
    return args.reduce((a, b) => (...args) => a(b(...args)))
}
function plus(num) {
    return num+3
}
function ss(num) {
    return num*2
}
function ff(num) {
    return num+10
}

console.log(plus(ss((ff(2)))))
console.log(compose(plus,ss,ff)(2))