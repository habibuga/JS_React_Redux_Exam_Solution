import React from "react";

import Form from "../containers/Form";
import List from "../containers/List";

const Main = (props) => {
    const {filter} = props.match.params;
    return (
        <>
            <List filter={filter} />
            <Form />
        </>
    )
};

export default Main;
