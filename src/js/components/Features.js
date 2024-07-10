import React from 'react'

export default function Features() {
    return (
        <section id='features' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>
                /Features
            </h2>
            <ul className='command-icon-list'>
                <li>User authentication and authorization</li>
                <ul>
                    <li>Login and registration for users.</li>
                </ul>

                <li>Movie ticket purchases</li>
                <ul>
                    <li>Users can browse and purchase tickets for available movies.</li>
                </ul>
                
                <li>Watchlist management</li>
                <ul>
                    <li>Members can add movies to their personal watchlist for future viewing.</li>
                </ul>
                
                <li>Profile management</li>
                <ul>
                    <li>Members can update their profile information.</li>
                </ul>
                
                <li>Payment options</li>
                <ul>
                    <li>Members can add and manage a default credit card.</li>
                </ul>
                
                <li>Purchase history</li>
                <ul>
                    <li>Members can view a history of all their purchases.</li>
                </ul>
                
                <li>Purchase receipts</li>
                <ul>
                    <li>Both guests and members can view purchase receipts.</li>
                </ul>
                
                <li>Movie management (employee)</li>
                <ul>
                    <li>Employees can add, delete, update, activate, and inactivate movies available for streaming.</li>
                </ul>
                
                <li>Showtime management (employee)</li>
                <ul>
                    <li>Employees can add movie showtimes.</li>
                </ul>
                
                <li>Change tracking (employee)</li>
                <ul>
                    <li>Employees can view the changes they have made.</li>
                </ul>
                
                <li>Theater Auditoriums (Employee)</li>
                <ul>
                    <li>Employees can view auditoriums in the theater.</li>
                </ul>
                
                <li>Ticket Information(employee)</li>
                <ul>
                    <li>Employees can view purchased tickets' information.</li>
                </ul>
                
            </ul>
        </section>
    )
}
