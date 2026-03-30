import React from 'react'

const Images = (props) => {
    return (
        <div>
            <a href={props.elem.url} target="_blank">
                <div className='h-40 w-44 rounded-2xl overflow-hidden'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" loading="lazy" />
                </div>
                <h4 className='flex justify-center font-bold text-lg'>{props.elem.author}</h4>
            </a>
        </div>
    )
}

export default Images