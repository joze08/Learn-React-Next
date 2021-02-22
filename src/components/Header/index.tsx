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

export default function Header(){
    const router = useRouter();
    

    return (
    
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

    );
}