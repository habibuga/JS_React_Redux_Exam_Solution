import React, { useState } from "react";

const Form = ({addToDo}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setInput(e.target.value)} id="todoName" name="todoName" value={input}/>
            <button type="submit" >Dodaj</button>
        </form>
    )
}

export default Form;
