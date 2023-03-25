import React from 'react'
import { useNavigate } from 'react-router-dom'

const Jump = () => {
    const navigate = useNavigate()


    const jump1 = (e) => {
        var title = '张三'
        navigate(`/router/params/${title}`)
    }

    const jump2 = (e) => {
        var name = 'zhangsan'
        var age = 20
        navigate(`/router/params?name=${name}&age=${age}`)
    }

    const jump3 = (e) => {
        var id = 20
        var name = '张三'
        navigate(`/router/params`, {state: {id, name}})
    }

    const jump4 = (e) => {
        var title = '张三'
        navigate(`/router/params/${title}`, {replace: true})
    }

    const jump5 = (e) => {
        var name = 'zhangsan'
        var age = 20
        navigate(`/router/params?name=${name}&age=${age}`, {replace: true})
    }

    const jump6 = (e) => {
        var id = 20
        var name = '张三'
        navigate(`/router/params`, {state: {id, name}, replace: true})
    }

    const jump7 = (e) => 
    {
        navigate(-1)
    }

    return (
        <>
            <button onClick={jump1}>1.push跳转+携带params参数</button>
            <button onClick={jump2}>2.push跳转+携带search参数</button>
            <button onClick={jump3}>3.push跳转+携带state参数</button>
            <button onClick={jump4}>4.replace跳转+携带params参数</button>
            <button onClick={jump5}>5.replace跳转+携带search参数</button>
            <button onClick={jump6}>6.replace跳转+携带state参数</button>
            <button onClick={jump7}>7.返回上一页</button>
        </>
    )
}

export default Jump