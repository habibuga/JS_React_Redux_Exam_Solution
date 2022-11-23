import React from "react";

const List = ({items, toggle, remove, asyncRemove}) => {
    return (
        <ul>
            {items.map((t, index) => <li key={index} style={{ textDecoration: t.done ? 'line-through' : '' }}>
                <span onClick={() => toggle(t.title)}>{t.title}</span><button onClick={() => remove(t.title)}>Usuń</button></li>)}
        </ul>
    )
}

List.propTypes = {
  items: PropTypes.array,
  toggle: PropTypes.func, // zad 4
  remove: PropTypes.func, // zad 5
  asyncRemove: PropTypes.func //zad7
}

export default List;

