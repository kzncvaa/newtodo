import React from "react";
import { observer, inject } from 'mobx-react';
import styled from "styled-components";


const Input = styled.input`
width: 100%;
padding: .6em;
border: 1px solid #666666;
border-radius: 2px;
background: #f7f7f7;
margin: 5px 0;
&:active, &:focus, &:focus-visible{
    border: 1px solid #aeaebd;
    outline: 1px solid #aeaebd;
    background: #fafafa;
}
`
@inject('store')
@observer
class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            input: ''
        };
    }

    search = event =>{
        this.props.store.setSearch(event.target.value);
    }

    render(){
        return(
            <Input 
                onChange={this.search}
                placeholder="Search"
            />
        )
    }
}
export default Search;