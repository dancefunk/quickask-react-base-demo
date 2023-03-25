import React from 'react'


const State = () =>
{
    //设置count初始变量、以及更新状态的函数
    const [count, setCount] = React.useState(0)

    const [user, setUser] = React.useState({})

    const [list, setList] = React.useState([])

    const handleClick = () => 
    {
        setCount(count + 1)
    }

    //更新对象类型的数据
    const handleClick2 = () =>
    {
        var data = {
            nickname: '张三',
            sex: '男',
            age: 21
        }

        setUser(data)
    }

    //更新数组对象类型
    const handleClick3 = () =>
    {
        var list = [
            {id:1, price:2000, username: '张三'},
            {id:2, price:3000, username: '小明'},
            {id:3, price:4000, username: '小李'},
            {id:4, price:5000, username: '王五'},
        ]

        setList(list)
    }

    //类似于vue的监听watch函数
    React.useEffect(() => {
        console.log('当user变量有变化的时候才会触发')
        console.log(user)
    }, [user])

    React.useEffect(() => {
        console.log('当list变量有变化的时候才会触发')
        console.log(list)
    }, [list])


    return (
        <>
            <button type='button' onClick={handleClick}>count 状态数据的值为：{count} | 点击修改状态</button>

            <button type='button' onClick={handleClick2}>修改对象类型的数据</button>

            <button type='button' onClick={handleClick3}>修改数组对象类型的数据</button>
        </>
    )
}

export default State