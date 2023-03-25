import React from 'react'

class Base12 extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {
            username: '',
            password: '',
            sex:0,
            loves:['1','2'],
            city:'bj',
            content:'',
            avatar:null,
            avatarCDN:'',
            email: React.createRef(),  //借助ref 获取原始的DOM对象
        }
    }

    profile = (e) => 
    {
        let name = e.target.name

        this.setState({
            //[] 可以解析为 name变量的值
            [name]: e.target.value
        })
    }

    avatar = (e) => 
    {
        var avatar = e.target.files[0]

        var avatarCDN = URL.createObjectURL(avatar)

        this.setState({
            avatar:avatar,
            avatarCDN:avatarCDN
        })
    }

    loves = (e) => 
    {
        let val = e.target.value

        var loves = this.state.loves

        //选中
        if(e.target.checked)
        {
            loves.push(val)
        }else
        {
            //取消
            //先找出下标
            var index = loves.findIndex(item => item == val)

            //在截取删除
            loves.splice(index, 1)
        }

        this.setState({
            loves: loves
        })
    }

    edit = (e) => 
    {
        //阻止元素的默认功能 提交功能
        e.preventDefault()

        console.log(this.state)
        return false
    }

    GetEmail = (e) => 
    {
        console.log(this.state.email.current.value)
    }

    render()
    {
        let preview = ''

        if(this.state.avatarCDN)
        {
            preview = <img src={this.state.avatarCDN} />
        }

        return (
            <div>
                <form onSubmit={this.edit}>
                    用户名：<input type="text" name="username" value={this.state.username} onChange={this.profile} /><br />

                    {/* ref对象 不绑定value 直接获取纯原始的dom元素 这个是ref知识点的案例 */}
                    邮箱： 
                    <input type="email" onChange={this.GetEmail} ref={this.state.email} />
                    <br />

                    密码：<input type="password" name="password" value={this.state.password} onChange={this.profile} /><br />

                    性别：
                    <input type="radio" name="sex" value="0" checked={this.state.sex == '0' ? true : false} onChange={this.profile} />保密
                    <input type="radio" name="sex" value="1" checked={this.state.sex == '1' ? true : false} onChange={this.profile} />男
                    <input type="radio" name="sex" value="2" checked={this.state.sex == '2' ? true : false} onChange={this.profile} />女<br />

                    复选框：
                    <input type="checkbox" name="love" value="1" onChange={this.loves} checked={this.state.loves.includes('1')} />爱好1
                    <input type="checkbox" name="love" value="2" onChange={this.loves} checked={this.state.loves.includes('2')} />爱好2
                    <input type="checkbox" name="love" value="3" onChange={this.loves} checked={this.state.loves.includes('3')} />爱好3
                    <input type="checkbox" name="love" value="4" onChange={this.loves} checked={this.state.loves.includes('4')} />爱好4
                    <br />

                    下拉框：
                    <select value={this.state.city} name="city" onChange={this.profile}>
                        <option value="gz">广州</option>
                        <option value="bj">北京</option>
                        <option value="sz">深圳</option>
                    </select><br />

                    多行文本框：
                    <textarea name="content" value={this.state.content} onChange={this.profile}></textarea><br />

                    图片：
                    <input type="file" name="avatar" onChange={this.avatar} /><br />

                    {preview}<br />

                    <button type="submit">提交</button>
                </form>
            </div>
        )
    }
}

export default Base12