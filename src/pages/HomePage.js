import React from 'react'
import TopNav from './components/TopNav'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={"container-fluid min-vh-100 bg-light d-flex flex-column home-page"} >
            <TopNav />
            <h1>Our New Additions</h1>
            <Carousel responsive={responsive}>
                <div className='caroucard'>
                <img className='product--image' src='fero.png' alt='prdt'/>
                <h2>Name</h2>
                <p className='price'>P40.00</p>
                <button className='btn1'>Add to cart</button>
                </div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
            <h1 style={{marginTop: '35px'}}>What would you like to buy?</h1>

        </div>
    )
}


export default HomePage