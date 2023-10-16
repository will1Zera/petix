import { HeaderButton, HeaderContainer, HeaderLinks, Links } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useCart } from "../../hooks/useCart";


export function Header(){
    const { cartQuantity } = useCart();

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
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderLinks>
            </div>
        </HeaderContainer>
    )
}