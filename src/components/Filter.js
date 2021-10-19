import React from "react";
import styled from "styled-components";
import { observer, inject } from 'mobx-react';

const FilterButton = styled.button`
padding: 5px 10px;
border: 1px solid #616161;
border-radius: 4px;
color: #616161;
background: ${props => props.active? '#e0e0e0' : 'transparent'};
margin: 10px 6px 10px;
cursor: pointer;
&:hover{
    background: #eee;
}
`
@inject('store')
@observer
class Filter extends React.Component{
    render(){
        const { filter } = this.props.store;
        return(
            <div>
                <FilterButton active={filter==='all'} onClick={()=>this.props.store.changeFilter('all')}>All</FilterButton>
                <FilterButton active={filter==='active'} onClick={()=>this.props.store.changeFilter('active')}>Active</FilterButton>
                <FilterButton active={filter==='done'} onClick={()=>this.props.store.changeFilter('done')}>Done</FilterButton>
            </div>
        )
    }
}

export default Filter;