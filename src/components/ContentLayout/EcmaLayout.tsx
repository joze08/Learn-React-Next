import react from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';

import {
    Container,
    Menu,
    Main,
    BackPage,
    LinkPages,
    OnlyLogo,
    LinkBack,
    List,
    ListElement,
    LinkContent,
    HeaderMain,
    CardInform,
    Title,
    Perfil,
    LinkPerfil,
    Paragraph
} from '../../styles/ContentLayoutStyle';

export default function EcmaLayout(){

    const router = useRouter();

    return (
        <Container>
            <Menu>
                <BackPage>
                    <Image 
                        src='/imgs/Back.svg'
                        alt='Back-Arrow' 
                        width='47' 
                        height='26'
                    />
                    <LinkBack onClick={() => router.push('/')}>Voltar</LinkBack>
                </BackPage>

                <LinkPages>
                    <List>
                        <ListElement>
                            <Image 
                                src='/imgs/Js-img.svg'
                                alt='JsImage' 
                                width='60' 
                                height='60'
                            /> 
                            <LinkContent onClick={() => router.push('/Conteudos/JavaScript')}>JavaScript</LinkContent>

                        </ListElement>
                        
                        <ListElement>
                            <Image 
                                src='/imgs/Es-img.svg'
                                alt='EsImage' 
                                width='60' 
                                height='60'
                            />
                            <LinkContent onClick={() => router.push('/Conteudos/EcmaScript')}>EcmaScript</LinkContent>
                        </ListElement>

                        <ListElement>
                            <Image 
                                src='/imgs/node-img.svg'
                                alt='NodeImage' 
                                width='60' 
                                height='60'
                            />
                            <LinkContent onClick={() => router.push('/Conteudos/Node')}>Node.js</LinkContent>
                        </ListElement>

                        <ListElement>
                            <Image 
                                src='/imgs/react-img.svg'
                                alt='ReactImage' 
                                width='60' 
                                height='60'
                            />
                            <LinkContent>React-Native</LinkContent>
                        </ListElement>

                        <ListElement>
                            <Image 
                                src='/imgs/react-img.svg'
                                alt='ReactImage' 
                                width='60' 
                                height='60'
                            />
                            <LinkContent>Context API</LinkContent>
                        </ListElement>

                        <ListElement>
                            <Image 
                                src='/imgs/react-img.svg'
                                alt='ReactImage' 
                                width='60' 
                                height='60'
                            />
                            <LinkContent>Animações</LinkContent>
                        </ListElement>
                    </List>
                </LinkPages>

                <OnlyLogo>
                    <Image 
                        src='/imgs/Logo1.svg'
                        alt='Logo' 
                        width='104' 
                        height='70'
                    />
                </OnlyLogo>
            </Menu>


            <Main>
                <HeaderMain>
                    <Title>EcmaScript</Title>
                    <Perfil>
                        <LinkPerfil>
                            <Image
                                src='/imgs/Perfil.svg'
                                alt='Perfil' 
                                width='56' 
                                height='56'
                            />
                        </LinkPerfil>
                    </Perfil>
                </HeaderMain>

                <CardInform>
                    <Image
                        src='/imgs/Es-img.svg'
                        alt='Perfil' 
                        width='160' 
                        height='160'
                    />
                    <Paragraph>ECMAScript é uma linguagem de programação, baseada em scripts, padronizada pela Ecma International na especificação ECMA-262 e ISO/IEC 16262. Esta linguagem é usada em tecnologias para Internet para a criação de scripts executados no cliente e no servidor (Node.JS), sendo inspirada na linguagem de programação JavaScript, além permitir outras implementações independentes.</Paragraph>
                </CardInform>

                <CardInform>
                    <Paragraph>Qual a diferença entre ECMAScript e Javascript? Antes que o Javascript se tornasse popular, para que a linguagem evoluísse obedecendo a determinados padrões e normativas, os criadores do Javascript se associaram ao ECMA (European Computer Manufactures Association) em 1996. Como o nome Javascript já havia sido patenteado pela Sun Microsystems (atual Oracle), optou-se por se definir um novo nome à linguagem utilizando a junção das palavras ECMA e Javascript, surgindo então o ECMAScript.</Paragraph>
                </CardInform>
            </Main>


        </Container>
    );
}