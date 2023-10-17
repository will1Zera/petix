import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        padding-inline: 30px;
    }
`;

export const SectionBaseStyle = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`;