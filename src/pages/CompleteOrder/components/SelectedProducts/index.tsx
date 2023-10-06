import { TitleText } from "../../../../components/Typography";
import { ProductCartCard } from "../ProductCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedProductsContainer } from "./styles";


export function SelectedProducts(){
  return (
    <SelectedProductsContainer>
        <TitleText size="xs" color="subtitle">
            Produtos selecionados
        </TitleText>

        <DetailsContainer>
            <ProductCartCard />
            <ProductCartCard />

            <ConfirmationSection />
        </DetailsContainer>
    </SelectedProductsContainer>
  );
};
