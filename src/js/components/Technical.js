import React from 'react'
import technical_data from '../technical_data'

export default function Technical (){
    const id = React.useId()

    function unit(section) {
        return (
            <div>
                <h3 className='text-center'>{section.title}</h3>

                { section.data.map((datum, i) => (
                    <div key={`${id}-${section.title}-${i}`}>
                        {datum.type && <p className='capitalize fw-600'>{datum.type}</p>}

                        <ul className='command-icon-list not-bold'>
                            {datum.items.map((item, j) => (
                                <li key={`${id}-${section.title}-${i}-${j}`}>
                                    {item.short && <span className='fw-500'>{item.short}: </span>}
                                    {item.description}
                                </li>)
                            )}
                        </ul>
                    </div>
                    )
                )}
            </div>   
        )
    }


    return (
        <section id='technical' className='grid-container'>
            <h2 className='fs-600 text-pink-outlined'>/Technical-Details</h2>

            <div className='unit'>
                {unit(technical_data.technologies)}
                {unit(technical_data.expertise)}
                {unit(technical_data.architecture)}
                {unit(technical_data.future)}
            </div>
        </section>
    )
}