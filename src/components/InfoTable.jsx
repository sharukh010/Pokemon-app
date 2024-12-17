import React from 'react'
/*
stats-> array of stat -> name,url-> url consists of stats details
stats attributes:
1) hp
2) attack
3) defence
4) special attack
5) special defence
6) speed

*/
const InfoTable = ({stats}) => {
  const hp = stats[0]['base_stat']
  const attack = stats[1]['base_stat']
  const defence = stats[2]['base_stat']
  const special_attack = stats[3]['base_stat']
  const special_defence = stats[4]['base_stat']
  const speed = stats[5]['base_stat']
  return (
    <div className=' h-5/6 w-5/6 text-lg sm:text-xl'>
      <table className=" h-full w-full">
        <tbody className='font-mono text-wrap'>
        <tr >
          <td className='uppercase '>hp : </td>
          <td >{hp}</td>
        </tr>
        <tr>
          <td className="uppercase">attack : </td>
          <td>{attack}</td>
        </tr>
        <tr>
          <td className="uppercase">defence : </td>
          <td>{defence}</td>
        </tr>
        <tr>
          <td className="uppercase">special attack : </td>
          <td>{special_attack}</td>
        </tr>
        <tr>
          <td className="uppercase">special defence : </td>
          <td>{special_defence}</td>
        </tr>
        <tr>
          <td className="uppercase">speed : </td>
          <td>{speed}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InfoTable
