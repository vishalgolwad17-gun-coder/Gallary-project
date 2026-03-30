import React from 'react'

const Buttons = (props) => {
    return (
        <div className='fixed bottom-0 left-0 w-full flex justify-center items-center gap-3 sm:gap-6 p-4 sm:p-6 bg-black/70 backdrop-blur-md border-t border-gray-800 z-50'>
            <button
                style={{ opacity: props.page == 1 ? 0.3 : 1 }}
                disabled={props.page == 1}
                onClick={() => {
                    if (props.page > 1) {
                        props.setpage(props.page - 1)
                        props.setuserdata([])
                    }
                }} className='bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)] active:scale-95'>Previous</button>
            <h1 className='flex items-center text-sm sm:text-lg font-semibold text-gray-200 tracking-wider'>Page {props.page}</h1>
            <button
                onClick={() => {
                    props.setuserdata([])
                    props.setpage(props.page + 1)

                }} className='bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.3)] active:scale-95'>Next</button>
        </div>
    )
}

export default Buttons
