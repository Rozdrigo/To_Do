import React from 'react';

import { FaPencilAlt, FaTrash } from 'react-icons/fa'

import './Create.css'

function Create() {
    return (
        <div className='container02'>
            <div className='flexColumn'>
                Titulo:
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <input placeholder='Lavar a louça...' className='InputLine'/>
                    <input className='SimpleSubmitButton' type="submit" />
                </div>
                <div className='flexRow'>
                    <div className='flexColumn'>
                        Conteúdo:
                        <textarea placeholder='Lavar até as 7h...' />
                    </div>
                    <div className='flexColumn'>
                        Descrição:
                        <textarea placeholder='Lavar a louça do jantar...'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
