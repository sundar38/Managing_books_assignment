import React, { useState } from 'react'
import bookslist from './Bookslist'

import Formvalidation from './Formvalidation'
// import './style.scss';
function Dashboard() {

    const [books, setBooks]= useState(bookslist)  
    const [order,setOrder] = useState("ASC")
    const [search, setSearch]= useState("")
    const [form, setForm]= useState(false)
    const [view, setView]= useState(false) 

    
    function sorting(param){        
        if(order=="ASC"){           
            if(param=="publication_year"){
                var finaldata=[...books].sort((book1, book2)=> book1[param]< book2[param]? -1:1)
            }
            else{
            var finaldata=[...books].sort((book1, book2)=> book1[param].toLowerCase()< book2[param].toLowerCase()? -1:1)
            }
            setBooks(finaldata)
            setOrder("DSC")
        }      
        if(order=="DSC"){            
            if(param=="publication_year"){
                var finaldata=[...books].sort((book1, book2)=> book1[param]> book2[param]? -1:1)
            }
            else{
            var finaldata=[...books].sort((book1, book2)=> book1[param].toLowerCase()> book2[param].toLowerCase()? -1:1)
            }
            setBooks(finaldata)
            setOrder("ASC")
        }
        
    }
    function handlesearch(e){
        setSearch(e.target.value)
        const filteredlist=search?[...bookslist].filter(book=>book.title.toLowerCase().includes(search.toLowerCase())): bookslist
        console.log(filteredlist);
        setBooks(filteredlist)
    }
    
    function deletedata(index, id){
        alert("Are you sure you want to delete this book?")
        var finallist=books.filter(eachbook=>eachbook.id!==id )        
        setBooks(finallist)
    }
    
   
    // function viewdata(index, book){        
    //     console.log(book); 

    //     alert("This book `${book.title}` was written by {book.author} published in {book.pub_year} belongs to {book.genre}")
    // }
    
    
  return (
    <div>    
            <input type= "text" className='searching' placeholder='Search by Title' onChange={handlesearch}></input>   
            <button onClick={()=>setForm(true)}>Add book to the below list</button>

            {
                 form?                                    
                    <Formvalidation books={books} setBooks={setBooks}/>
                :
                <div></div>
            }
            <table>
                <thead>
                <tr>   
                    <th>Id</th>                
                    <th onClick={()=> sorting("title")}>Title</th>
                    <th onClick={()=> sorting("author")}>Author</th>
                    <th onClick={()=> sorting("publication_year")}>Publication Year</th>
                    <th onClick={()=> sorting("genre")}>Genre</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index)=>
                
                <tr key={index}> 
                    <td>{book.id}</td>                   
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publication_year}</td>
                    <td>{book.genre}</td>
                    <td><button onClick={()=>{ deletedata(index, book.id)}}>Delete</button></td>
                    {/* <td><button onClick={()=> setView(true)}>View</button></td>
                    {view?<h1>Hi</h1>:<></>} */}
                </tr>
                
                )}
                </tbody>

            </table>
            
           
        
    
    
    
    </div>
  )
}

export default Dashboard