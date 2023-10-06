import { Minus, Plus } from "@phosphor-icons/react";
import { IconWrapper, QuantityInputContainer } from "./styles";

// Interface e prop para controlar o tamanho desse input dinamicamente
interface QuantityInputProps{
    size?: "medium" | "small";
}

export function QuantityInput({ size = "medium" }: QuantityInputProps){
    return(
        // Mandando o size da prop para o style
        <QuantityInputContainer size={size}>
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