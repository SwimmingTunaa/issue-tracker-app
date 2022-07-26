import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: max-content;
    gap: ${(props) => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
    margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

     
`;
export default Grid;

    // @media ${(props) => props.breakpoints.m} {
    //     grid-template-columns: repeat(8, 1fr);
    //     gap: ${(props) => (props.gapMedium ? props.gapMedium : "1rem 1rem")};
    //     margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
    // }           

    // @media ${(props) => props.breakpoints.s} {
    //     grid-template-columns: repeat(6, 1fr);
    //     gap: ${(props) => (props.gapSmall ? props.gapSmall : "1rem 1rem")};
    //     margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
    // }      