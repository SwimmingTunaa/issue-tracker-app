import styled from "styled-components";

const NavSection = styled.div`
    grid-column:  span 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 4.2rem));
    grid-template-rows: max-content;
    gap: ${(props) => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
    margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

             
`;
export default NavSection;
//  @media ${(props) => props.breakpoints.points.m  ? props.breakpoints.points.m : "only screen and (max-width: 70rem)"} {
//         grid-column: 1 / span 3;
//         grid-template-columns: repeat(2, 1fr);
//         gap: ${(props) => (props.gapMedium ? props.gapMedium : "1rem 1rem")};
//         margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
//     }           

//     @media ${(props) => props.breakpoints.points.s ? props.breakpoints.points.s : "only screen and (max-width: 65rem)"} {
//         grid-column: 1 / span 3;
//         grid-template-columns: repeat(2, 1fr);
//         gap: ${(props) => (props.gapSmall ? props.gapSmall : "1rem 1rem")};
//         margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
//     } 