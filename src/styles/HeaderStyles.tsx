import styled from 'styled-components'

export const HeaderComponentx = styled.header `

    display: grid;
    grid-template-columns: 215px auto auto auto;
    margin: 0px;
    background-color: #3F94AB;
`

 export const Logox = styled.div`


    width: 215px;
    height: 153px;
    margin: 0px;
    border-radius: 16px;
    background-color: #21B4F5;
    
` 

export const Menux = styled.menu `
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-columns: 2/4;
    text-align-last: center;
    flex: 1;
    align-self: flex-end;
    background-color: #BECDFF;
    margin-bottom: 0px
`


export const Tt = styled.div`
    display: flex;
    align-items: center;
`

export const Kanto = styled.div `
    display: grid;
    grid-template-rows: auto auto;
    justify-content: flex-end;
`
export const H = styled.a`
margin-bottom: 0px;
text-decoration: none;
color: black;
&:hover{cursor: pointer;
color:blue;
}
`
export const Cadastro = styled.div`

    margin-top: 10px;
    margin-right: 0px;
    width: 110px;
    height: 55px;
    border-radius: 10px;
    background-color: #BECDFF;
    right: 140px;

`
export const Pesquisa = styled.div`
right: 200px;
`

export const Titulo = styled.h1`
color: #ffffff;
    margin-top: 0px;
    margin-left: 145px;
`