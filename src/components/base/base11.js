import React from 'react'

class Base11 extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            password:''
        }

        this.change = this.change.bind(this)
    }

    change(event)
    {
        // 获取输入的dom节点
        let target = event.target

        // input标签上定义的name的值
        let name = target.name

        this.setState({ 
            [name]: target.value
        })
    }

    render() {
        return(
            <div>
                <h4>表单输入</h4>
                <input type="text" name="username" placeholder="用户名" value={this.state.username} onChange={this.change} /><br />
                <input type="text" name="password" placeholder="密码" value={this.state.password} onChange={this.change} /><br />
                <p>
                    用户名：{this.state.username}<br />
                    密码：{this.state.password}<br />
                </p>
            </div>
        )
    }
}

export default Base11