import React from 'react'
import Button from './Button'

const Popup = ({setShow, children, title}) => {
    return (
        <div className='fixed inset-0 bg-white md:bg-black bg-opacity-80 flex md:items-center' onClick={() => setShow(false)}>
            <button onClick={() => setShow(false)} className='hidden md:block fixed top-4 right-4 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <div className='w-full'>
                <div className='bg-white md:max-w-2xl md:mx-auto mf:rounded-lg overflow-hidden' onClick={e => e.stopPropagation()}>
                    <div className='relative md:min-h-0 min-h-[40px]'>
                        <button onClick={() => setShow(false)} className='absolute top-4 left-8 md:hidden text-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        {!!title && (
                            <h2 className='py-4 text-center border-b'>{title}</h2>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup