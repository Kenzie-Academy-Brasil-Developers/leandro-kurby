import TrashIcon from "../../../../assets/Vector.svg"
import { ListContainer } from "./listOfTechnologiesStyle"

export const ListOfTechnologies = () => {

    return (
        <ListContainer>

            <div>

                <h4>Tecnologias</h4>

                <button>+</button>

            </div>

            <ul>

            <li>
                <h2>React JS</h2>

                <div>
                    <p>Intermediário</p>
                    <img src={TrashIcon} alt="" />
                </div>
            </li>

            <li>
                <h2>React JS</h2>

                <div>
                    <p>Intermediário</p>
                    <img src={TrashIcon} alt="" />
                </div>
            </li>

            <li>
                <h2>React JS</h2>

                <div>
                    <p>Intermediário</p>
                    <img src={TrashIcon} alt="" />
                </div>
            </li>

            </ul>
        </ListContainer>
    )
}