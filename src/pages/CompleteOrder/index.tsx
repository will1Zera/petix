import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";
import { SelectedProducts } from './components/SelectedProducts/index';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods{
    credit = "credit",
    debit = "debit",
    money = "money"
}

// Criando o schema do formulário com todos os campos
const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap:() => { 
            return { message: "Informe o método de pagamento" } }
    })
});

// Infere os tipos do objeto acima
export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage(){
    // Criando o formulário do pedido
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    });

    const { handleSubmit } = confirmOrderForm;

    const { cleanCart } = useCart();

    const navigate = useNavigate();

    function handleConfirmOrder(data: ConfirmOrderFormData){
        navigate("/orderConfirmed", {
            state: data
        });
        cleanCart();
    };

    return(
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm />
                <SelectedProducts />
            </CompleteOrderContainer>
        </FormProvider>
    );
};