import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import StarIcon from 'react-icons/lib/md/star';



const Wrapper = styled.div`
    height: 4rem;
    background: white;
    width: 100%;
    display:flex;
    /* 하단 핑크색 바 위치 설정을 위해 설정 
    bottom , left 값 설정 할때 이 Wrapper 에 의존 */
    position : relative;
`;

const StyledItem =styled.div`
/*레이아웃*/
 height: 100%;
 flex:1;
 display:flex;
 align-items:center;
 justify-content:center;
 color:${oc.gray[6]};

 font-size:1.5rem;
 cursor: pointer;

 &:hover{
     background:${oc.gray[0]};
 }
`;



const Bar = styled.div`
    position: absolute;
    bottom: 0px;
    height: 3px;
    width : 50%;

    background: ${oc.pink[6]};
`;

const Item=({children})=>{
    <StyledItem>
    {children}
    </StyledItem>
};



const ViewSelector = () => (
    <Wrapper>
    <Item><StarIcon/></Item>

    <Item>리스트</Item>
    <Bar/>
    </Wrapper>
);

ViewSelector.propTypes ={

};


export default ViewSelector;