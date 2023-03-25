import React from 'react'

class Base1 extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            username: '张三'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e)
    {
        this.setState({
            username: e.target.value
        })
    }

    render()
    {
        return(
            <div>
                用户名：<input type="text" value={this.state.username} onChange={this.handleChange} />
                <h3>{this.state.username}</h3>
            </div>
        )
    }
}

export default Base1