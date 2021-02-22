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

export default function Layout(){

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
                    <Title>JavaScript</Title>
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
                        src='/imgs/Js-img.svg'
                        alt='Perfil' 
                        width='160' 
                        height='160'
                    />
                    <Paragraph>Em nosso primeiro módulo de JavaScript, vamos responder algumas questões fundamentais como "o que é JavaScript?", "com o que se parece?", e "o que ele pode fazer?", antes de levá-lo a sua primeira experiência em escrever JavaScript. Depois disso, vamos discutir em detalhes algumas peças chaves, como variáveis, cadeias de caracteres (strings), números (numbers) e matrizes (arrays).</Paragraph>
                </CardInform>

                <CardInform>
                    <Paragraph>Bem vindo ao curso para iniciantes em JavaScript do LearnReact! No primeiro artigo nós visualizaremos o JavaScript de uma perspectiva de alto nível, respondendo a questões como "o que é?" e "o que ele pode fazer?", permitindo-lhe entender confortavelmente o objetivo do JavaScript.</Paragraph>
                </CardInform>
            </Main>

        </Container>
    );
}