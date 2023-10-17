import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../components/Typography";
import { OderDetailsContainer, OrderConfirmedContainer } from "./styles";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
    state: OrderData;
}

export function OrderConfirmedPage(){
    const { colors } = useTheme();

    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if(!state){
            navigate("/");
        }
    }, []);

    if(!state) return <></>;

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
                            Entrega em <strong>{state.street}, {state.number}</strong><br />
                            {state.district} - {state.city}, {state.uf}
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
                            <strong>{paymentMethods[state.paymentMethod].label}</strong>
                        </RegularText>
                    }
                />
            </OderDetailsContainer>

            <img src="images/Order_dog.png" alt="Pedido animal" />
        </section>
    </OrderConfirmedContainer>
  );
};
