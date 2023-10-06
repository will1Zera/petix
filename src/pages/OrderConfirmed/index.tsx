import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../components/Typography";
import { OderDetailsContainer, OrderConfirmedContainer } from "./styles";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";

export function OrderConfirmedPage(){
    const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
        <div>
            <TitleText size="l">Uhu! Pedido confirmado</TitleText>
            <RegularText size="l" color="subtitle">Agora é só aguardar que logo os produtos chegarão até você</RegularText>
        </div>

        <section>
            <OderDetailsContainer>
                <InfoWithIcon 
                    icon={<MapPin weight="fill"/>}
                    iconBg={colors["brand-purple"]}
                    text={
                        <RegularText>
                            Entrega em <strong>Rua Santa Clara, 182</strong><br />
                            Três Vendas - Pelotas, RS
                        </RegularText>
                    }
                />
                <InfoWithIcon 
                    icon={<Clock weight="fill"/>}
                    iconBg={colors["brand-green-dark"]}
                    text={
                        <RegularText>
                            Previsão de entrega<br />
                            <strong>1 hora - 2 horas</strong>
                        </RegularText>
                    }
                />
                <InfoWithIcon 
                    icon={<CurrencyDollar/>}
                    iconBg={colors["brand-pink-dark"]}
                    text={
                        <RegularText>
                            Pagamento na entrega<br />
                            <strong>Cartão de débito</strong>
                        </RegularText>
                    }
                />
            </OderDetailsContainer>

            <img src="images/Order_dog.png" alt="Pedido animal" />
        </section>
    </OrderConfirmedContainer>
  );
};
