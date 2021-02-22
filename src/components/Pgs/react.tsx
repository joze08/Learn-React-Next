import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router';
import { HeaderComponentx,Logox, Menux, Tt,H, Kanto, Cadastro, Pesquisa,Titulo } from "../../styles/HeaderStyles"
import { Fechar } from '../../styles/JsStyles';
import { Modal1, Modal2,Modal,Artigo2,Artigo,Body,TokenFunction,TokenPunctuation,TokenString,TokenTag,GatsbyHighlight,LI,SPAN, Code,Pre} from "../../styles/reactStyles"
export default function HeaderComponent(){

  const router = useRouter();
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
             <H href="/">Inicio</H>
             <H href="JS">Javascript</H>
             <H onClick={()=>{router.push("/Conteudos/JavaScript")}}>Forum</H>
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
            <Artigo>
                <a href="#abrirmodal">
                <Image
             src="/Images/React.jpg"
             alt="xesque"
             width  = {200}
             height = {200}
            />
</a>
            <div><h1>boas praticas em react</h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis. Ipsum voluptas soluta quas excepturi doloribus ratione magni id quidem enim unde dignissimos veritatis sequi, facere ullam sit maxime doloremque.</h3>
            </div>
            <Modal id="abrirmodal">
        <Fechar href="#fechar" id="Fechar">x</Fechar>
        <h1>3 Dicas que todo desenvolvedor React deveria saber</h1>
        <h3>1-Use componentes funcionais.</h3>
        <h3>Todos nós estamos muitos felizes e gratos que ES6 trouxe o suporte a classes e provavelmente você também ama isso. Em React nós podemos criar um componente apenas extendendo React.Component, onde podemos ter um state, ciclo de vida, event handlers, etc. Mas nem sempre precisamos de tudo isso, mas como sabemos que podemos utilizar.</h3>
        <GatsbyHighlight>
          <TokenFunction>class</TokenFunction>
          <span>MyComponent</span>
          <TokenFunction>extends</TokenFunction>
          <span >Component</span>
          <span> ( </span>
            <br></br>
          <TokenFunction>render</TokenFunction>
          <TokenPunctuation>()</TokenPunctuation>
          <span> ) </span>
            <br></br>
          <TokenFunction>return</TokenFunction>
          <span >&lt;</span>
          <TokenTag>h1</TokenTag>
          <span >&gt;</span>
          <span >Hello</span>
          <span >(</span>
            <span>
          <TokenFunction>this</TokenFunction>
          <TokenPunctuation>.</TokenPunctuation>
          <TokenString>props</TokenString>
          <TokenPunctuation>.</TokenPunctuation>
          <TokenString>name</TokenString>
        </span>
          <span >)</span>
          <span >&lt;</span>
          <TokenTag>/h1</TokenTag>
          <span >&gt;</span>
          <br></br>
          <span >   )</span>
          <br></br>
          <span >  )</span>
          
        </GatsbyHighlight>
        <h3>Mas as vezes, muitos desenvolvedores se esquecem que talvez esse componente seja dummy, ou seja, não necessite de um state interno** ou ciclo de vida. Um componente funcional como o nome sugere, é uma função que recebe props como parâmetro e retorna um React.Element.</h3>
        <h3> 2-Mantenha seus componentes pequenos.</h3>
        <h3>Componentes pequenos são mais fáceis de ler e testar além de reutilizar e manter. vai te garantir simplicidade, testabilidade e manutenibilidade. Melhor? Bom, sim e não,você vai se deparar com casos onde você não vai precisar dar muita importância, tudo vai depender da complexidade que você tem.</h3>
        <br></br>
        <br></br>
        <h3>3-Use uma função para setState ao invés de um objeto.</h3>
        <h3>De acordo com o a documentação oficial, o React não garante que as mudanças são aplicadas imediatamente, uma vez que o processo é assíncrono, onde se você precisa ler uma propriedade de state logo após utilizar setState() pode gerar alguns efeitos colaterais uma vez que o dado pode ainda não ter sido atualizado</h3>
        <GatsbyHighlight>
          <h4>// Ao invés disso</h4>
          <h4>this.setState(showPagination: !this.state.showPagination)</h4>
          <h4>// Faça isso</h4>
          <h4>this.setState((state, props) =&gt; (</h4>
            <h4> return ( showPagination: !state.showPagination );</h4>
            <h4>))</h4>

        </GatsbyHighlight>
      
      </Modal>
            </Artigo>
            <Artigo>
                <a href="#abrirmodal1">
                <Image
             src="/Images/hello.png"
             alt="xesque"
             width  = {200}
             height = {200}
            />
