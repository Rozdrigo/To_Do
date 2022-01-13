import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';

import { AplicationState } from '../store';

import Create from '../modules/Create'

import ToDo from '../modules/ToDo';

import { ToDos } from '../store/ducks/todos/types'

import * as TodosActions from '../store/ducks/todos/actions'

interface StateProps {
  todos: ToDos[]
}

interface DispatchProps {
  loadRequest(): void
}

interface OwnProps{

}

type Props = StateProps & DispatchProps & OwnProps;

class ToDoList extends Component<Props> {
  componentDidMount(){
    const { loadRequest } = this.props;

    loadRequest()
  }
  render(){
    const { todos } = this.props
    return (
      <div>
        <Create/>
        {todos.map(a => <ToDo key={a.id} title={a.title}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state: AplicationState)=> ({
  todos: state.todos.notes
})

const mapDispatchToProps = ( dispatch: Dispatch )=>
bindActionCreators(TodosActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
