import React from 'react'

class Base16 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            demo: React.createRef()  //创建一个Ref属性对象
        }
    }

    render()
    {
        return(
            // 第一种写法
            <React.StrictMode>
                React.StrictMode 是一个用来突出显示应用程序中潜在问题的工具<br />
                与 Fragment 一样，StrictMode 不会渲染任何可见的 UI <br />
                它为其后代元素触发额外的检查和警告 <br />
                <input type="text" ref={this.state.demo} />

                在严格模式下面是不能运行的
                <input type="text" ref="demo" />
            </React.StrictMode>
        )
    }
}

export default Base16