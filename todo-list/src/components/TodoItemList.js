import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


const TodoItemList = ({items, onToggle , onRemove})=>
{
    const itemList = items.map(
        (item)=>(
            <TodoItem
            key={item.id}
            id={item.id}
            name={item.name}
            finished={item.finished}
            onToggle={onToggle}
            onRemove={onRemove}
            />
        )

    )

    return (
        <div className="TodoItemList">

{itemList}

        </div>

    );
}
TodoItemList.PropTypes= {
    items: PropTypes.array,
    onToggle : PropTypes.func,
    onRemove : PropTypes.func
}
TodoItemList.defaultProps = {
        items: [],
        onToggle : ()=>console.log('onToggle not defined'),
        onRemove : ()=>console.log('onRemove not defined')
}


export default TodoItemList;