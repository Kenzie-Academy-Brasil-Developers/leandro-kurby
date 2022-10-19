import styled from "styled-components";

export const ModalAdd = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.5);

  div {
    background-color: var(--Grey-3);
    max-width: 369px;
    width: 90%;
    border-radius: 4px;

    div {
      display: flex;
      background-color: var(--Grey-2);
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40px;
      border-radius: 4px 4px 0 0;

      h2 {
        color: var(--Grey-0);
        font-size: 12px;
        font-weight: 700;
        padding-left: 1rem;
      }

      button {
        color: var(--Grey-1);
        font-size: 12px;
        font-weight: 600;
        padding-right: 1rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
      padding-top: 1.188rem;

      label {
        font-size: 10px;
        font-weight: 400;
        color: var(--Grey-0);
      }

      input {
        margin-top: 1.125rem;
      }

      input,
      select {
        padding-left: 1rem;
        height: 39px;
        border-radius: 4px;
        color: var(--Grey-0);
        background-color: var(--Grey-2);

        &:focus {
          border: 1px solid var(--Grey-0);
        }
      }

      span {
        color: red;
        font-size: 10px;
        margin-top: 0.5rem;
        margin-bottom: 1.313rem;
      }

      select {
        margin-top: 1.125rem;
      }

      .registerTechnologies {
        height: 39px;
        color: var(--Grey-0);
        border-radius: 4px;
        margin-top: 1.125rem;
        margin-bottom: 1.625rem;
        background-color: var(--Color-primary);
        font-size: 13px;
        font-weight: 500;

        &:disabled {
          background-color: var(--Color-primary-Negative);
        }
      }
    }
  }

  @media (min-width: 768px) {
    div {
      div {
        height: 50px;

        h2 {
          font-size: 14px;
          padding-left: 1.25rem;
        }

        button {
          font-size: 16px;
          padding-right: 1.25rem;
        }
      }

      form {
        padding-top: 1.5rem;

        label {
          font-size: 12px;
        }

        input {
          margin-top: 1.375rem;
        }

        input,
        select {
          font-size: 16px;
          height: 48px;
        }

        span {
          font-size: 12px;
          margin-top: 0.625rem;
          margin-bottom: 1.625rem;
        }

        select {
          margin-top: 1.125rem;
        }

        .registerTechnologies {
          height: 48px;
          margin-top: 1.25rem;
          margin-bottom: 2rem;
          font-size: 16px;
        }
      }
    }
  }
`;
