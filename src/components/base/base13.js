import React from 'react'

class Base13 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            txtRef: React.createRef()
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick()
    {
        console.log(this.state.txtRef.current.value)
    }

    render()
    {
        return(
            <div>
                <input type="text" ref={this.state.txtRef} />
                <button onClick={this.handleClick}>获取文本框的值</button>
            </div>
        )
    }
}

export default Base13