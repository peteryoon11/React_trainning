import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    static propTypes={
        name: PropTypes.string,
        id : PropTypes.string,
        finished : PropTypes.bool,
        onToggle : PropTypes.func,
        onRemove : PropTypes.func

    }
    static defaultProps={
        name : '기본항목 ',
        id :'',
        finished:false,
        onToggle : ()=>console.warn('onToggle not denied'),
        onRemove : ()=>console.warn('onWarn/remove not denied')
    }
shouldComponentUpdate(nextProps, nextState) {
    return nextProps.finished !==this.props.finished;
}



    
    render() {

        const {
            name,
            id,
            finished,
            onToggle,
            onRemove,

        }= this.props;
        const style = {
            cursor : 'pointer',
            textDecoration : finished ? 'line-through' : 'none'
        };

        return (
            <li 
            style={style}
            onClick={()=>onToggle(id)}
            onDoubleClick={()=>onRemove(id)
            }
            className="TodoItem"
            >
{name}

            </li>
        );
    }
}

export default TodoItem;