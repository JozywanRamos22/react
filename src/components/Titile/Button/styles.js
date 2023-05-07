import styled from 'styled-components'

export const Button = styled.button`

width: 342px;
height: 74px;
margin-top: 130px;


background: ${ props=> props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;
border: ${ porps => porps.isBack ? '1px solid #ffffff' : 'none'};

font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;

color: #FFFFFF;

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 40px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
img {
    transform: ${porps => porps.isBack && 'retateY(180deg)'};
}
`;