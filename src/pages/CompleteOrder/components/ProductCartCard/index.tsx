import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, ProductCartCardContainer, RemoveButton } from "./styles";


export function ProductCartCard(){
  return (
    <ProductCartCardContainer>
        <div>
            <img src="https://petfoood.netlify.app/assets/images/ProductsJson/4.png" alt="Produto Imagem"/>
            <div>
                <RegularText color="subtitle">
                    Ração Golden para Cães Adultos
                </RegularText>

                <ActionsContainer>
                    <QuantityInput size="small"/>
                    <RemoveButton>
                        <Trash size={16}/> REMOVER
                    </RemoveButton>
                </ActionsContainer>
            </div>
        </div>

        <p>R$ 199,90</p>
    </ProductCartCardContainer>
  );
};
