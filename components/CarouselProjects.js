import { Card } from 'react-bootstrap';
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const CarouselProjects = ({ data, deviceType = 'mobile' }) => {
    const { projects, query } = data

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1025, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            focusOnSelect={true}
            containerClass="carousel-container"
            deviceType={deviceType}
            itemClass="carousel-item-padding-40-px"

            centerMode={deviceType !== "mobile" ? true : false}
        > {projects && projects.map((project) =>
            (
                <Card className='bg-secondary' style={{ margin: '0.5em' }}>
                    <Link href={`/project/${project.url}${data.query}`}><a><img style={{ maxWidth: '400px', margin: 'auto' }} src={project.img} /></a></Link>
                    <Link href={`/project/${project.url}${data.query}`}><a><Card.Title>{project.title}</Card.Title></a></Link>
                </Card>

            ))}
        </Carousel>
    )
}

export default CarouselProjects
