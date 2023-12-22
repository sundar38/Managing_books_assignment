import React, { useState } from 'react'
import bookslist from './Bookslist'
function Dashboard() {
    const [books, setBooks]= useState(bookslist)  
    const [order,setOrder] = useState("ASC")
    const [search, setSearch]= useState("")
    function sorting(param){        
        if(order=="ASC"){           
            if(param=="publication_year"){
                var finaldata=[...bookslist].sort((book1, book2)=> book1[param]< book2[param]? -1:1)
            }
            else{
            var finaldata=[...bookslist].sort((book1, book2)=> book1[param].toLowerCase()< book2[param].toLowerCase()? -1:1)
            }
            setBooks(finaldata)
            setOrder("DSC")
        }      
        if(order=="DSC"){            
            if(param=="publication_year"){
                var finaldata=[...bookslist].sort((book1, book2)=> book1[param]> book2[param]? -1:1)
            }
            else{
            var finaldata=[...bookslist].sort((book1, book2)=> book1[param].toLowerCase()> book2[param].toLowerCase()? -1:1)
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
    
  return (
    <div>    
            <input type= "text" className='searching' placeholder='Search by Title' onChange={
                // setSearch(e.target.value)
                // // const bookdata= [...bookslist].contains()
                // setBooks([...bookslist].filter(book=>search?book.title.includes(search):book))
                handlesearch
                }></input>   
            <table>
                <thead>
                <tr>                   
                    <th onClick={()=> sorting("title")}>Title</th>
                    <th onClick={()=> sorting("author")}>Author</th>
                    <th onClick={()=> sorting("publication_year")}>Publication Year</th>
                    <th onClick={()=> sorting("genre")}>Genre</th>
                </tr>
                </thead>
                <tbody>
                {books.map(book=>
               
                <tr key={book.id}>                    
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publication_year}</td>
                    <td>{book.genre}</td>

                </tr>
                )}
                </tbody>

            </table>
           
        
    
    
    
    </div>
  )
}

export default Dashboard