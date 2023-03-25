import React from 'react'

class Base8 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            list: [
                {username:'zs1',age:20,id:"01"},
                {username:'zs2',age:21,id:"02"},
                {username:'zs3',age:22,id:"03"},
                {username:'zs4',age:23,id:"04"},
            ]
        }
    }

    render()
    {
        const items = this.state.list.map((item, index) => {
            return (
                <li key={item.id}>
                    {index+1}. <span>用户名: {item.username}</span> <span>年龄: {item.age}</span>
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,index)=> {
                            return (
                                <li key={item.id}>
                                    {index+1}. <span>用户名: {item.username}</span> <span>年龄: {item.age}</span>
                                </li>
                            )
                        })
                    }    
                </ul>

                <ul>
                    {items}
                </ul>
            </div>
            
        )
    }
}

export default Base8