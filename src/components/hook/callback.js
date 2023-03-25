import React from 'react'

const PageA = (props) =>
{
    console.log('当只有A改变的时候，只渲染PageA组件，PageB不会渲染')
    const { onClick, children } = props
    return <button onClick={onClick}>A的值：{children}</button>
}

const PageB = ({onClick, name}) =>
{
    console.log('当B改变的时候，会全部渲染')
    return <button onClick={onClick}>B的值：{name}</button>
}

const PageC = React.memo(PageB)


const Callback = () =>
{
    const [A, setA] = React.useState(0)
    const [B, setB] = React.useState(0)

    const handleClick1 = () =>
    {
        setA(A + 1)
    }

    const handleClick2 = React.useCallback(() => {
        setB(B + 1)
    }, [B])

    return (
        <>
            <h3>当只有A改变的时候，只渲染PageA组件，PageB不会渲染</h3>
            <h3>当B改变的时候，会全部渲染</h3>
            <PageA onClick={handleClick1}>{A}</PageA><br />
            <PageC onClick={handleClick2} name={B} /><br />
        </>
    )
}

export default Callback