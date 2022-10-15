import styled from "styled-components";

export const ListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 1.188rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    max-width: 775px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-weight: 600;
      font-size: 16px;
      color: var(--Grey-0);
    }

    button {
      width: 32px;
      height: 32px;
      background-color: var(--Grey-3);
      color: var(--Grey-0);
      border-radius: 4px;
      font-weight: 700;
      font-size: 20px;
      cursor: pointer;
    }
  }

  ul {
    width: 100%;
    max-width: 775px;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 1.75rem;
    background-color: var(--Grey-3);
    align-items: center;
    border-radius: 4px;

    li {
      width: 95%;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--Grey-4);

      &:first-child {
        margin-top: 1.375rem;
      }

      &:last-child {
        margin-bottom: 1.375rem;
      }

      h2 {
        color: var(--Grey-0);
        font-size: 14px;
        font-weight: 700;
        padding-left: 0.75rem;
      }

      div {
        width: unset;

        p {
          color: var(--Grey-1);
          font-size: 12px;
          font-weight: 400;
          padding-right: 12px;
        }

        button {
          background-color: unset;
          margin-right: 0.8rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    ul {
      li {
        div {
          button {
            margin-right: 1.125rem;
          }
        }
      }
    }
  }
`;
