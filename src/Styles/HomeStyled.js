import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 40rem;
`;

export const GeneralContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-right: 8rem;
  padding: 0;
  height: 25rem;
  width: 40rem;
  background-color: #454545;
  border-radius: 10px;

  p {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const Line1 = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 8rem;
  height: 3px;
  width: 40rem;
  background-color: black;
`;

export const HobbiesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-right: 8rem;
  height: 25rem;
  width: 40rem;
  background-color: #986547;
  border-radius: 10px;

  p {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const FooterContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 0;
  background-color: black;
  height: 10rem;
  width: 100%;
`;
