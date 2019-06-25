import React from 'react';
import User from './User';
import './TodoItem.css';

function TodoItem(props) {
  return(
    <tr key = {props.id}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <User name={props.author} email={props.email} />
      <td><input type="checkbox" defaultChecked={props.completed} /></td>
      <td><button className='remove' onClick={() => props.removeItem(props.id)}>remove</button></td>
    </tr>
  );
}

export default TodoItem;
