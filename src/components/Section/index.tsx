import react from 'react';
import Image from 'next/image';

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

export default function Section(){

    return(
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
    );
}