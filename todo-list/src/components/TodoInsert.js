import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TodoInsert extends Component {
static propTypes = {
    onInsert:PropTypes.func
}
static defaultProps ={
    onInsert:()=>console.warn('onInsert not denined')
}
state ={
    input : ''
}
handleChange = (e)=> {
    // 이벤트에 전달된 값을 input 으로 설정 
    this.setState({
        input: e.target.value
    });
}
handleClick = ()=>{
    this.props.onInsert(this.state.input);
    this.setState(
        {
            input :''

        }
    );

}
handleKeyPress = (e)=> {
    if(e.key==='Enter')
    this.handleClick();
}

    render() {
        const {input } = this.state;
        const {handleChange,handleClick,handleKeyPress}= this;
        return (
            <div className="TodoInsert">
                <input 
                    value={input}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleClick}>추가 </button>
            </div>
        );
    }
}

export default TodoInsert;