import React, { useState } from 'react';
import './styles/ToDo.css'
import { ToDos, ToDoTypes } from '../store/ducks/todos/types';
import Edite from './Edite';
import { FaPencilAlt, FaTrash, FaWindowClose } from 'react-icons/fa';
import api from '../services/api';
import { useDispatch } from 'react-redux';


interface ToDosProps {
  data: ToDos
}

function ToDo(props: ToDosProps) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false)

  function deleteToDo() {
    api.delete(
      `/notes/delete/${props.data.id}`,
      {
        headers:
        {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then((res) => {
        window.alert(res.data.message)
        dispatch({
          type: ToDoTypes.LOAD_REQUEST
        })
      })
      .catch((err) =>{
        if(err.response.status == 401){
         localStorage.removeItem('token')
         window.location.href = "/Login"
        }
         window.alert(err.response.data.message)
        })
  }

  return (
    <div className='container'>
      <div className='flexColumn'>
        <div className='headless'>
          <h3 className='titleToDo'>{props.data.title}</h3>
          <div>
            <button className='ocultButton' onClick={() => setVisible(true)}><FaPencilAlt color='#F1F081'/></button>
            <button className='ocultButton' onClick={() => deleteToDo()}><FaTrash color='#F25169'/></button>
          </div>
        </div>
        <p className='p01post'>{props.data.content}</p>
        <p className='p02post'>{props.data.description}</p>
        <div style={{ display: visible ? "flex" : "none" }} className='Modal'>
          <button className='closeButton' onClick={() => setVisible(!visible)}><FaWindowClose size={20} color='#F25169'/></button>
          <Edite content={props.data.content} description={props.data.description} title={props.data.title} id={props.data.id} />
        </div>
      </div>
    </div>
  )
}

export default ToDo;
