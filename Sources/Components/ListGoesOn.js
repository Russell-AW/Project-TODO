import React, {useState} from 'react';
import DaForms from './DaForms';
import MainThings from './MainThings';

function ListGoesOn() {
    const [TODOs,setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }

    const newTodos =[todo, ...TODOs];

    setTodos(newTodos)
    console.log(...TODOs);
  };
  
  const updateTODO = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };


const removeTodo = id => {
  const removeArr = [...TODOs].filter(todo => todo.id!== id)

  setTodos(removeArr);
};


const completeTodo = id => {
  let updatedTODOs = TODOs.map(todo => {
    if (todo.id===id){
      todo.isComplete =!todo.isComplete;
    }
    return todo;
  });
  setTodos(updatedTODOs);
};
    
 return (
    <div>
        <h1>Things you've not done</h1>
        <h4>Stop Procrastinating -_-</h4>
        <DaForms onSubmit ={addTodo} />t
        <MainThings
        todos={TODOs}
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        updateTODO={updateTODO}/>
    </div>
  );
 }
export default ListGoesOn;