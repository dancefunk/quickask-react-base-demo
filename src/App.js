import {BrowserRouter,Routes, Route, Outlet, Link, NavLink} from 'react-router-dom'
import './App.css';

import Home from '@/components/home.js'

//快速入门
import Base1 from '@/components/base/base1.js'
import Base2 from '@/components/base/base2.js'
import Base3 from '@/components/base/base3.js'
import Base4 from '@/components/base/base4.js'
import Base5 from '@/components/base/base5.js'
import Base6 from '@/components/base/base6.js'
import Base7 from '@/components/base/base7.js'
import Base8 from '@/components/base/base8.js'
import Base9 from '@/components/base/base9.js'
import Base10 from '@/components/base/base10.js'
import Base11 from '@/components/base/base11.js'
import Base12 from '@/components/base/base12.js'
import Base13 from '@/components/base/base13.js'
import Base14 from '@/components/base/base14.js'
import Base15 from '@/components/base/base15.js'
import Base16 from '@/components/base/base16.js'

// 构建路由
import Params from '@/components/router/params.js'
import Jump from '@/components/router/jump.js'
import Redirect from '@/components/router/redirect.js'
import Login from '@/components/router/login.js'

// Hook 钩子函数
import Callback from '@/components/hook/callback.js'
import Context from '@/components/hook/context.js'
import Diy from '@/components/hook/diy.js'
import Effect from '@/components/hook/effect.js'
import Memo from '@/components/hook/memo.js'
import Reducer from '@/components/hook/reducer.js'
import Ref from '@/components/hook/ref.js'
import State from '@/components/hook/state.js'


function App() 
{
  return (
    <div className='App'>
      <BrowserRouter>
        {/* 定义路由 */}
        <Routes>
          {/* 默认首页 */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/" element={<><Outlet /></>}>
            {/* 快速入门 */}
            <Route path="/base" element={<><Outlet /></>}>
              <Route path="1" element={<Base1 />}></Route>
              <Route path="2" element={<Base2 />}></Route>
              <Route path="3" element={<Base3 title="hello world" />}></Route>
              <Route path="4" element={<Base4 />}></Route>
              <Route path="5" element={<Base5 />}></Route>
              <Route path="6" element={<Base6 />}></Route>
              <Route path="7" element={<Base7 />}></Route>
              <Route path="8" element={<Base8 />}></Route>
              <Route path="9" element={<Base9 />}></Route>
              <Route path="10" element={<Base10 />}></Route>
              <Route path="11" element={<Base11 />}></Route>
              <Route path="12" element={<Base12 />}></Route>
              <Route path="13" element={<Base13 />}></Route>
              <Route path="14" element={<Base14 />}></Route>
              <Route path="15" element={<Base15 />}></Route>
              <Route path="16" element={<Base16 />}></Route>
            </Route>

            {/* 构建路由 */}
            <Route path="/router" element={<><Outlet /></>}>
              {/* 参数传递与接收 */}
	            <Route path="params/:title" element={<Params />}></Route>
	            
	            {/* 多个参数 */}
	            <Route path="params/:title/:id" element={<Params />}></Route>
	            
	            {/* query传参 */}
	            <Route path="params" element={<Params />}></Route>
              
              {/* 页面跳转 */}
	            <Route path="jump" element={<Jump />}></Route>

              {/* 重定向 */}
	            <Route path="redirect" element={<Redirect />}></Route>
	            <Route path="login" element={<Login />}></Route>
            </Route>

            {/* HOOK钩子 */}
            <Route path="/hook" element={<><Outlet /></>}>
              <Route path="callback" element={<Callback />}></Route>
              <Route path="context" element={<Context />}></Route>
              <Route path="diy" element={<Diy />}></Route>
              <Route path="effect" element={<Effect />}></Route>
              <Route path="memo" element={<Memo />}></Route>
              <Route path="reducer" element={<Reducer />}></Route>
              <Route path="ref" element={<Ref />}></Route>
              <Route path="state" element={<State />}></Route>
            </Route>
          </Route>

        </Routes>

        <hr />

        <h4>快速入门</h4>
        <Link to="/">去首页</Link><br />
        <Link to="/base/1">1-组件渲染</Link><br />
        <Link to="/base/2">2-State</Link><br />
        <Link to="/base/3">3-Props</Link><br />
        <Link to="/base/4">4-组件通信</Link><br />
        <Link to="/base/5">5-生命周期</Link><br />
        <Link to="/base/6">6-JSX</Link><br />
        <Link to="/base/7">7-事件绑定</Link><br />
        <Link to="/base/8">8-列表渲染</Link><br />
        <Link to="/base/9">9-条件渲染</Link><br />
        <Link to="/base/10">10-表单处理-表单元素</Link><br />
        <Link to="/base/11">11-表单处理-多个输入框</Link><br />
        <Link to="/base/12">12-表单处理-多元素</Link><br />
        <Link to="/base/13">13-表单处理-非受控组件</Link><br />
        <Link to="/base/14">14-Refs</Link><br />
        <Link to="/base/15">15-Fragments</Link><br />
        <Link to="/base/16">16-严格模式</Link><br />

        <hr />

        <h4>params传参方式 - 需要提前定义路由传参结构 /router/params/:title</h4>
        <Link to={`/router/params/张三`}>单个参数 - 控制台打印</Link><br />
        <Link to={`/router/params/李四/123`}>多个参数 - 控制台打印</Link><br />

        <h4>query传参方式 - 需要用到query-string插件</h4>
        <Link to={`/router/params?name=zhangsan&age=20`}>query传参方式 - 控制台打印</Link>

        <h4>state传参方式</h4>
        <Link to="/router/params" state={{id: 20, name: '张三'}}>State传参 - 控制台打印</Link>

        <h4>页面跳转</h4>
        <Link to="/router/jump">页面跳转方式</Link>

        <h4>页面重定向自动跳转</h4>
        <Link to="/router/redirect">页面重定向自动跳转到登录界面 /user/base/login</Link>

        <hr />

        <h1>API Hook</h1>

        <Link to="/hook/state">state钩子函数</Link><br />
        <Link to="/hook/effect">effect钩子函数</Link><br />
        <Link to="/hook/context">context钩子函数</Link><br />
        <Link to="/hook/reducer">reducer钩子函数</Link><br />
        <Link to="/hook/callback">callback钩子函数</Link><br />
        <Link to="/hook/memo">memo钩子函数</Link><br />
        <Link to="/hook/ref">ref钩子函数</Link><br />
        <Link to="/hook/diy">自定义钩子函数</Link><br />

        
      </BrowserRouter>
    </div>
  );
}

export default App;
