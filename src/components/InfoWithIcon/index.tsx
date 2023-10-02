import { ReactNode } from "react";
import { InfoContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps{
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}
// Componente dinamico que informa qualidades do petshop, recebe um icon e um text dinamicamente
export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps){
    return(
        <InfoWithIconContainer>
            <InfoContainer iconBg={iconBg}>{icon}</InfoContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}