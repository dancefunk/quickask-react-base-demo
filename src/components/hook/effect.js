import React from 'react'


const Effect = () =>
{
    //设置count初始变量、以及更新状态的函数
    const [count, setCount] = React.useState(0)

    const [product, setProduct] = React.useState([])

    const handleClick = () => 
    {
        setCount(count + 1)
    }

    //类似于vue的监听watch函数
    React.useEffect(() => {
        console.log('当count变量有变化的时候才会触发')
        console.log(count)
    }, [count])

    //在useEffect里面使用async await 语句
    React.useEffect(() => {
        async function FecthData()
        {
            //调用接口
            var result = await React.$api.ProductIndex()
            setProduct(result)
        }
        
        FecthData()
    }, [])

    console.log(product)


    return (
        <>
            <button type='button' onClick={handleClick}>count 状态数据的值为：{count} | 点击修改状态</button>
        </>
    )
}

export default Effect