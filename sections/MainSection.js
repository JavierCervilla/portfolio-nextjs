
const MainSection = ({ data }) => {

    return (
        <section className='main-section'>
            <h2>{data.title}</h2>
            <h4>{data.subtitle}</h4>
        </section>
    )
}

export default MainSection
