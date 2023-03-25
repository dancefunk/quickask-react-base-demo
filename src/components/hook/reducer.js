import React, { useReducer } from 'react'


const Reducer = () =>
{
    const inputRef = React.useRef()

    //创建一个reducer 状态的数据类型为数值
    const [count, CountDispatch] = useReducer((state, action) => {
        switch(action)
        {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)

    //创建一个reducer 状态的数据类型为对象
    const [list, ListDispatch] = useReducer((state, action) => {
        switch(action.type)
        {
            case 'add':
                return [
                    ...state,
                    {
                        id: state.length,
                        name: action.name
                    }
                ]
            case 'remove':
                return state.filter((_,index) => index !== action.index)
            case 'clear':
                return []
            default:
                return state
        }
    }, [])

    //表单提交方法
    const handleSubmit = (e) => 
    {
        e.preventDefault()

        ListDispatch({
            type:'add',
            name:inputRef.current.value
        })

        inputRef.current.value = ''
        inputRef.current.focus()
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => CountDispatch('add')}>自增</button>
            <button onClick={() => CountDispatch('sub')}>减少</button>

            <h1>对象类型的reducer</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} />
                <button type='submit'>提交</button>
            </form>

            <button onClick={() => {ListDispatch({type: 'clear'})}}>清理</button>
            
            <ul>
                {list.map((item,index) => (
                    <li key={item.id}>{item.name}
                        <button onClick={() => ListDispatch({type:'remove',index})}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Reducer