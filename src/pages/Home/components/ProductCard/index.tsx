import { ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddProductWrapper, Description, Name, ProductCardContainer, ProductFooter, Tags } from "./styles";
import { formatMoney } from "../../../../utils/formartMoney";

export interface Product{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface ProductProps{
    product: Product;
}

export function ProductCard({ product }: ProductProps){
    const formattedPrice = formatMoney(product.price);

    return(
        <ProductCardContainer>
            <img src={`/products/${product.photo}`} alt="Produto imagem" />

            <Tags>
                {product.tags.map((tag) =>(
                    <span key={`${product.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{product.name}</Name>

            <Description>{product.description}</Description>

            <ProductFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddProductWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={20}/>
                    </button>
                </AddProductWrapper>
            </ProductFooter>
        </ProductCardContainer>
    );
};