import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1{
        color: ${({ theme }) => theme.colors["brand-pink-dark"]};
    }

    > section{
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 20rem;
        }

        @media (max-width: 1200px) {
            flex-direction: column;
        }
    }

    > div{
        @media (max-width: 1200px) {
            text-align: center;
        }
    }
`;

export const OderDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background-color: ${({ theme }) => theme.colors["base-background"]};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #c444a8 2.61%, #8047f8 98.76%);
    }
`;