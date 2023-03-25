import React from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom'
import qs from "query-string"

const Params = () => {
    //获取params参数
    const params = useParams()
    console.log(params)

    //获取query参数
    // const search = useLocation()

    //单独只获取search参数
    const { search } = useLocation() 

    //利用query-string插件解析参数
    console.log(qs.parse(search))

    //单独接收某个参数(推荐使用这种)
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('name'))
    console.log(searchParams.get('age'))

    //获取state参数
    const { state } = useLocation()
    console.log(state)


    return (
        <>
            <h1>参数接收获取</h1>
        </>
    )
}

export default Params