</a>
            <div><h1>basico do react</h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis. Ipsum voluptas soluta quas excepturi doloribus ratione magni id quidem enim unde dignissimos veritatis sequi, facere ullam sit maxime doloremque.</h3>
            </div>
            <Modal1 id="abrirmodal1" >
          <Fechar href="#fechar" title="Fechar">x</Fechar>

          <p>O menor exemplo de React é algo assim:</p>
          <GatsbyHighlight>
            <Pre><Code>ReactDOM<TokenPunctuation>.</TokenPunctuation>
            <TokenFunction>render</TokenFunction>
            <TokenPunctuation>(</TokenPunctuation>
            <br/>            
          <TokenTag>
              <TokenTag>
                  <TokenPunctuation>          &lt;</TokenPunctuation>h1</TokenTag>
                  <TokenPunctuation>&gt;</TokenPunctuation>
                  </TokenTag><span>Hello, world!</span>
                  <TokenTag><TokenTag>
                      <TokenPunctuation>&lt;/</TokenPunctuation>h1</TokenTag><TokenPunctuation>&gt;</TokenPunctuation></TokenTag><TokenPunctuation>,</TokenPunctuation>
                      <br/>
                    <>          </>document<TokenPunctuation>.</TokenPunctuation><TokenFunction>getElementById</TokenFunction><TokenPunctuation>(</TokenPunctuation><TokenString>'root'</TokenString><TokenPunctuation>)</TokenPunctuation>
                    <br/>
        <>        </><TokenPunctuation>)</TokenPunctuation><TokenPunctuation>;</TokenPunctuation></Code></Pre>
          </GatsbyHighlight>

        </Modal1>


            </Artigo>
            <Artigo2>
                <a href="#abrirmodal2">
                <Image
             src="/Images/programming.jpg"
             alt="xesque"
             width  = {200}
             height = {200}
            />
</a>
            <div><h1>o que é react</h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis. Ipsum voluptas soluta quas excepturi doloribus ratione magni id quidem enim unde dignissimos veritatis sequi, facere ullam sit maxime doloremque.</h3>
            </div>
            <Modal2 id="abrirmodal2">
          <Fechar href="#fechar" title="Fechar" >x</Fechar>
          <h1>O Que é React e Como Funciona?</h1>
          <h3>O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.</h3>
          <h3>Os componentes dessa ferramenta foram desenvolvidos pelo Facebook. Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto. Atualmente, ela permanece na frente das suas principais competidoras, como a Angular e a Bootstrap, as duas bibliotecas JavaScript mais bem vendidas.  </h3>
          <h3>Neste artigo, vamos ajudar você a entender mais sobre o que é React e ele como funciona. Assim, você vai poder tirar proveito para incrementar seu trabalho como desenvolvedor front-end.</h3>
          <div>
            <h1>  Por Que Usar React?
            </h1>
            <ul>
              <li>1. Fácil de Usar</li>
              <li>2. Suporte a Componente Reusável em Java  </li>
              <li>3. Componente Fácil de Escrever</li>
              <li>4. Melhor Desempenho com Virtual DOM</li>
              <li>5.  Amigável a SEO</li>
            </ul>
  
          </div>
          <p><SPAN>Finalmente, esperamos que este artigo possa ter dado alguns insights sobre o que é React e como ele funciona. Para tanto, abaixo está um resumo de notações importantes sobre React JavaScript:</SPAN></p>
          <ol><LI>
              <SPAN>React foi originalmente apresentado pelo Facebook.</SPAN>
              </LI><LI>
                  <SPAN>Ele é usado por grandes companhias e marcas mundo afora.</SPAN>
                  </LI><LI>
                      <SPAN>O React atua como uma biblioteca para o JavaScript. Mas ele também pode ser categorizado como um framework. </SPAN></LI><LI>
                          <SPAN>Esse framework não vem sozinho: você vai precisar de elementos adicionais para vários propósitos, como gerenciamentos, apontamentos, etc. </SPAN>
                          </LI><LI><SPAN>O React usa um DOM Virtual para oferecer uma &nbsp;melhor otimização para a sua página.</SPAN>
                          </LI><LI><SPAN>Esse framework é fácil de usar e bem amigável a SEO.</SPAN></LI><LI>
                              <SPAN>Ele tem suporte à reusabilidade de componentes.</SPAN></LI></ol>
        </Modal2>
            </Artigo2>
            </Body>

            );
            }