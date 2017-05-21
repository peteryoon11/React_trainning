import React from 'react';
import TodoItem from './TodoItem';
import ProTypes from 'prop-types';

const TodoItemList = () => {


const itemList = items.map(
    item=>(

        <TodoItem
        />
    )

);
    
    return (
        <div>
            

        </div>
    );


};

TodoItem.propTypes ={
    items: ProTypes.array,
    onToggle : ProTypes.func,


};



export default TodoItemList;