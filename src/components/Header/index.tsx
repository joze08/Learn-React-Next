import { useRouter } from 'next/router';
import Image from 'next/image';

import { 
    HeaderContainer,
    Nav,
    OutLogo,
    UserFace,
    List,
    ListElement,
    Link,
    LinkUser,
    UserImage,
} from '../../styles/HeaderStyle';

import {
    SectionContainer,
    SignIn,
    Title,
    Form,
    Label,
    Input,
    Right,
    LinkSec,
    Button,
    BoxButton,
    Card,
    InsideCard,
    OutsideCard,
    Paragraph
} from '../../styles/SectionStyle';

export default function Header(){
    const router = useRouter();
    

    return (
        <>
    
            <HeaderContainer>
                <OutLogo>
                    <Image 
                        src='/imgs/Logo1.svg'
                        alt='Logo' 
                        width='104' 
                        height='70'
                    />
                </OutLogo>


                <Nav>
                    <List>
                        <ListElement>
                            <Link onClick={() => router.push('/')}>Início</Link>
                        </ListElement>
                        <ListElement>
                            <Link onClick={() => router.push('/Conteudos/JavaScript')}>Conteudos</Link>
                        </ListElement>
                        <ListElement>
                            <Link onClick={() => router.push('/JS')}>Artigo</Link>
                        </ListElement>
                    </List>
                </Nav>

                <UserFace>
                    <LinkUser>
                        <Image 
                            src='/imgs/Perfil.svg'
                            alt='Perfil' 
                            width='35px' 
                            height='40px'
                        />
                    </LinkUser>
                </UserFace>
            </HeaderContainer>

            <SectionContainer>
            <SignIn>
                <Title>Crie sua conta</Title>
                <Form method='POST'>
                    <Label>Nome:</Label>
                    <Input type='text' placeholder='Digite seu nome'/>

                    <Label>Email:</Label>
                    <Input type='email' placeholder='Digite seu email'/>

                    <Label>Senha:</Label>
                    <Input type='password' placeholder='Digite sua senha'/>

                    <LinkSec href='#'>Já possui uma conta?</LinkSec>

                    <BoxButton>
                    <Button type='submit'>Cadastre-se</Button> 
                    </BoxButton>
                    

                </Form>
            </SignIn>

            <Right>
                <Card>
                    <InsideCard>
                        <Image
                            src='/imgs/Card.svg'
                            alt='Card' 
                            width='356' 
                            height='186'
                        />
                        <Paragraph>
                        Animações em React Native para implementar sua aplicação
                        </Paragraph>
                    </InsideCard>
                    <OutsideCard>
                        <Paragraph>Aprenda animações basicas em React Native que tornarão suas aplicações mais chamativas.</Paragraph>
                    </OutsideCard>
                </Card>
            </Right>
            </SectionContainer>

        </>
    );
}