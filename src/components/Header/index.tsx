import { HeaderButton, HeaderContainer, HeaderLinks, Links } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';


export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <img src="/images/Petix.png" alt="Logo" />
                <HeaderLinks >
                    <Links>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/">Sobre</Link></li>
                            <li><Link to="/">Contato</Link></li>
                        </ul>
                    </Links>
                    <HeaderButton>
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderLinks>
            </div>
        </HeaderContainer>
    )
}