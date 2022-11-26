import React from "react";

const List = ({todos, toggle, remove, asyncRemove}) => {
    const handleRemove = (e) => {
        e.preventDefault();
        remove(e.target.name)
    }

    const handleAsyncRemove = e => {
        e.preventDefault();
        asyncRemove(e.target.name)
    }

    return (
        <ul>
            {todos.map((item, index) => {
                const styleDone = {textDecoration: item.done && "line-through"}
                return (
                    <li key={index} >
                        <span name={item.title} id={item.title} style={styleDone}
                            onClick={() => toggle(item.title)}>{item.title}
                        </span>

                        <button name={item.title}
                                onClick={handleRemove}>Usuń
                        </button>

                        <button name={item.title}
                                onClick={handleAsyncRemove}>Usuń po 2 sec
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;

