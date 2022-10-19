import styled from "styled-components";

export const RegisterContainer = styled.div`
  .centralizedContainer {
    header {
      color: var(--Color-primary);
      padding-top: 3.125rem;
      padding-bottom: 2.438rem;
      width: 90%;
      max-width: 369px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: var(--Grey-0);
        background-color: var(--Grey-3);
        font-weight: 600;
        font-size: 10px;
        border-radius: 4px;
        width: 80px;
        height: 32px;
        cursor: pointer;
      }
    }

    div {
      width: 90%;
      max-width: 369px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--Grey-3);
      border-radius: 3px;

      h3 {
        padding-top: 2.063rem;
        color: var(--Grey-0);
        font-weight: 400;
        font-size: 14px;
      }

      p {
        padding-top: 1.125rem;
        padding-bottom: 0.188rem;
        color: var(--Grey-1);
        font-weight: 400;
        font-size: 10px;
      }

      form {
        width: 90%;
        display: flex;
        flex-direction: column;

        label {
          color: var(--Grey-0);
          font-size: 12px;
          font-weight: 400;
          padding-top: 1.313rem;
          padding-bottom: 1.125rem;
        }

        input,
        select {
          height: 39px;
          border-radius: 4px;
          background-color: var(--Grey-2);
          padding-left: 0.813rem;
          font-size: 13px;
          font-weight: 400;
          color: var(--Grey-1);

          &:focus {
            outline: 1px solid var(--Grey-0);
            color: var(--Grey-0);
          }
        }

        small {
          color: red;
        }

        .submitButton {
          margin-top: 1.563rem;
          margin-bottom: 2.125rem;
          background-color: var(--Color-primary);
          height: 39px;
          color: var(--Grey-0);
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: 500ms;

          &:disabled {
            background-color: var(--Color-primary-Negative);
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .centralizedContainer {
      header {
        padding-top: 3.625rem;
        padding-bottom: 3.063rem;

        img {
          height: 21px;
        }

        button {
          width: 68px;
          height: 40px;
          font-size: 12px;
        }
      }

      div {
        h3 {
          padding-top: 2.625rem;
          font-size: 18px;
        }

        p {
          padding-top: 1.375rem;
          padding-bottom: 0.063rem;
          font-size: 12px;
        }

        form {
          label {
            padding-top: 1.688rem;
            padding-bottom: 1.375rem;
            font-size: 12px;
          }

          input,
          select {
            height: 48px;
            font-size: 16px;
            padding-left: 16px;
          }

          .submitButton {
            margin-top: 1.25rem;
            font-size: 16px;
            height: 48px;
          }
        }
      }
    }
  }
`;
