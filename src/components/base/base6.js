import React from 'react'

class Base6 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            show: false,
            myStyle: {
                fontSize: '100px',
                color: 'red'
            },
            list: [
                <span>姓名：张三</span>,
                <span>性别：男</span>,
                <span>年龄：20</span>,
            ]
        }
    }

    render()
    {
        return (
            <div>
                {/* 表达式 */}
                <p>{1 + 1}</p>

                {/* 三元运算符 */}
                {this.state.show ? '显示' : '隐藏'}

                {/* 样式写法 */}
                <p style={this.state.myStyle}>样式写法</p>

                {/* 数组写法 下面这样写可以显示 但是会报错，需要嵌入循环 */}
                <div>{/*this.state.list*/}</div>

                {/* 数组写法 正确写法 */}
                <div>
                    {this.state.list.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
                

                {/* 数组写法 上面的写法有些麻烦，可以继续简化 */}
                <div>
                    <Info info={this.state.list} />
                </div>


            </div>
        )
    }
}

function Info(props)
{
    const list = props.info.map((item, index) => <p key={index}>{item}</p>)
    return list
}

export default Base6