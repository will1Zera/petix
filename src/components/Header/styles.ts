import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 121px;
        }
    }
`;

export const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    color: ${({ theme }) => theme.colors["brand-green-dark"]};
    background-color: ${({ theme }) => theme.colors["brand-green-light"]};
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ul{
        display: flex;
        list-style-type: none;
        li{
            transition: all 1000ms;
        };
        a{
            text-decoration: none;
            color: ${({ theme }) => theme.colors["base-text"]};
            font-weight: 500;
            padding-right: 60px;
            transition: 0.3s;
            &:hover {
                color: ${({ theme }) => theme.colors["brand-green-dark"]};
            };
        };
    };
    @media (max-width: 800px){
        display: none;
    };
`;