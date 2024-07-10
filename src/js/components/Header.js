import React from 'react'

export default function Header(){
    React.useEffect(() => {
        function handleSmoothScroll(e) {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();

                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                const headerHeight = document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                });
            }
        }
        document.addEventListener('click', handleSmoothScroll);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, []);

    return(
        <header className='header'>
            <nav>
                <ul className='navigation flex'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#demo'>Demo</a></li>
                </ul>
            </nav>
        </header>
    )
}

