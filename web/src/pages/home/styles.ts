import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  padding-bottom: 3rem;
  background: ${(props) => props.theme.colors.background};
  gap: 2rem;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;
`;

export const RoomView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.background};
  gap: 2rem;

  .title {
    font-size: 2.4rem;
    color: ${(props) => props.theme.colors.black};
    font-weight: 700;
    padding-left: 1rem;
  }

  .carousel {
    overflow-x: scroll;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;

    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 1rem;
    padding: 2rem 1rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  gap: 2rem;

  .reserva {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    .inputView {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      gap: 1rem;
      padding: 1rem 0;
      /* border-bottom: 1px solid ${(props) => props.theme.colors.black + '50'}; */

      .rowDate {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;

        .date {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          gap: 0.5rem;
          label {
            font-size: 1.2rem;

            color: ${(props) => props.theme.colors.black};
            font-weight: 500;
          }

          input {
            width: 100%;
            height: 3.5rem;
            border: 1px solid ${(props) => props.theme.colors.black + '50'};
            border-radius: 0.5rem;
            padding: 0 1rem;
            font-size: 1.2rem;
            color: ${(props) => props.theme.colors.black};
            font-weight: 500;
          }
        }
      }

      h1 {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 500;
        margin-top: 1rem;
      }

      .reserva {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
        background-color: ${(props) => props.theme.colors.foreground};
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px 1px ${(props) => props.theme.colors.black + '50'};

        h1 {
          font-size: 1.2rem;
          color: ${(props) => props.theme.colors.black};
          font-weight: 700;
          padding: 0;
          margin: 0;
        }

        .row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1rem;
          .content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;

            p {
              font-size: 1.2rem;
              color: ${(props) => props.theme.colors.black};
              font-weight: 700;
              padding: 0;
              margin: 0;
            }

            label {
              font-size: 1.2rem;
              color: ${(props) => props.theme.colors.black};
              font-weight: 500;
              padding: 0;
              margin: 0;
            }
          }
        }
      }

      button {
        width: 100%;
        height: 3.5rem;
        border: 1px solid ${(props) => props.theme.colors.black + '50'};
        border-radius: 0.5rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 500;
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};

        &:hover {
          background: ${(props) => props.theme.colors.primary + '90'};
          transition: 0.2s;
        }
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
    border-top: 1px solid ${(props) => props.theme.colors.black + '50'};

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      border-radius: 0.5rem;
      gap: 1rem;
      padding: 1rem;
      margin-top: 1rem;
      border-top: 1px solid ${(props) => props.theme.colors.black + '50'};
      background-color: ${(props) => props.theme.colors.foreground};
      box-shadow: 0 2px 4px 1px ${(props) => props.theme.colors.black + '50'};

      button {
        width: 100%;
        height: 3.5rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 500;
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
      }

      input {
        width: 100%;
        height: 3.5rem;
        border: 1px solid ${(props) => props.theme.colors.black + '50'};
        border-radius: 0.5rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 500;
      }

      p {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 700;
        padding: 0;
        margin: 0;
        text-align: center;
      }

      label {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.black};
        font-weight: 500;
        padding: 0;
        margin: 0;
      }
    }
  }
`;
