import React from 'react'
import InfoTable from './InfoTable'
const PokemonInfo = ({name,image,stats,show,setShow}) => {
  return (
     <div className="absolute top-0 left-0 flex justify-center items-center p-0 h-full w-full ">
    <div className="fixed top-28  h-2/5 md:h-4/5 w-3/5 rounded-lg shadow-lg bg-blue-200 grid grid-cols-2 md:grid-rows-10 grid-rows-8">
        <div className=" w-full row-span-1 col-span-2 h-full flex justify-center items-center font-mono text-2xl" >
            <h1>{name.toUpperCase()}</h1>
            <div className='h-6 text-black absolute top-0 cursor-pointer right-0 text-xs bg-white rounded-tr-lg rounded-bl-lg shadow-md w-6 flex justify-center items-center ' onClick={()=>{
              setShow(!show);
            }}>X</div>
        </div>
        <div className="bg-slate-50 w-full h-full row-span-9 col-span-2 md:grid md:grid-cols-2 rounded-b-lg">
            <div className="bg-red-100 w-full h-full col-start-1 col-span-1 flex justify-center items-center 
            md:rounded-bl-lg">
                <img src={image} alt={name} className='md:h-3/5 h-4/5' />
            </div>
            <div className="bg-green-100 w-full h-full col-start-2 md:rounded-br-lg col-span-1 flex justify-center
            rounded-b-lg
            items-center">
                <InfoTable stats={stats}/>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default PokemonInfo
