import styled from "styled-components";

// Componente dinamico para a tipografia do sistema

interface TitleTextProps{
    color?: "title" | "subtitle" | "text";
    size?: "xl" | "l" | "m" | "s" | "xs";
    weight?: string | number;
}

interface RegularTextProps{
    color?: "title" | "subtitle" | "label";
    size?: "l" | "m" | "s";
    weight?: string | number;
}

// Estilização dinamica de titulo
export const TitleText = styled.h1<TitleTextProps>`
    color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
    font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size ?? "m"}`]};
    font-family: ${({ theme }) => theme.fonts.title};
    line-height: 130%;
    font-weight: ${({ weight }) => weight ?? 800};
`;

// Estilização dinamica de paragrafo
export const RegularText = styled.p<RegularTextProps>`
    color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
    font-size: ${({ theme, size }) => theme.textSizes[`text-regular-${size ?? "m"}`]};
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: 130%;
    font-weight: ${({ weight }) => weight ?? 400};
`;