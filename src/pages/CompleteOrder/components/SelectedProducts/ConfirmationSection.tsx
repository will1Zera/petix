import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
        <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ 298,80</RegularText>
        </div>
        <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ 3,99</RegularText>
        </div>
        <div>
            <RegularText size="l" color="subtitle" weight="700">Total</RegularText>
            <RegularText size="l" color="subtitle" weight="700">R$ 301,79</RegularText>
        </div>
        
        <Button text="confirmar pedido"/>
        
    </ConfirmationSectionContainer>
  );
};
