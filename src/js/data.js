const data = {
    employee: [
        {
            gif: '/all-movies.gif',
            title: 'Employee views all movies',
            
            description: ''
        },
        {
            gif: '/add-princess-mononoke.gif',
            title: 'Employee adds Princess Mononoke',
            
            description: ''
        },
        {
            gif: '/details-princess-mononoke.gif',
            title: 'Employee views Princess Mononoke details page and decides update movie data',
            description: `The employee can choose from all available movie posters, backdrops, and trailers. 
            To update the available posters, backdrops, and trailers, the employee must fetch new data by 
            adding the movie again.`
        },
        {
            gif: '/update-princess-mononoke.gif',
            title: 'Employee updates Princess Mononoke\s poster, backdrop, and trailer',
            
            description: ''
        },
        {
            gif: '/activate-princess-mononoke.gif',
            title: 'Employee activates Princess Mononoke',
            
            description: `Activated movies will become available to guests and members. 
            Movies without a poster, backdrop, trailer, runtime, or release date cannot be activated.`
        },
        {
            gif: '/inactivate-castle-sky.gif',
            title: 'Employee inactivates Castle in the Sky',
            
            description: 'Movies with upcoming showtimes cannot be inactivated.'
        },
        {
            gif: '/add-coming-soon.gif',
            title: 'Employee adds an unreleased movie',
            
            description: 'Unreleased movies could be activated.'
        },
        {
            gif: '/showtime-princess-mononoke.gif',
            title: 'Employee adds a showtime for Princess Mononoke',
            
            description: 'Employees can only add showtimes to activated movies.'
        },
        {
            gif: '/tickets-princess-mononoke.gif',
            title: 'Employee views ticket/seat information for a Princess Mononoke showtime',
            
        },
        {
            gif: '/order-details.gif',
            title: 'Employee views purchase details',

            description: `Employees can view purchase information, which indicates whether the 
            purchase was made by a guest or a member.`
        },
        {
            gif: '/delete-arrietty.gif',
            title: 'Employee deletes The Secret World of Arrietty',
            
            description: 'Employees can only delete movies with no upcoming showtimes. '
        },
        {
            gif: '/changes.gif',
            title: 'Employee views their changes',
            description: ''
        },
        {
            gif: '/auditoriums.gif',
            title: 'Employee views auditoriums',
            
            description: ''
        },
        {
            gif: '/register.gif',
            title: 'Employee registers',
            
            description: ''
        },
        {
            gif: '/login.gif',
            title: 'Employee logs in',
            
            description: ''
        }
    ],
    guest: [
        {
            gif: '/home.gif',
            title: 'Home page',  
            description: ''
        },
        {
            gif: '/ticket-seat-map.gif',
            title: 'Guest selects a showtime',
            description: 'Guests can only book tickets for upcoming showtimes. '
        },
        {
            gif: '/selecting-seats.gif',
            title: 'Guest selects seats',
            description: ''
        },
        {
            gif: '/checkout.gif',
            title: 'Guest checks out and views receipt',
            description: 'Guests can choose to login before completing their purchase.'
        },
    ],
    member: [
        {
            gif: '/profile.gif',
            title: 'Member profile',           
            description: 'Members can view their personal information and make changes. They can view their purchase history and current watchlist.'
        },
        {
            gif: '/add-watchlist.gif',
            title: 'Guest is asked to login before adding movie to their watchlist',           
            description: ''
        },
        {
            gif: '/add-watchlist-2.gif',
            title: 'Different ways a member can add a movie to their watchlist',
            description: ''
        },
        {
            gif: '/add-cc.gif',
            title: 'Member adds default payment method',
            description: <small>Note: The credit card numbers used are taken from PayPal's card testing data. 
                Once a credit card number is submitted, any subsequent submissions using the same card number 
                must have the identical expiration date, CVV, and ZIP code; otherwise, it will be considered 
                an invalid entry.</small>
        },
        {
            gif: '/checkout-saved-cc.gif',
            title: 'Member checks out with a saved credit card and a receipt is generated',
            description: ''
        },
        {
            gif: '/delete-cc.gif',
            title: 'Member deletes saved payment method',
            description: ''
        },
        {
            gif: '/checkout-save-cc.gif',
            title: 'Member checks out and saves the credit card as their default payment method',
            description: ''
        },
        {
            gif: '/purchases.gif',
            title: 'Member views purchases',
            
            description: ''
        },
        {
            gif: '/edit-personal-info.gif',
            title: 'Member makes changes to their personal information',
            
            description: ''
        },
        {
            gif: '/change-email.gif',
            title: 'Member changes their email',
            
            description: ''
        },
        {
            gif: '/change-password.gif',
            title: 'Member changes their password',
            
            description: ''
        },
        {
            gif: '/register.gif',
            title: 'Member registers',
            
            description: ''
        },
        {
            gif: '/login.gif',
            title: 'Member logs in',
            
            description: ''
        },
    ],
    tests: [
        {
            gif: '/tests.gif',
            title: 'Results after running pytest',
            description: 'These unit tests cover the main functionalities of the project.'
        }
    ]
}

export default data;
