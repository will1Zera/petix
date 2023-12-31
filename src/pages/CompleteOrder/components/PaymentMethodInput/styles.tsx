import styled from "styled-components";

export const PaymentMethodInputContainer = styled.div`
    input{
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div{
        background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
        border-color: ${({ theme }) => theme.colors["brand-purple"]};

        &:hover{
            background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
        }
    }
`;

export const ContentContainer = styled.div`
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    font-size: .75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    transition: .4s;
    cursor: pointer;

    svg{
        color: ${({ theme }) => theme.colors["brand-pink-dark"]};
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    user-select: none;
`;