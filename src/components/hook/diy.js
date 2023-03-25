import React from 'react'


//自定义hook函数
const useCount = (num = 0) =>
{
    let [count, setCount] = React.useState(num)

    //返回一个数组，数组中有状态的值、状态++的函数，状态--的函数
    return [
        count,
        () => setCount(count + 1),
        () => setCount(count - 1)
    ]
}

const Custom = () => 
{
    const [count, addCount, redCount] = useCount(1)

    return (
        <>
            <h1>自定义hook函数</h1>
            <h2>当前的值：{count}</h2>
            <button onClick={addCount}> + </button>
            <button onClick={redCount}> - </button>
        </>
    )
}

export default Custom