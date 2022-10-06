import styled from "styled-components"

export const LoginContainer = styled.div`

    .centralizedContainer {
        
        header {
            text-align: center;
            color: var(--Color-primary);
            padding-top: 5.063rem;
            padding-bottom: 1.25rem;
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
                padding-bottom: 1.375rem;
                color: var(--Grey-0);
                font-weight: 700;
                font-size: 14px;
            }
    
            form {
                width: 90%;
                display:flex;
                flex-direction: column;
                
                label {
                    color: var(--Grey-0);
                    font-size: 12px;
                    font-weight: 400;
                    padding-bottom: 1.125rem;  

                    &:nth-child(4) {
                        padding-top: 1.313rem;
                    }
                }
                
                input {
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
                    margin-top: 1.188rem;
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
    
            span {
                padding-top: 1.688rem;
                color: var(--Grey-1);
                font-size: 10px;
                font-weigth: 600;
            }
    
            .registerButton {
                margin-top: 1.063rem;
                margin-bottom: 2.125rem;
                background-color: var(--Grey-1);
                width: 90%;
                height: 39px;
                border-radius: 4px;
                color: var(--Grey-0);
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: 500ms;   

                &:hover {
                    background-color: var(--Grey-2); 
                    transition: 500ms;  
                }
            }
        }
    }

    @media (min-width: 768px) {

        .centralizedContainer {

            header {
                padding-top: 4.813rem;
                padding-bottom: 2.25rem;

                img {
                    height: 20px;
                }
            }

            div {

                h3 {
                    font-size: 18px;
                    padding-top: 2.625rem;
                    padding-bottom: 1.75rem;
                }

                form {

                    label {
                        font-size: 12px;
                        padding-bottom: 1.375rem;

                        &:nth-child(3) {
                            padding-top: 1.688rem;
                        }
                    }

                    input {
                        height: 48px;
                        font-size: 16px;
                        padding-left: 16px;
                    }

                    .submitButton {
                        margin-top: 1.5rem;
                        height: 48px;
                        font-size: 16px;
                    }
                }

                span {
                    padding-top: 2.125rem;
                    padding-bottom: 0.125rem;
                    font-size: 12px;
                }

                .registerButton {
                    height: 48px;
                    font-size: 13px;
                    margin-bottom: 2.625rem;
                }
            }
        }
    }
    
`