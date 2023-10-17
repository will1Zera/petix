import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";
import { useFormContext } from 'react-hook-form';
import { RegularText } from "../../../../components/Typography";

export const paymentMethods = {
  credit: {
    label: "Cartão Crédito",
    icon: <CreditCard size={16} />
  },
  debit: {
    label: "Cartão Débito",
    icon: <Bank size={16} />
  },
  money: {
    label: "Dinheiro/Pix",
    icon: <Money size={16} />
  }
};

export function PaymentMethodOptions() {
  const { register, formState: { errors } } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput key={label} id={key} value={key} label={label} icon={icon} {...register("paymentMethod")} />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  );
};
