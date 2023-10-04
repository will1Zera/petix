import { Intro } from "./components/Intro";
import { Products } from "./components/Products";
import { HomeContainer } from "./styles";


export function HomePage(){
    return(
        <HomeContainer>
            <Intro />
            <Products />
        </HomeContainer>
    )
}