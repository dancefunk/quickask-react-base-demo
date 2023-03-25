import React from 'react'

class Base10 extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            username: ''
        }

        this.changeUsername = this.changeUsername.bind(this)
    }

    changeUsername(e)
    { 
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h4>表单输入</h4>
                <input type="text" value={this.state.username} onChange={this.changeUsername} />
                <p>输入结果为：{this.state.username}</p>
            </div>
        )
    }
}

export default Base10