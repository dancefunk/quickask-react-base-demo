import React from 'react'

class Base15 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            txtRef: React.createRef()
        }
    }


    render()
    {
        return(
            // 第一种写法
            <React.Fragment>
                React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
            </React.Fragment>

            // 第二种写法 短语法
            // <>
            //     React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
            // </>
        )
    }
}

export default Base15