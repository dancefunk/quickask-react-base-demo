import React from 'react'

class Base7 extends React.Component{
    constructor(props)
    {
        super(props)

        //让回调函数指向全局的this属性
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    //类中方法的写法
    handleClick1(e)
    {
        console.log('触发事件')

        // 事件对象
        console.log(e)
    }

    handleClick2(e, args)
    {
        console.log('触发事件')

        //传递的参数
        console.log(args)

        //事件对象
        console.log(e)
    }

    // 使用箭头函数的写法来解决 this的指向
    handleClick3 = (e) =>
    {
        //事件对象
        console.log(e)
    }

    //带参数结构
    handleClick4 = (e, args) =>
    {
        //传递的参数
        console.log(args)

        //事件对象
        console.log(e)
    }

    render()
    {
        return(
            <div>
                <button onClick={this.handleClick1}>第一种绑定事件</button>
                <button onClick={this.handleClick2.bind(this, 'hello world')}>第一种绑定事件(传参)</button>
                <button onClick={this.handleClick3}>第二种绑定事件(不传参)</button>
                <button onClick={this.handleClick4.bind(this,'hello world')}>第二种绑定事件(传参)</button>
            </div>
        )
    }
}


export default Base7