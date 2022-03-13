import React, {useState, useEffect, useRef} from 'react'

function DaForms(props) {
    const [input, setInput] = useState (props.edit ? props.edit.value:'');

    const inputRef=useRef(null)

    useEffect(() =>{
      inputRef.current.focus()
    })

    const ChangeHappened = e => {
      setInput(e.target.value)
    };

    const Submit = e => {
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random()*99999),
        text: input
      });
      
      setInput('');
    }

  return (
    <form classname="daform" onSubmit={Submit}>
            {props.edit ? (
        <div>
          <input
            type='text'
            placeholder='Update TODO'
            value={input}
            onChange={ChangeHappened}
            name='text'
            ref={inputRef}
            className='forminput edit'
          />
          <button onClick={Submit} className='le-button edit'>
            Update!
          </button>
        </div>
        ) : (
          
          <div>
            <input 
              type="text" 
              placeholder="Add a Work" 
              value={input}
              name='text'
              className='forminput'
              onChange={ChangeHappened}
              ref={inputRef}
        />

        <button className="Le-Button">Add Activities</button>
        </div>
        )}
        </form>    
  );
}

export default DaForms;
