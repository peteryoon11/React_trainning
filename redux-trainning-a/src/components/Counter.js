import React from 'react';

const Counter = ({
    number,
    color,
    onIncrement,
    onDecrement,
    onSetColor
}) => {

    return (
        <div className='Counter'
        onClick={onIncrement}
        onContextMenu={
                // 메뉴 뜨는거 막기
                (e)=>{
                    e.preventDefault();
                    onDecrement();

                }
        }
        onDoubleClick={onSetColor}
        style={{
            backgroundColor:color
        }}
        >
            {number}
        </div>
    );
};


Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};


export default Counter;