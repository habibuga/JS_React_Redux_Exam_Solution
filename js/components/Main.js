import React from "react";
import {Provider} from "react-redux";
import store from "../redux/store";

import Form from "../containers/Form";
import List from "../containers/List";

const Main = () => (
  <Provider store={store}>
      <Form />
      <List />
  </Provider>
);

export default Main;
