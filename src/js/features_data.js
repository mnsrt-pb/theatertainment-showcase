const data = {
    core : {
        title: 'Core Functionalities',
        data: [
            {
                feature: 'User Authentication and Authorization',
                short: 'Login and Registration',
                description: `Users can create accounts, 
                log in securely, and manage their sessions for personalized experiences.
                Role-based access ensures that only authorized personnel can add or edit movie screenings.`
            },
            {
                feature: 'Movie Ticket Purchases',
                short: 'Browse and Buy Tickets',
                description: 'Users can explore available movies and purchase tickets directly through the platform, simplifying the movie-going experience.'
            },
            {
                feature: 'Watchlist Management',
                short:'Personalized Watchlist',
                description: 'Members can add movies to their watchlist for future viewing.'
            },
            {
                feature: 'Profile Management',
                short:'Update Profile Information',
                description: 'Members can edit their profile details to keep their information up to date.'
            },
            {
                feature: 'Payment Options',
                short:'Manage Credit Card Information',
                description: 'Members can add and manage their default credit card for quick transactions.'
            },
            {
                feature: 'Purchase Receipts',
                short:'Access Receipts',
                description: 'Both guests and members can view their purchase receipts for record-keeping.'
            },   
            {
                feature: 'Purchase History',
                short:'View Past Purchases',
                description: 'Members can access a history of all their purchases.'
            },
        ]
    },
    'employee': {
        title: 'Employee Features',
        data: [
            {
                feature: 'Movie Management',
                short: 'CRUD Operations',
                description: 'Employees can add, delete, update, activate, and inactivate movies available for streaming.'
            },
            {
                feature: 'Showtime Management',
                short: 'Add Showtimes',
                description: 'Employees can efficiently add new showtimes for movies.'
            },
            {
                feature: 'Change Tracking',
                short: 'Track Modifications',
                description: 'Employees can view a log of changes they have made.'
            },
            {
                feature: 'Theater Auditoriums',
                short: 'View Auditorium Details',
                description: 'Employees can access information about different auditoriums in the theater.'
            },
            {
                feature: 'Ticket Information',
                short: 'View Ticket Details',
                description: 'Employees can view detailed information about purchased tickets.'
            },
        ]
    },
    additional: {
        title: 'Additional Features',
        data: [
            {
                feature: 'Pagination',
                description: 'Efficient pagination for movie listings allows users to browse through large datasets without overwhelming the interface.'
            },
            {
                feature: 'API Integration',
                description: 'Utilizes The Movie Database API to fetch up-to-date movie data, ensuring users have access to the latest information'
            },
            {
                feature: 'Unit Testing',
                description: 'Comprehensive unit tests have been implemented to verify the functionality of critical features and maintain code quality.'
            }
        ]
    }
}

export default data;