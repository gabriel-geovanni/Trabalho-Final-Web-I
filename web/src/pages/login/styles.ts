import { LoginSocialGoogle } from 'reactjs-social-login';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: ${(props) => props.theme.colors.background};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 400px;
    height: 400px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 2px 10px 0px ${(props) => props.theme.colors.black + '50'};
    padding: 1rem;
    border-radius: 1rem;
    color: white;
  }
`;

export const ButtonLoginSocial = styled(LoginSocialGoogle)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
  border-radius: 50% !important;
  width: 90px !important;
  height: 90px !important;
  border: 2px solid ${(props) => props.theme.colors.black} !important;
  box-shadow: 0 3px 6px 1px ${(props) => props.theme.colors.black + '70'} !important;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s;
  background-color: ${(props) => props.theme.colors.background} !important;
`;
