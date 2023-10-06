import { HeaderButton, HeaderContainer, HeaderLinks, Links } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';


export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src="/images/Petix.png" alt="Logo" />
                </NavLink>
                <HeaderLinks >
                    <Links>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/about">Sobre</Link></li>
                            <li><Link to="/contact">Contato</Link></li>
                        </ul>
                    </Links>
                    <NavLink to="/completeOrder">
                        <HeaderButton>
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderLinks>
            </div>
        </HeaderContainer>
    )
}