import React from 'react'
import PropTypes from 'prop-types'

class Base3 extends React.Component{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

Base3.propTypes = {
    // title: PropTypes.number, //必须是数值类型
    title: PropTypes.string, //必须是字符串类型
}

export default Base3