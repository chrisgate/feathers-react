import React from 'react';
import {useStore} from "./stores/store";
import {observer} from "mobx-react";

function App() {
  const { authStore } = useStore();
  return (
    <div className="App">
      <div>
        The value of ID is {authStore._id}.
      </div>
      <div>
        <button onClick={() => authStore.bumpValue()}>Bump the value</button>
      </div>
    </div>
  );
}

export default observer(App);
