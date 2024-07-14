import React from 'react'
import data from '../demo_data'
import Carousel from "./Carousel";

export default function Demo() {
    const [type, setType] = React.useState('guest')

    function handleTab (newType) {
        setType(newType);
    }

    return (
        <section id='demo' className='grid-container grid-container--demo'>
            <h2 className='fs-600 text-pink-outlined'>
                /Demo
            </h2>
            <div className='flex tab-list' role="tablist" aria-label="Demo list">
                <button aria-selected={type === 'guest'} role="tab" aria-controls="guest-tab" onClick={() => handleTab('guest')}>Guest</button>
                <button aria-selected={type === 'member'} role="tab" aria-controls="member-tab" onClick={() => handleTab('member')}>Member</button>
                <button aria-selected={type === 'employee'} role="tab" aria-controls="employee-tab" onClick={() => handleTab('employee')}>Employee</button>
                <button aria-selected={type === 'tests'} role="tab" aria-controls="tests-tab" onClick={() => handleTab('tests')}>Tests</button>
            </div>
            <div className='demo-content'>
                {
                    type === 'guest' && 
                    <div id='guest' className='gifs-container'>
                        <Carousel data={data.guest} path='guest'/>
                    </div>
                }
                {
                    type === 'member' && 
                    <div id='member' className='gifs-container'>
                        <Carousel data={data.member} path='member' />
                    </div>
                }
                {
                    type === 'employee' && 
                    <div id='employee' className='gifs-container'>
                        <Carousel data={data.employee} path='employee'/>
                    </div>
                }
                {
                    type === 'tests' && 
                    <div id='tests' className='gifs-container'>
                        <Carousel data={data.tests} path='' />
                    </div>
                }
            </div>

        </section>
    )
}
