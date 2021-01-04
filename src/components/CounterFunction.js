import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'
import '../style.css'

import { counterStoreFunction } from '../stores'

const store = counterStoreFunction()

export const CounterFunction = observer(props => {
    useEffect(() => {
        runInAction(() => {
            store.count = props.initialCount ?? 0
        })
    }, [props.initialCount])

    return (
        <div className="counter">
            <button onClick={store.dec}>-</button>
            <span style={{ color: store.color}}>{store.count}</span>
            <button onClick={store.inc}>+</button>
        </div>
    )
})

// import React from 'react'
// import { observer, useLocalObservable } from 'mobx-react'
// import '../style.css'

// export const CounterFunction = observer(props => {
//     // const { dec, inc, count } = ...
//     const store = useLocalObservable(()=> {
//         return {
//             count: props.initialCount ?? 0,
//             get color() {
//                 return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black'
//             },
//             dec() {
//                 this.count--
//             },
//             inc() {
//                 this.count++
//             }
//         }
//     })

//     return (
//         <div className="counter">
//             <button onClick={store.dec}>-</button>
//             <span style={{ color: store.color}}>{store.count}</span>
//             <button onClick={store.inc}>+</button>
//         </div>
//     )
// })

// import React from 'react'
// import { observer, useLocalObservable, Observer } from 'mobx-react'


// export const CounterFunction = props => {
//     // const { dec, inc, count } = ...
//     const store = useLocalObservable(()=> {
//         return {
//             count: props.initialCount ?? 0,
//             dec() {
//                 this.count--
//             },
//             inc() {
//                 this.count++
//             }
//         }
//     })

//     return (
//         <div style={{backgroundColor: 'lightgray', padding: '40px'}}>
//             <button onClick={store.dec}>-</button>
//             <Observer>{() => (
//                 <span>{store.count}</span>
//             )}
//             </Observer>
//             <button onClick={store.inc}>+</button>
//         </div>
//     )
// }


// import React, {useState} from 'react'


// export function CounterFunction(props) {
//     const [count, setCount] = useState(props.initialCount ?? 0)
//     const dec = () => setCount(prevCount => prevCount - 1)
//     const inc = () => setCount(prevCount => prevCount + 1)
//     return (
//         <div style={{backgroundColor: 'lightgray', padding: '40px'}}>
//             <button onClick={dec}>-</button>
//             <span>{count}</span>
//             <button onClick={inc}>+</button>
//         </div>
//     )
// }