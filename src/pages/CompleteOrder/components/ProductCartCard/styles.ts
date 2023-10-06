import styled from "styled-components";

export const ProductCartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme }) => theme.colors["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    > div{
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img{
            width: 5rem;
        }

        p{
            width: 150px;
        }
    }

    > p{
        align-self: flex-start;
        font-weight: 700;
    }
`;

export const ActionsContainer = styled.div`
    margin-top: .5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: .5rem;

    > div{
        max-width: 4.5rem;
        height: 100%;
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: .25rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: .75rem;
    height: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    padding: 0 .5rem;
    border-radius: 6px;
    transition: .4s;

    svg{
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors["base-hover"]};
    }
`;