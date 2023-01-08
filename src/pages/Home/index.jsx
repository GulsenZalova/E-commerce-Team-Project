import React, { useContext } from 'react'
import { dataContext} from '../../contexts/ProductContext'

function Home() {
    let {data} = useContext(dataContext)
    console.log(data)
  
  return (
    <div>
      {/* salam nnn gg
      {data && data.map(item=>(
       <span>{item.id}</span> 
      ))} */}
    </div>
  )
}

export default Home
