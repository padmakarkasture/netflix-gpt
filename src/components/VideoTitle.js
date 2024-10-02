import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%]  px-36 absolute bg-gradient-to-t text-white from-black w-screen aspect-video' >
           
                <h1 className='text-6xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{overview}</p>

        
         
                <button className='bg-white text-lg text-black p-4 px-12 rounded-lg bg-opacity-80 hover:bg-opacity-50 '>Play</button>
                <button  className=' mx-2 bg-gray-500 text-lg text-white p-4 px-12 bg-opacity-50 rounded-lg'>More Info</button>
          

        </div>
    )
}

export default VideoTitle