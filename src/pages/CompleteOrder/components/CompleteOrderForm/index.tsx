import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddresForm } from "./AddresForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm(){
    const { colors } = useTheme();

    return(
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle title="Endereço de Entrega" subtitle="Informe o endereço onde deseja receber seu pedido" icon={<MapPinLine color={colors["brand-green-dark"]} size={22}/>}/>

                <AddresForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle title="Pagamento" subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar" icon={<CurrencyDollar color={colors["brand-pink-dark"]} size={22}/>}/>

                <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    );
};