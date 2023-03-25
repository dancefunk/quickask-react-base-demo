import React from 'react'

//创建一个上下文  context 实际上代表就是全局变量
const Con = React.createContext(null)

const Child = () =>
{
    // 使用上下文，因为传入的是对象，则接受也应该是对象
    const {count, setCount} = React.useContext(Con)

    const add = () =>
    {
        setCount(count + 1)
    }

    return (
        <button onClick={add}>{count} | 点击自增</button>
    )
}

const Context = () => 
{
    const [count, setCount] = React.useState(0)

    return (
        // 指定上下文使用范围，使用provider,并传入读数据和写入据
        <Con.Provider value={{count, setCount}}>
            <Child />
        </Con.Provider>
    )
}

export default Context