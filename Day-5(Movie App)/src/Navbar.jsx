import { Component } from "react";

import styled from "styled-components";

const Nav = styled.nav`
        background-image: linear-gradient(120deg, #5d34f1 0%, #9557f5bf 100%);
        padding: 20px 50px;
        display:flex;
        justify-content: space-between;
        &:hover{background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);}
`
const Cart = styled.div`

`
const CardImg = styled.img`
    width: 35px;
`

const CounterSpan = styled.span`
    background-color: ${(props) => props.show ? props.color : '#fff'};
    width:22px;
    text-align: center;
    height: 22px;
    border-radius: 50%;
    color: black;
    position: absolute;
    top: 13px;
    right: 42px;
    visibility : ${(props) => props.show ? 'visible' : 'hidden'};

`
export default class Navbar extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <>
            <Nav>
                <p>Movie App</p>
                <Cart>
                    <CardImg src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="cart" />
                    
                    <CounterSpan color="yellow" show={true}>3</CounterSpan>
                </Cart>
            </Nav>
            </>
        )
    }
}