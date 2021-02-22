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

export default function NodeLayout(){

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
                        <Title>Node.js</Title>
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
                            src='/imgs/Node-img.svg'
                            alt='Perfil' 
                            width='160' 
                            height='160'
                        />
                        <Paragraph>O Node.js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.</Paragraph>
                    </CardInform>

                    <CardInform>
                        <Paragraph>Apesar de recente, o Node.js já é utilizado por grandes empresas no mercado de tecnologia, como Netflix, Uber e LinkedIn. O principal motivo de sua adoção é a sua alta capacidade de escala. Além disso, sua arquitetura, flexibilidade e baixo custo, o tornam uma boa escolha para implementação de Microsserviços e componentes da arquitetura Serverless. Inclusive, os principais fornecedores de produtos e serviços Cloud já têm suporte para desenvolvimento de soluções escaláveis utilizando o Node.js.</Paragraph>
                    </CardInform>
                </Main>

                

            </Container>

    );
}