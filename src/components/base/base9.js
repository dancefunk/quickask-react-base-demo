import React from 'react'

class Base9 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            login: false
        }
    }

    render()
    {
        // 在外部封装条件判断
        let login = null

        if(this.state.login)
        {
            login = <button>已经登录</button>
        }else
        {
            login = <button>暂未登录</button>
        }

        return(
            <div>
                {login}<br /><br />
                {this.state.login ? <button>已经登录</button> : <button>暂未登录</button>}
            </div>
        )
    }
}

export default Base9