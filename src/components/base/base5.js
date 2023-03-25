import React from 'react'

//父组件
class Base5 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            num: 0,
            show: true,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleChange()
    {
        this.setState({
            num: this.state.num + 1
        })
    }

    handleShow()
    {
        this.setState({
            show: !this.state.show
        })
    }

    render()
    {
        return (
            <div>
                <button onClick={this.handleShow}>切换显示和隐藏</button>
                <button onClick={this.handleChange}>自增</button>
                {this.state.show ? <Content num={this.state.num} /> : ''}
            </div>
        )
    }
}

//子组件
class Content extends React.Component{
    //生命周期中第一个触发的是 构造函数 constructor render()
    constructor(props)
    {
        super(props)
    }

    //生命周期 挂载前  beforeCreate  这个生命周期已经废弃了
    // componentWillMount()
    // {
    //     console.log('挂载前')
    // }

    //挂载后 created 在这个阶段是可以获取到真实的dom元素
    componentDidMount()
    {
        console.log('挂载后')
    }

    //父组件的数据发生改变  这个生命周期也废弃了
    // componentWillReceiveProps()
    // {
    //     console.log('父组件的数据发生改变')
    // }

    //询问是否可以更新  watch 
    shouldComponentUpdate(newnum, oldnum)
    {
        console.log('询问是否可以更新')
        // console.log('新的值为')
        // console.log(newnum)
        // console.log('旧的值为')
        // console.log(oldnum)
        return true
    }

    //数据更新前  这个生命周期也废弃了
    // componentWillUpdate()
    // {
    //     console.log('数据更新前')
    // }

    //数据更新后
    componentDidUpdate()
    {
        console.log('数据更新后')
    }

    //组件销毁前
    componentWillUnmount()
    {
        console.log('组件将要销毁时触发的函数')
    }

    render()
    {
        return (
            <div>
                <h3>{this.props.num}</h3>    
            </div>
        )
    }
}

export default Base5