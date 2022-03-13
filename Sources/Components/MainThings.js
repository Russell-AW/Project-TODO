import React, {useState} from 'react';
import {TiEdit} from 'react-icons/ti';
import {RiCloseCircleLine} from 'react-icons/ri';
import DaForms from './DaForms';

const MainThings= ({todos, completeTodo, removeTodo, updateTODO})=> {
    const [add, setAdd] = useState({
        id: null,
        value : ''
    });

    const Submit = value=>{
        updateTODO(add.id, value)
        setAdd({
            id:null,
            value:''
        })
    }

    if (add.id) {
        return <DaForms edit={add} onSubmit={Submit}/>;
    }

  return todos.map((todo,index)=>(
  <div 
  className={todo.isComplete ? 'map complete' : 'map'} 
key={index}>

    <div key={todo.id} onclick={()=> completeTodo(todo.id)}>
        {todo.text}
    </div>
    <div className="Pics">
        <RiCloseCircleLine 
        onClick={()=>removeTodo(todo.id)}
        className='delete'/>
        <TiEdit 
        onClick={()=>setAdd({id: todo.id, value: todo.text})}
        className='edit'/>
    </div>

</div>
  ));
}
export default MainThings;