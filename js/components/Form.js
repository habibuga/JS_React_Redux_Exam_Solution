import React, { useState } from "react";

const Form = ({addToDo}) => {
    const [input, setInput] = useState('');

    return (
        <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" id="todoName" name="todoName" />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                return addToDo({ done: false, title: input })}}>Dodaj</button>
        </form>
    )
}

Form.propTypes = {
  addToDo: PropTypes.func
}

export default Form;
