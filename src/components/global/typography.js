import { styled } from "styled-components";
import { at } from "../../utils/queryHelpers";

export const HeadingSecondary = styled.h2`
  font-size: 5.8rem;
  font-weight: 400;
  padding-left: 8rem;
  line-height: 1.2;
  width: 100%;
  ${at(800, `font-size: 5rem;`)}
`;
