import React from 'react'

export default function Carousel({data, path}){
    const id = React.useId()
    
    const gifs = data.map((datum, i) => <img key={`${id}-gif-${i}`} src={`${process.env.PUBLIC_URL}/gifs/${path}${datum.gif}`} title={datum.title} />)

    const [index, setIndex] = React.useState(0)
    const [fade, setFade] = React.useState(false)

    function incrementCurrent (){
        setFade(true)
        setTimeout(() => {
            setFade(false);
            setIndex(prevIndex => prevIndex + 1);
        }, 500);

    }
    function decrementCurrent (){
        setFade(true)
        setTimeout(() => {
            setFade(false);
            setIndex(prevIndex => prevIndex - 1)
        }, 500);
    }
    function handleTab(newIndex){
        setFade(true)
        setTimeout(() => {
            setFade(false);
            setIndex(newIndex);
        }, 500);
    }

    return (
        <div>
            <div className={`carousel {data.length == 1 && mb-2 }`}>
                {
                    index > 0 ? 
                    <button onClick={decrementCurrent}>&lt;</button> : 
                    <button disabled aria-disabled="true">&lt;</button>
                }
                <div className={`fade-item ${fade ? 'fade' : ''}`}>
                    <h3 className='fw-500'>{data[index].title}</h3>
                    {data[index].description && <p>{data[index].description}</p>}
                    <br />
                    <div >
                        {gifs[index]}
                    </div>
                </div>
                {
                    index < (data.length - 1)?
                    <button onClick={incrementCurrent}>&gt;</button>:
                    <button disabled aria-disabled="true">&gt;</button>
                }
            </div>
            { data.length > 1 &&
                <div>
                    <div className='indicators' role='tablist' aria-label="Carousel slides">
                        {data.map((_, i) => (
                            <button key={`${id}-indicator-${i}`} role="tab" aria-controls={`tab-${i + 1}`}
                            aria-selected={i === index} aria-label={`tab ${i + 1}`}
                            onClick={() => handleTab(i)}></button>))}
                    </div>
                </div>
            }
        </div>
    )
} 
