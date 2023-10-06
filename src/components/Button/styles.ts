import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: .75rem 2.8rem;
    color: ${({ theme }) => theme.colors["base-white"]};
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors["brand-purple"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: .4s;
    line-height: 1.3rem;
    margin-top: .7rem;

    &:disabled{
        opacity: .7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    }
`;

