import { Minus, Plus } from "@phosphor-icons/react";
import { IconWrapper, QuantityInputContainer } from "./styles";

// Interface e prop para controlar o tamanho desse input dinamicamente
interface QuantityInputProps{
    size?: "medium" | "small";
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

export function QuantityInput({ onIncrease, onDecrease, quantity, size = "medium", }: QuantityInputProps){
    return(
        // Mandando o size da prop para o style
        <QuantityInputContainer size={size}>
            <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
                <Minus size={14} />
            </IconWrapper>
            <input type="number" readOnly value={quantity} />
            <IconWrapper onClick={onIncrease}>
                <Plus size={14} />
            </IconWrapper>
        </QuantityInputContainer>
    )
};