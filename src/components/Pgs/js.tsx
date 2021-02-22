import Image from 'next/image'
import React from 'react'
import { HeaderComponentx,Logox, Menux, Tt,H, Kanto, Cadastro, Pesquisa,Titulo } from "../../styles/HeaderStyles"
import {Body,Artigo,Modal,Fechar,Modal1,P1,DIV1,Span1,Pre1,Modal2,Artigo2} from "../../styles/JsStyles"


export default function HeaderComponentz(){

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
            <Artigo>
                <a href="#abrirmodal">
                <Image
                 src="/Images/Js.png"
                 alt="xesque"
                 width  = {200}
                 height = {200}
                />
                </a>
                <div
                ><h1>Rest Api</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error perferendis debitis aspernatur maiores doloribus, laudantium dicta quasi ratione nihil dolores architecto obcaecati inventore? Consectetur quisquam quis libero aspernatur nobis.</h3>
                </div>
                <Modal id="abrirmodal">
        < Fechar href="#fechar">x</  Fechar>
        <div>
          <h1>O que é um rest Api</h1>
          <h2>Rest API é o conjunto de boas práticas utilizadas nas requisições HTTP realizadas por uma API em uma
            aplicação web. Entenda como funciona essa tecnologia, quais os tipos de APIs existentes e sua importância em
            um site.</h2>
            <h1>O que é o Rest API?  </h1>
            <h3>Antes de apresentar o conceito de Rest API, é preciso explicar o que é uma API — Application Programming Interface. Trata-se de um conjunto de requisições que permite a comunicação de dados entre aplicações. Para isso, a API utiliza requisições HTTP responsáveis pelas operações básicas necessárias para a manipulação dos dados. As principais requisições são:</h3>
            <ul>
              <li>POST: criar dados no servidor;</li>
              <li>GET: leitura de dados no host;</li>
              <li>DELETE: excluir as informações;</li>
              <li>PUT: atualizações de registros.</li>
            </ul>
          </div>
      </Modal>

            </Artigo>
            <Artigo>
            <a href="#abrirmodal1">
                <Image
                 src="/Images/java.png"
                 alt="xesque"
                 width  = {200}
                 height = {200}
                />
                </a>
            <div><h1>Basico do Javascript</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, eius illum aliquid in cum repudiandae quasi, beatae qui laboriosam rerum aliquam voluptatem. Eum pariatur commodi quis explicabo voluptatibus iure optio.</h3>
            </div>
            <Modal1 id="abrirmodal1">
        <Fechar href="#fechar" id="Fechar">x</Fechar>
        <div>
          <p>A linguagem JavaScript pode ser inserida em páginas HTML de três formas:</p>
          <p>1º. Digitando as linhas de comando entre as tags <strong>&lt;SCRIPT&gt;</strong> e
            <strong>&lt;/SCRIPT&gt;</strong>.</p>

          <DIV1 >
            <table>
              <tbody>
                <tr>
                  <td >
                    <Pre1><Span1>&lt;</Span1>html<Span1>&gt;</Span1>
   <Span1>&lt;</Span1>body<Span1>&gt;</Span1>
      <Span1>var</Span1> str_mensagem <Span1>=</Span1> <Span1>"Hello World!!!"</Span1><Span1>;</Span1>
      document.<Span1>write</Span1><Span1>(</Span1>str_mensagem<Span1>)</Span1><Span1>;</Span1>
   <Span1>&lt;/</Span1>body<Span1>&gt;</Span1>
   <Span1>&lt;/</Span1>html<Span1>&gt;</Span1></Pre1>
                  </td>
                </tr>
              </tbody>
            </table>
            <P1>&lt;html&gt;
              &lt;body&gt;
              var str_mensagem = "Hello World!!!";
              document.write(str_mensagem);
              &lt;/body&gt;
              &lt;/html&gt;</P1>
          </DIV1>

          <p>Neste exemplo, uma variável (str_mensagem) foi criada e impressa na tela pelo método <strong>write</strong>
            do objeto <strong>document</strong>.</p>
          <p>2º. Podemos executar um código JavaScript inserindo manipuladores de eventos.</p>

          <DIV1>
            <table>
              <tbody>
                <tr>
                  <td >
                    <Pre1>   <Span1>&lt;</Span1>body onLoad<Span1>=</Span1><Span1>"chama_funcao();"</Span1><Span1>&gt;</Span1> ... <Span1>&lt;/</Span1>body<Span1>&gt;</Span1></Pre1>
                  </td>
                </tr>
              </tbody>
            </table>
            <P1> &lt;body onLoad="chama_funcao();"&gt; ... &lt;/body&gt;</P1>
          </DIV1>

          <p>O manipulador de evento <strong>onLoad</strong> será executado assim que todo o conteúdo dentro das tags
            <strong> </strong> tiver sido carregado. O <strong>onLoad</strong> fará a chamada de uma função de nome
            “chama_funcao”.</p>
          <p>3º. Por último podemos fazer a chamada de um arquivo externo contendo o código JavaScript.</p>

          <DIV1>
            <table>
              <tbody>
                <tr>
                  <td >
                    <Pre1>   <Span1>&lt;</Span1>script src<Span1>=</Span1><Span1>"arquivoExterno.js"</Span1> type<Span1>=</Span1><Span1 >"text/javascript"</Span1><Span1>&gt;&lt;/</Span1>script<Span1>&gt;</Span1></Pre1>
                  </td>
                </tr>
              </tbody>
            </table>
            <P1> &lt;script src="arquivoExterno.js"
              type="text/javascript"&gt;&lt;/script&gt;</P1>
          </DIV1>
            </div>
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
                <div>
            <h1>Boas Praticas na programação web</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias nam totam a ab magni vel accusamus tempore? Ipsam sint pariatur reprehenderit illo quia voluptates facilis odit ipsa, consectetur mollitia?</h3>
            </div>
            <Modal2 id="abrirmodal2">
            <Fechar href="#fechar" id="Fechar">x</Fechar> 
            <ul>
          <li>Use === Ao Invés de ==</li>
          <li>Eval = Ruim</li>
          <li>Não Use Abreviações</li>
          <li>Coloque os Scripts na Parte Final da Sua Página</li>
          <li>Declare Variáveis, Fora da Instrução For</li>
          <li> A Forma Mais Rápida de Construir uma Cadeia de Caracteres</li>
          <li>Reduza as Variáveis Globais</li>
          <li>Comente Seu Código</li>
          <li>Não Use a Instrução "With"</li>
          <li>Use [] Ao Invés de New Array()</li>
          <li>Sempre, Sempre Use Ponto-e-Vírgulas</li>
          <li>Instruções "For in"</li>
          <li>Use a Funcionalidade "Timer" do Firebug Para Otimizar Seu Código</li>
          <li>Funções Auto-executáveis</li>
          <li>Remova o Atributo "Language"</li>

        </ul>
            </Modal2>

            </Artigo2>
            </Body>
            )
    }