import styled from "styled-components";

const FullWidthSection = styled.div`
    grid-column: 1 / span 14;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.2rem));
    grid-template-rows: max-content;
    gap: ${(props) => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
    margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

    @media ${(props) => props.breakpoints.m} {
    grid-column: 1 / span 10;
        grid-template-columns: repeat(8, 1fr);
        gap: ${(props) => (props.gapMedium ? props.gapMedium : "1rem 1rem")};
        margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
    }           

    @media ${(props) => props.breakpoints.s} {
        grid-column: 1 / span 8;
        grid-template-columns: repeat(6, 1fr);
        gap: ${(props) => (props.gapSmall ? props.gapSmall : "1rem 1rem")};
        margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
    }           
`;
export default FullWidthSection;