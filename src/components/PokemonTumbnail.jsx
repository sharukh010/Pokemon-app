import React, { useState } from 'react'
import Description from './Description';
import PokemonInfo from './PokemonInfo';

const PokemonTumbnail = ({id,name,image,type,stats,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,bs4,bs5,bs6}) => {
    const style = `tumb-container ${type}`;
    const [show,setShow] = useState(false);
  return (
    <div className="bg-white m-2 flex flex-col justify-between rounded-lg h-64 w-64 p-0 shadow-xl">
        <div className="number w-10 h-7 p-2 flex justify-center items-center rounded-tl-lg text-white bg-blue-300 rounded-br-lg">
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name} className='h-32'/>
        <div className="bg-slate-500 pb-2 flex flex-col justify-center items-center gap-1 p-1  text-white rounded-b-lg">
            <h3>{name.toUpperCase()}</h3>
            <small>Type: {type.toUpperCase()}</small>
            <button className="pokeinfo bg-red-500 text-xs p-1 px-2 font-mono text-white rounded-md " onClick={()=>setShow(!show)}>
                {show===true?"Less":"More"}
            </button>
        </div>
            {show==true?<PokemonInfo name={name} image={image} stats={stats} show={show} setShow={setShow}
        />:<></>}
        
    </div>
  )
}

export default PokemonTumbnail
