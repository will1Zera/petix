import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";


export function DefaultLayout(){
    return(
        /* Usando o css do layout container que abraça todos os componentes da aplicação + o outlet */
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}