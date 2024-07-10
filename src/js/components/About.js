import React from 'react'

export default function About() {
    return (
        <section id='about' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>
                /About
            </h2>
            <div>
                <p>
                    I wanted to work on a full-stack application, so I decided to recreate <span className='fw-600'>Cinemark</span> with my own twist. 
                    I named it TheaterTainment, gave it a unique theme, and added some new features. 
                    For example, on the TheaterTainment website, employees can create accounts and add movies or screenings.
                </p>
                <p>
                    As I began coding, I quickly realized the scale of the project. My Python files evolved into packages, 
                    and I had to incorporate SQL models, blueprints, and pagination. Given the project's size and the time 
                    it required, I decided to write unit tests, which proved to be a great decision.
                </p>
                <p>
                    To simplify the process, I used <span className='fw-600'>The Movie Database API</span> for movie data. Initially, 
                    I made the API calls directly, but I later switched to using <span className='fw-600'>tmdbsimple</span>, a Python wrapper for the API.
                </p>
                <p>
                    Creating this project was incredibly fun, and I'm really proud of the result. In the near future, I plan 
                    to use React for the front-end to enhance user experience. 
                </p>
                <p className='fw-500'>Technologies used:</p>
                <ul className='command-icon-list'>
                    <li>Flask</li>
                    <li>SQLAlchemy</li>
                    <li>TMDB API</li>
                    <li>tmdbsimple (API calls)</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </section>
    )
}
