import React, { useEffect, useState } from 'react'

const App = () => {
  const[elements,setelements]=useState([]);
  const[search,setSearch]=useState('');
  async function getinfo(){
    const res= await fetch('https://api.punkapi.com/v2/beers');
    const data=await res.json();
    setelements(data);
  }
  useEffect(()=>{
    getinfo();
  },[])

  return (<>
  <div className='flex-col space-y-5  my-5 mx-[40%]  '>
    <div><h1 className='text-5xl font-bold'> Wines</h1></div>
    <div><input type="text" placeholder='Search Here' className='border-2 rounded-md px-2 py-1' onChange={(e)=>{setSearch(e.target.value)}}/></div>
  </div>
  
    <div className='flex flex-wrap space-x-3 space-y-3 mx-[10%] '>
     { elements.filter((item)=>{
      return search.toLowerCase()===''?item:item.name.toLowerCase().includes(search);
     }).map((item)=>(
      <div key={item.id} className='border-2 rounded-md border-black w-[18%] h-[300px]'>
        <div className='flex justify-center bg-gray-200 py-2 h-[55%]'><img src={item.image_url} className='h-[100%]' /></div>
        <h3>Name: {item.name}</h3>
        <p>{item.tagline}</p>
        <p>First Brewed :{item.first_brewed}</p>
      </div>
     ) )}
    </div>
    </>
  )
}

export default App