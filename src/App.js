import React from 'react';
import TasksWrapper from './components/TasksWrapper';
import styled from 'styled-components';
import Store from './store';
import { Provider } from "mobx-react";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 1em;
  background: linear-gradient(90deg,#c0e0f4,#cfe7e2,#f9eef0);
`
const store = new Store();

class App extends React.Component{
  render(){  
    return(
        <Provider store={store}>
          <AppWrapper>
            <TasksWrapper/>
          </AppWrapper>
        </Provider>
    )
  }
}

export default App;
