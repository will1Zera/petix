import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";
import { SelectedProducts } from './components/SelectedProducts/index';


export function CompleteOrderPage(){
    return(
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
            <SelectedProducts />
        </CompleteOrderContainer>
    );
};