import React, { useState } from 'react'



const Navbar = ({book,setBook}) => {
  



  return (
    <div className='flex justify-center mt-10 items-center'>
       <div>
       <input
       value={book}
       onChange={(e)=>{
        setBook(e.target.value);
       }}
       type="text" placeholder='Search Book' className=' mx-auto bg-lime-100 p-3 w-36 h-10 rounded-md'/>
       <button onClick={()=>{
    
        console.log(book);
       }} className='p-2 bg-blue-400 rounded-md flex mt-2 mx-auto'>Search</button>
       </div>

       
    </div>
  )
}

export default Navbar