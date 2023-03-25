import React from 'react'

class Son extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            sondata: 'hello son'
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick()
    {
        //调用父组件的自定义事件
        this.props.getData(this.state.sondata)
    }

    render()
    {
        return(
            <div>
                <h4>子组件接收到的数据为：{this.props.data}</h4>
                <button onClick={this.handleClick}>点击给父组件传值</button>
            </div>
        )
    }
}

class Base4 extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            data: 'hello world'
        }

        this.getData = this.getData.bind(this)
    }

    getData(data)
    {
        console.log(`子元素传递过来的数据为：${data}`)
    }

    render()
    {
        return(
            <div>
                <h2>父传子用属性</h2>
                <h2>子传父用事件</h2>
                <Son data={this.state.data} getData={this.getData} />
            </div>
        )
    }
}

export default Base4