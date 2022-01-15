import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { ToDoTypes } from '../store/ducks/todos/types';

function Edite(props: {
    title: string
    content: string
    description: string
    id: string
}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');



    function editToDo() {
        api.put(
            '/notes/update/' + props.id,
            {
                title: title,
                content: content,
                description: description
            },
            {
                headers:
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                window.alert(res.data.message)
                dispatch({
                    type: ToDoTypes.LOAD_REQUEST
                })
            })
            .catch(err => {
                if(err.response.status == 401){
                 localStorage.removeItem('token')
                 window.location.href = "/Login"
                }
                window.alert(err.response.data.message)
            })
    }


    return (
        <div className='container02'>
            <div className='flexColumn'>
                <form onSubmit={(e) => { editToDo(); e.preventDefault() }}>
                    Titulo:
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input onChange={(e) => setTitle(e.target.value)} placeholder='Lavar a louça...' className='InputLine' />
                        <input className='SimpleSubmitButton' type="submit" />
                    </div>
                    <div className='flexRow'>
                        <div className='flexColumn'>
                            Conteúdo:
                            <textarea onChange={(e) => setContent(e.target.value)}  placeholder='Lavar até as 7h...' />
                        </div>
                        <div className='flexColumn'>
                            Descrição:
                            <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Lavar a louça do jantar...' />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Edite;
