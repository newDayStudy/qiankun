
class Emitter{
    constructor() {
        this.list = {}
    }

    on(event, fn) {
        (this.list[event] || (this.list[event] = [])).push(fn)
        // console.log('list===', this.list)
    }

    off(event, fn) {
        let fns = this.list[event]
        if (!fns) return false
        if (!fn) {
            fns && (fns.length = 0)
        } else {
            let cb;
            for (let i = 0, cbLen = fns.length; i<cbLen; i++) {
                cb = fns[i]
                // console.log(cb, fn, cb.fn)
                if (cb === fn || cb.fn == fn) {
                    delete fns[i]
                    // fns.splice(i, 1)
                    break
                }
            }
        }
    }

    once(event, fn) {
        const _this = this
        const on = function() {
            _this.off(event, on)
            fn.apply(_this, arguments)
        }
        on.fn = fn
        this.on(event, on)
    }

    emit() {
        let event = [].shift.call(arguments),
            fns = this.list[event]

        if (!fns || fns.length == 0) {
            return false
        }
        fns.forEach(fn => fn.apply(this, arguments))
    }
}

//
// const emit = new Emitter()
//
// function header(content){
//     console.log('header更新', content)
// }
// function menu(content){
//     console.log('menu更新', content)
// }
// function personal(content) {
//     console.log('personal更新', content)
// }
//
// emit.once('login success', header)
//
// emit.on('login success', menu)
//
// emit.on('login success', personal)
//
// // emit.off('login success', menu)
//
// emit.emit('login success', '131313')
// // console.log('----------------')
// emit.emit('login success', '434343')
// // console.log('----------------')
// emit.emit('login success', '343422')

