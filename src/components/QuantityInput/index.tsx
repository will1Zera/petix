import { Minus, Plus } from "@phosphor-icons/react";
import { IconWrapper, QuantityInputContainer } from "./styles";

export function QuantityInput(){
    return(
        <QuantityInputContainer>
            <IconWrapper>
                <Minus size={14} />
            </IconWrapper>
            <input type="number" readOnly value={1} />
            <IconWrapper>
                <Plus size={14} />
            </IconWrapper>
        </QuantityInputContainer>
    )
};