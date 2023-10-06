import { CreditCard } from '@phosphor-icons/react';
import { PaymentMethodInputContainer } from './styles';

export function PaymentMethodInput(){
  return (
    <PaymentMethodInputContainer>
        <CreditCard size={16}/>
        Dinheiro/Pix
    </PaymentMethodInputContainer>
  );
};
