import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formartMoney";

const DELIVERY_PRICE = 3.99;

export function ConfirmationSection() {
  const { cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
        <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ {formattedItemsTotal}</RegularText>
        </div>
        <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ {formattedDeliveryPrice}</RegularText>
        </div>
        <div>
            <RegularText size="l" color="subtitle" weight="700">Total</RegularText>
            <RegularText size="l" color="subtitle" weight="700">R$ {formattedCartTotal}</RegularText>
        </div>
        <NavLink to="/orderConfirmed">
        </NavLink>
          <Button text="confirmar pedido" disabled={cartItemsTotal <= 0} type="submit"/>
        
    </ConfirmationSectionContainer>
  );
};
