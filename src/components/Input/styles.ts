import styled from "styled-components";

export const InputStyleContainer = styled.input`
    height: 2.65rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    transition: .4s;

    &:focus{
        border-color: ${({ theme }) => theme.colors["brand-green-dark"]};
    }

    &::placeholder{
        color: ${({ theme }) => theme.colors["base-label"]};
    }

    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.75rem;
    padding: 0 0.75rem;
`;