import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  // padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 0 20px;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 120px;

  @media screen and (max-width: 500px) {
    width: 120px;
  }
  @media screen and (min-width: 500px) {
    width: 130px;
  }
`;

export const Add = styled.img`
  width: 80px;

  @media screen and (max-width: 500px) {
    width: 60px;
  }
`;
