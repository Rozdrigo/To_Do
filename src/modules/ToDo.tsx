import React from 'react';

import { FaPencilAlt, FaTrash } from 'react-icons/fa'

import './ToDo.css'

function ToDo(props: {title: string}) {
  return (
    <button className='container'>
      {props.title}
      <div className="flexRow">
      <button className='IconButtons'><FaTrash color='#F25169'/></button>
      <button className='IconButtons'><FaPencilAlt color='#F1F081'/></button>
      </div>
    </button>
  );
}

export default ToDo;
