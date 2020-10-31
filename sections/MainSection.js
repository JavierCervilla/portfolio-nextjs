import { Jumbotron } from "react-bootstrap"

const MainSection = ({ data }) => {


    return (
        <Jumbotron className='main-section' >
            <h2 className='resalt'>{data.title}</h2>
            <h4>{data.subtitle}</h4>
            <p>{data.p}</p>
        </Jumbotron>
    )
}

export default MainSection
