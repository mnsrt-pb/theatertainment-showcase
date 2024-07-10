import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import gifs from '../data'
import Slider from 'react-slick';

export default function Demo() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [type, setType] = React.useState('guest')

    const handleTab =  (e) => {
        const data = e.target.getAttribute('aria-controls');
        setType(data.slice(0, -4));
    }

    const guestGifs = gifs.guest.map(gif => <img key={gif[0]} src={process.env.PUBLIC_URL + '/gifs/guest' + gif[0]} alt = {gif[1]}/>)
    const memberGifs = gifs.member.map(gif => <img key={gif[0]} src={process.env.PUBLIC_URL + '/gifs/member' + gif[0]} alt = {gif[1]}/>)
    const employeeGifs = gifs.employees.map(gif => <img key={gif[0]} src={process.env.PUBLIC_URL + '/gifs/employee' + gif[0]} alt = {gif[1]}/>)

    return (
        <section id='demo' className='grid-container'>
            <h2 className='fs-600 text-pink-outbuttonned'>
                /Demo
            </h2>
            <div className='flex tab-list' role="tablist" aria-label="demo list">
                <button aria-selected={type === 'guest'} role="tab" aria-controls="guest-tab" onClick={handleTab}>Guest</button>
                <button aria-selected={type === 'member'} role="tab" aria-controls="member-tab" onClick={handleTab}>Member</button>
                <button aria-selected={type === 'employee'} role="tab" aria-controls="employee-tab" onClick={handleTab}>Employee</button>
            </div>
            {
                type == 'guest' && 
                <div id='guest' className="gifs-container">
                        <Slider {...settings}>
                            {guestGifs}
                        </Slider>
                </div>
            }
            {
                type == 'member' && 
                <div id='member' className="gifs-container">
                    <Slider {...settings}>
                        {memberGifs}
                    </Slider>
                </div>
            }
            {
                type == 'employee' && 
                <div id='employee' className="gifs-container">
                    <Slider {...settings}>
                        {employeeGifs}
                    </Slider>
                </div>
            }
        </section>
    )
}
