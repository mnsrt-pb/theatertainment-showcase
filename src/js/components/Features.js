import React from 'react'
import features_data from '../features_data'

export default function Features() {
    const id = React.useId()

    function unit(type) {
        return (
        <div>
            <h3 className='text-center'>{type.title}</h3>
            <ul className='command-icon-list'>
                {type.data.map((datum, i) =>
                    <li key={`${id}-${type.title}-${i}`}>
                        <span className='fw-600'>{datum.feature}</span>
                        <ul>
                            <li>
                                {datum.short && <span className='fw-500'>{datum.short}: </span>}
                                {datum.description}
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
        )
    }

    return (
        <section id='features' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>/Features</h2>

            <div className='unit'>
                {unit(features_data.core, 'core') }
                {unit(features_data.employee, 'employee') }
                {unit(features_data.additional, 'additional') }
            </div>
        </section>
    )
}

<ul className='command-icon-list'>
    <li>
        User authentication and authorization
        <ul>
            <li>Login and registration for users.</li>
            <li>Role-based access ensures that only authorized personnel can add or edit movie screenings.</li>
        </ul>
    </li>

    <li>
        Movie ticket purchases
        <ul>
            <li>Users can browse and purchase tickets for available movies.</li>
        </ul>
    </li>
    
    <li>
        Watchlist management
        <ul>
            <li>Members can add movies to their personal watchlist for future viewing.</li>
        </ul>
    </li>
    
    <li>
        Profile management
        <ul>
            <li>Members can update their profile information.</li>
        </ul>
    </li>
    
    <li>
        Payment options
        <ul>
            <li>Members can add and manage a default credit card.</li>
        </ul>
    </li>
    
    <li>
        Purchase history
        <ul>
            <li>Members can view a history of all their purchases.</li>
        </ul>
    </li>
    
    <li>
        Purchase receipts
        <ul>
            <li>Both guests and members can view purchase receipts.</li>
        </ul>
    </li>
    
    <li>
        Movie management (employee)
        <ul>
            <li>Employees can add, delete, update, activate, and inactivate movies available for streaming.</li>
        </ul>
    </li>
    
    <li>
        Showtime management (employee)
        <ul>
            <li>Employees can add movie showtimes.</li>
        </ul>
    </li>
    
    <li>
        Change tracking (employee)
        <ul>
            <li>Employees can view the changes they have made.</li>
        </ul>
    </li>
    
    <li>
        Theater Auditoriums (Employee)
        <ul>
            <li>Employees can view auditoriums in the theater.</li>
        </ul>
    </li>
    
    <li>
        Ticket Information(employee)
        <ul>
            <li>Employees can view purchased tickets' information.</li>
        </ul>
    </li>
    
</ul>