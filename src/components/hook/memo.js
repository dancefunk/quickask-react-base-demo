import React from 'react'

const Memo = () => 
{
    const [count, setCount] = React.useState(0)
    const [dep, setDep] = React.useState(0)

    console.log('渲染')

    const ChangeCount = () =>
    {
        setCount(count + 1)
    }

    const ChangeDep = () =>
    {
        setDep(dep + 1)
    }

    const total = () =>
    {
        console.log('没有缓存的变量方法')
        return 2 * count
    }

    const memoTotal = React.useMemo(() => {
        console.log('被缓存的变量方法')
        return 2 * count
    }, [count])

    return (
        <>
            <h1>当count改变的时候会全部重新渲染</h1>
            <h1>当dep改变的时候只会部分渲染，count没有改变不会重复渲染</h1>
            <button onClick={ChangeCount}>
                count变量改变 | {count}
            </button>

            <button onClick={ChangeDep}>
                dep变量改变 | {dep}
            </button>

            <h3>total: {total()}</h3>
            <h3>memo total: {memoTotal}</h3>
        </>
    )
}


export default Memo