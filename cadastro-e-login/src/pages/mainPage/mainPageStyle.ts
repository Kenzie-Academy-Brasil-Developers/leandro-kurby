import styled from "styled-components"

export const MainPageContainer = styled.div`

    .headerContainer {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        padding-top: 1.625rem;
        padding-bottom: 2.375rem;
        align-items: center;

        button {
            width: 80px;
            height: 32px;
            font-weight: 600;
            font-size: 10px;
            color: var(--Grey-0);
            background-color: var(--Grey-3);
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .borderContainer {
        border-top: 1px solid var(--Grey-3);
        border-bottom: 1px solid var(--Grey-3);

        .centralizedContainer {
            width: 90%;
            margin: 0 auto;

            h2 {
                color: var(--Grey-0);
                font-weight: 700;
                font-size: 18px;
                padding-top: 2.188rem;
            }

            p {
                color: var(--Grey-1);
                padding-top: 0.625rem;
                padding-bottom: 2.25rem;
                font-weight: 400;
                font-size: 12px;
            }
        }
    }

    .warningMessage {
      display: none;
    }

    @media (min-width: 768px) {

        .headerContainer { 
            max-width: 775px;
            padding-top: 1.25rem;
        }

        .borderContainer {

            .centralizedContainer {
                height: 118px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 775px;       

                h2 {
                    padding: 0;
                }

                p {
                    padding: 0;
                }
            }
        }

        .warningMessage {
            display: block;
            width: 90%;
            max-width: 775px;  
            margin: 0 auto;
    
            h2 {
                padding-top: 2.313rem;
                color: var(--Grey-0);
                font-size: 18px;
                font-weight: 700;
            }

            p {
                padding-top: 1.438rem;
                color: var(--Grey-0);
                font-size: 16px;
                font-weight: 400;
            }
        }
    }
`