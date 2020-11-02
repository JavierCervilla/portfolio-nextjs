import { Jumbotron } from "react-bootstrap"

const MainSection = ({ children }) => {


    return (
        <Jumbotron className='main-section' >
            {children}
        </Jumbotron>
    )
}

export default MainSection
