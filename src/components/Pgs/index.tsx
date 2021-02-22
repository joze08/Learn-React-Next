import Image from 'next/image'
import React from 'react'
import { HeaderComponentx,Logox, Menux, Tt,H, Kanto, Cadastro, Pesquisa,Titulo } from "../../styles/HeaderStyles"
import {Body , Apresentacao,G1,G2,G3,G4,G5,G6} from "../../styles/BodyStyles"


export default function HeaderComponent(){
    return(
        <Body>
        <HeaderComponentx>
            <Logox>
            <Image
             src="/Images/Logo.png"
             alt="xesque"
             width  = {215}
             height = {153}
          
              />
            </Logox>
            <Menux>
             <H href="JS">Javascript</H>
             <H href="react">react-native</H>
             <H href="Conteudos/JavaScript">Forum</H>
            </Menux>
            <Tt>
                <Titulo>Learn React</Titulo>
            </Tt>
            <Kanto>
            <Cadastro>
            <a href="SignIn"><Image
             src="/Images/686317 1.png"
             alt="xesque"
             width  = {54}
             height = {36}
            /></a>
            <Image
             src="/Images/Line 1.png"
             alt="xesque"
             width  = {2}
             height = {48}
            />
            <a href="/"><Image
             src="/Images/user 1.png"
             alt="xesque"
             width  = {36}
             height = {36}
            /></a>
            </Cadastro>
            <Pesquisa>
            <Image
             src="/Images/lupa.png"
             alt="xesque"
             width  = {20}
             height = {20}
            />
            <input type="text" name="" id= ""/>  
            </Pesquisa>
            </Kanto>
            </HeaderComponentx>
            <Apresentacao>
            <h3>Bem vindo ao site Learn React aqui ensinaremos desde o basico de JavaScript até React-Native para ajudar você em
      sua jornada a se tornar
      <p> um programador Web. Site sendo desenvoldido pelos alunos Marcus e José de 2Informática.</p>
    </h3>
            </Apresentacao>
            <Apresentacao>
            <h3>Aqui você aprenderá muito sobre programação Web, principalmente sobre:</h3>
            <G1>
             <p>Javascript Basico</p>
             <Image
             src="/Images/java.png"
             alt="xesque"
             width  = {200}
             height = {200}
            />   
            </G1>
            <G2>
             <p>React-Native</p>  
             <Image
             src="/Images/React.jpg"
             alt="xesque"
             width  = {512}
             height = {269}
            /> 
            </G2>
            <G3>
             <p>JSES6+</p>  
             <Image
             src="/Images/sei.png"
             alt="xesque"
             width  = {300}
             height = {200}
            /> 
            </G3>
            <G4>
             <p>Node.js</p> 
             <Image
             src="/Images/Node.png"
             alt="xesque"
             width  = {225}
             height = {225}
            />  
            </G4>
            <G5>
             <G6>Tecnicas para deixar seu site mais chamativo</G6> 
             <Image
             src="/Images/pinterest.jpg"
             alt="xesque"
             width  = {300}
             height = {200}
            />  
            </G5>
            </Apresentacao>
            </Body>
    )
}