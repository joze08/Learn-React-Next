import styled from "styled-components"

export const Body = styled.body`
background-color: #5a7492;
margin: 0px; `

export const Artigo = styled.div`
display: grid;
    margin:80px 70px ;
    grid-template-columns: auto auto;
    padding-right: 0px;
    margin-right: 0px;

`
export const Modal = styled.div`
position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #21B4F5 ;
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
    color: white;
&:target{
    opacity: 1;
    pointer-events: auto;
}
`
export const Modal1 = styled.div`
position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: rgb(255, 255, 255);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
    &:target{
    opacity: 1;
    pointer-events: auto;
}
`
export const Modal2 = styled.div`
position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(7, 202, 192, 0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
    text-align: center;
    font-size: 1.5em;
    color: white;
    &:target{
    opacity: 1;
    pointer-events: auto;
}
`


export const Fechar= styled.a `
    position: absolute;
    width: 30px;
    right: -10px;
    top: -15px;
    text-align: center;
    line-height: 30px;
    margin-top: 5px;
    background: #ff4545;
    border-radius: 50%;
    font-size: 16px;
    color: #8d0000;
  `
  export const P1 = styled.p`
  display:none;
  `
export const DIV1 = styled.div`
position: relative; width: auto;
`

export const Span1 = styled.span`
color: #339933;
`

export const Pre1 = styled.pre`
font-family:monospace;
`

export const Artigo2 = styled.div`
display: grid;
    margin:80px 70px 0px;
    grid-template-columns: auto auto;
    padding-right: 0px;
    margin-right: 0px;
`