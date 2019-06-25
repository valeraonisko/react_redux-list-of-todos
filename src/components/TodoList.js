import React from 'react';
import TodoItemHandler from './TodoItemHandler';
import './TodoList.css';

function TodoList(props) {
  if (props.todos) {
    const itemsList = props.todos.map(item => <TodoItemHandler item={item} key={item.id} />);
    return (
      <table className='todos'>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {itemsList}
        </tbody>
      </table>
    );
  }
  return (<button className='load' disabled={(props.requested) ? 'disabled' : ''}
    onClick={() => props.buttonLoadClicked()}>{(props.requested) ? 'Loading' : 'Load'}</button>);
};
//   const ul = props.authorsList.map((author, i) => {
//     if (i === props.selectedIndex) {
//       if (props.inEdit) {
//         return (<li key={i}><input defaultValue={author} onKeyDown={(event) => props.inputHandler(event)}/></li>);
//       } else {
//         return (<li className='selected' key={i} onClick={() => props.authorClick(i)}>{author}</li>);
//       }
//     } else {
//       return (<li key={i} onClick={() => props.authorClick(i)}>{author}</li>);
//     }
//   });
//   return <ul className="container">{ul}</ul>;
// }


// console.log(props);
// if(!props.requested) {
//   return (
//     <button
//       onClick={() => props.load()}
//       disabled={!props.todos ? true : false}
//     >{props.loadLabel}
//     </button>
//   )
// }

export default TodoList;
