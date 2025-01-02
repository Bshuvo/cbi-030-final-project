import React, { useState } from 'react'
import Booklist from './components/booklist/Booklist'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


const App = () => {
  

  const[book,setBook] = useState("");
   
    const bookname = ()=>{

        console.log(book)

        setBook("");
    }
  





  return (
    
    <div>
      <Navbar book={book} setBook={setBook}  />
      <Booklist book={book}  />
      <Outlet></Outlet>
    

    </div>
  )
}

export default App