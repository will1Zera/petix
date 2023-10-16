import { ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddProductWrapper, Description, Name, ProductCardContainer, ProductFooter, Tags } from "./styles";
import { formatMoney } from "../../../../utils/formartMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

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
    const [quantity, setQuantity] = useState(1);
    const { addProductToCart } = useCart();

    function handleIncrease(){
        setQuantity(state => state + 1);
    }

    function handleDecrease(){
        setQuantity(state => state - 1);
    }

    function handleAddToCart(){
        const productToAdd = {
            ...product,
            quantity
        }
        addProductToCart(productToAdd);
    }

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
                    <QuantityInput onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={quantity}/>
                    <button onClick={handleAddToCart}>
                        <ShoppingCart weight="fill" size={20}/>
                    </button>
                </AddProductWrapper>
            </ProductFooter>
        </ProductCardContainer>
    );
};