import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'


import { AplicationState } from '../store';

import Create from '../modules/Create'

import ToDo from '../modules/ToDo';

import { ToDoStates } from '../store/ducks/todos/types'

import * as TodosActions from '../store/ducks/todos/actions'

interface StateProps {
  todos: ToDoStates
}

interface DispatchProps {
  loadRequest(): void
}

interface OwnProps{

}

type Props = StateProps & DispatchProps & OwnProps;



class ToDoList extends Component<Props> {
  componentDidMount(){
    const { todos } = this.props
    const { loadRequest } = this.props;
    if(todos.error && localStorage.getItem('token') == undefined){
      window.location.href = "/Login"
    }
    loadRequest()
  }
  
  render(){
    const { todos } = this.props
    return (
      <div>
        <Create/>
        {todos.notes.map((a , b)=> <ToDo key={a.id} data={a}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state: AplicationState)=> ({
  todos: state.todos
})

const mapDispatchToProps = ( dispatch: Dispatch )=>
bindActionCreators(TodosActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
