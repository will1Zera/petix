import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, ProductCartCardContainer, RemoveButton } from "./styles";
import { useState } from "react";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formartMoney";
import { useCart } from "../../../../hooks/useCart";

interface ProductCartCardProps{
    product: CartItem;
}

export function ProductCartCard({product}: ProductCartCardProps){
    // Importando as funções do contexto
    const { changeCartItemQuantity, removeCartItem } = useCart();

    // Realiza a formatação do preço
    const productTotal = product.price * product.quantity;
    const formattedPrice = formatMoney(productTotal);

    // Incrementa mais uma unidade do produto
    function handleIncrease(){
        changeCartItemQuantity(product.id, "increase");
    }

    // Decrementa mais uma unidade do produto
    function handleDecrease(){
        changeCartItemQuantity(product.id, "decrease");
    }

    // Remove um produto do carrinho
    function handleRemove(){
        removeCartItem(product.id);
    }

  return (
    <ProductCartCardContainer>
        <div>
            <img src={`/products/${product.photo}`} alt="Produto Imagem"/>
            <div>
                <RegularText color="subtitle">
                    {product.name}
                </RegularText>

                <ActionsContainer>
                    <QuantityInput onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={product.quantity} size="small"/>
                    <RemoveButton onClick={handleRemove}>
                        <Trash size={16}/> REMOVER
                    </RemoveButton>
                </ActionsContainer>
            </div>
        </div>

        <p>R$ {formattedPrice}</p>
    </ProductCartCardContainer>
  );
};
