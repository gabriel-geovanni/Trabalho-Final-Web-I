import styled from 'styled-components';

interface Props {
  selected?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100px;
  min-width: 250px;
  max-width: 250px;
  background: ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.foreground)};
  box-shadow: 0 2px 4px 0px ${(props) => props.theme.colors.black + '50'};
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;

  h1 {
    font-size: 1.8rem;
    color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.black)};
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.black)};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0;

      label {
        font-size: 1.2rem;
        color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.black)};
        font-weight: 500;
      }

      span {
        font-size: 1.4rem;
        color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.black)};
        font-weight: 700;
      }
    }
  }
`;
