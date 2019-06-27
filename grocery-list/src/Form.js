import React, {useRef} from 'react';


const Form = ({onSubmit}) => {

  const itemRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const state = {
      name: itemRef.current.value,
      type: "prod",
      quantity: 1
    };
    onSubmit(state);
  }

  return (
   <form onSubmit={handleSubmit} id="newItem" className="newitem" auto-complete="off">
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
       <input ref={itemRef} 
              type="text" 
              name="item" 
              id="itemName" 
              className="form-component inpt" 
              placeholder="What do you need?" />
       <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;


