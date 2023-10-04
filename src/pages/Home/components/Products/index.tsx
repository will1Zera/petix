import { TitleText } from "../../../../components/Typography";
import { products } from "../../../../data/products";
import { ProductCard } from "../ProductCard";
import { ProductList, ProductsContainer } from "./styles";


export function Products(){
    return(
        // Consumindo os products de data
        <ProductsContainer className="container">
            <TitleText size="l" color="subtitle">
                Alguns dos nosso produtos:
            </TitleText>

            <ProductList>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </ProductList>
        </ProductsContainer>
    );
};