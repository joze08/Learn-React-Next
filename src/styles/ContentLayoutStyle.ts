import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    display: flex;
    background-image: url('../../imgs/Logo2.svg');
    background-color: #121F2F;
`;

//=================================MENU===================================

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 23%;
    height: 100vh;
    margin: 0;
    background-color: #12263F;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
`;

export const BackPage = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
`;
export const LinkBack = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding: .4rem;
    cursor: pointer;
`;

//========================================================================

export const LinkPages = styled.div`
    margin: 7% 0% 7% 0%;
`;
export const List = styled.ul`
    list-style-type: none;
    width: 100%;
    padding: 0;
`;
export const ListElement = styled.li`
    display: flex;
    padding: .8rem;
    align-items: center;
`;
export const LinkContent = styled.a`
    color: white;
    margin-left: .4rem;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    cursor: pointer;
`;

//========================================================================

export const OnlyLogo = styled.div`
    align-items: baseline;
`;


//=====================================MAIN===============================

export const Main = styled.div`
    width: 77%;
`;

export const HeaderMain = styled.header`
    display: flex;
    outline: 1px solid #12263F;
    background-color: #0F223A;
`;
export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: .1em;
    color: white;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const Perfil = styled.div`
    width: 40%;
    padding: .8rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const LinkPerfil = styled.a`
    cursor: pointer;
`;

//========================================================================

export const CardInform = styled.div`
    display: flex;
    margin: 7%;
    padding: 1.2em;
    background-color: #828388;
    border-radius: 10px;
`;

export const Paragraph = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-left: 1.2rem;
`;

export const Body = styled.body`
    background-color:#12263F; 
`;

