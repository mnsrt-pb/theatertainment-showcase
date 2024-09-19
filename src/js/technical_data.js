const data = {
    technologies: {
        title: 'Technologoies Used',
        data: [
            {   
                type: 'languages', 
                items: [{description: 'Python'}, {description: 'Javascipt'}]
            },
            {   
                type: 'frameworks', 
                items: [{description: 'Flask'}, {description: 'Bootstrap'}]
            },
            {   
                type: 'testing', 
                items: [{description: 'Pytest'}]
            },
            {
                type: 'database', 
                items: [{description: 'SQL (SQLAlchemy for ORM)'}]
            },
            {   
                type: 'APIs', 
                items: [{description: 'The Movie Database API'}, {description: 'tmdbsimple (Python wrapper for The Movie Database API)'}]
            },
            
        ]
    },
    expertise: {
        title: 'Technical Expertise',
        data: [
            {
                type: 'Backend Development', 
                items: [
                            {
                                short: 'Python Packages',
                                description: 'Organized the backend into modular packages for better maintainability and scalability.'
                            },
                            { 
                                short: 'SQL Models',
                                description: 'Designed and implemented SQL models to manage data efficiently.'
                            },
                            {
                                short: 'Blueprints',
                                description: 'Utilized Flask blueprints to separate different parts of the application logically.'
                            },
                    ]
            },
            {   
                type: 'Frontend Development', 
                items: [
                            {
                                short: 'Bootstrap',
                                description: 'Used Bootstrap to create a responsive and user-friendly interface.'
                            }, 
                            // {
                            //     short: 'React (Future Plans)',
                            //     description: 'Planning to implement a responsive and dynamic front-end using React to improve user interaction.'
                            // }, 
                        ]
            },
            {   
                type: 'Data Handling', 
                items: [
                            {
                                short: 'API Integration',
                                description: 'Integrated The Movie Database API to fetch up-to-date movie information.'
                            },
                            {
                                short: 'Data Fetching Optimization',
                                description: 'Improved data retrieval efficiency by switching from direct API calls to using tmdbsimple.'
                            },
                        ]
            },
            {
                type: 'Testing and Quality Assurance',
                items: [{
                            short: 'Unit Testing',
                            description: 'Developed a suite of unit tests to validate application logic and ensure reliability, enhancing code quality and robustness.'
                        }]
            }
        ]
    },
    architecture: {
        title: 'Architecture Overview',
        data: [
                {
                    items: [
                                {
                                    short: 'Client-Server Architecture',
                                    description: 'The application follows a client-server model where the frontend communicates with the Flask backend to manage data and user requests.'
                                },
                                {
                                    short: 'Database Management',
                                    description: 'Uses SQLAlchemy to handle database operations, allowing for easy queries and data manipulation.'
                                }
                            ]   
                }
            ]
        },
    future: {
        title: 'Future Enhancements',
        data: [
                {
                    items: [{
                            short: 'React Frontend',
                            description: 'Transitioning to a React-based frontend to create a more interactive user experience, including real-time updates and improved state management.'
                        }]
                }
        ]
    }
}

export default data;