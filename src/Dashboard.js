import React, { useState } from 'react'
import bookslist from './Bookslist'
function Dashboard() {
    const [books, setBooks]= useState(bookslist)  
    const [order,setOrder] = useState("ASC")
    const [search, setSearch]= useState("")
    const [form, setForm]= useState(false)
    const [bookdetails, setBookdetails] = useState({
        title: "",
        author: "",
        pub_year:0 ,
        genre: ""
      })
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
    var dupbooklist=bookslist
    function deletedata(index, id){
        console.log(index)
        console.log("id is", id)
        var finallist=dupbooklist.filter(eachbook=>eachbook.id!==id )
        dupbooklist=finallist
        setBooks(finallist)
    }
    const handleChange = e => {
        setBookdetails({
          ...bookdetails,
          [e.target.name]: e.target.value,
        })
      }
    function addformdata(){      
        
        let obj={            
                "id": bookslist.length+1, "title": bookdetails.title, "author": bookdetails.author, "publication_year": bookdetails.author, "genre": bookdetails.genre,
            }
        console.log(obj);
        var bookslistafteradd=[...books, obj]
        setBooks(bookslistafteradd)
    }
    
    
  return (
    <div>    
            <input type= "text" className='searching' placeholder='Search by Title' onChange={handlesearch}></input>   
            <button onClick={()=>setForm(true)}>Add book to the below list</button>

            {
                form?<div>
                    <input type='text' placeholder='Enter the title of book'name='title' value={bookdetails.title} onChange={handleChange}></input>
                    <input type='text' placeholder='Enter the Author of book'name='author' value={bookdetails.author} onChange={handleChange}></input>
                    <input type='number' placeholder='Enter the Publication Year' name='pub_year' value={bookdetails.pub_year} onChange={handleChange}></input>
                    <input type='text' placeholder='Enter the Genre of book' name='genre' value={bookdetails.genre}  onChange={handleChange}></input>
                    <button onClick={addformdata}>Submit</button>
                </div>:
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
                </tr>
                
                )}
                </tbody>

            </table>
           
        
    
    
    
    </div>
  )
}

export default Dashboard