import React from 'react'

const Ref = () =>
{
    //空
    // const inputRef = React.useRef()

    //有值
    const inputRef = React.useRef(80)

    const handleChange = () =>
    {
        console.log(inputRef.current.value)
    }

    return (
        <>
            <h3>Ref属性</h3>
            <h3>当前的值：{inputRef.current}</h3>
            <input type="text" ref={inputRef} />
            <button onClick={handleChange}>提交 - 控制台看结果</button>
        </>       
    )
}

export default Ref