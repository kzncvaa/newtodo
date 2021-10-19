import React from "react";
import Task from './Task'
import TaskInput from './TaskInput';
import Filter from './Filter'
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Search from "./Search";

const Header = styled.div`
margin-bottom: .5em;
border-bottom: 1px solid #b8b8b8;
`

const Tasks = styled.div`
background: #fff;
padding: 2em;
margin: auto;
margin-top: 3em;
max-width: 550px;
`

@inject('store')
@observer
class TasksWrapper extends React.Component{
    render(){  
        const { sortedTasks , activeTasks, doneTasks, filter, activeTasksCount } = this.props.store;
        const visibleTasks = (filter==='all'? sortedTasks : filter==='active'? activeTasks : doneTasks);
        return(
            <Tasks>
                <Header>
                    <h1>Active tasks: {activeTasksCount}</h1>
                    <Search/>
                    <Filter/>
                </Header>
            {visibleTasks.map(task=>(
                <Task 
                doneTask={()=> this.props.store.doneTask(task.id)}
                deleteTask={()=> this.props.store.deleteTask(task.id)}
                task={task} 
                key={task.id}/>
                ))}
                <TaskInput addTask={v=> this.props.store.addTask(v)}/>
            </Tasks>
        )
    }
}

export default TasksWrapper;