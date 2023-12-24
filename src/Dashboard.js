import React, { useState, useContext, createContext } from 'react'
import bookslist from './Bookslist'
import Formvalidation from './Formvalidation'
import PaginationComp from './PaginationComp'
import UserContext from './UserContext'
import Modal from "./Modalview"
// import './style.scss';
function Dashboard() {
    const [books, setBooks]= useState(bookslist) 
    const [paginatedbooks, setPaginatedbooks]= useState(books.slice(0,10)) 
    const [order,setOrder] = useState("ASC")
    const [search, setSearch]= useState("")
    const [form, setForm]= useState(false)
    const [editid, setEditid]= useState()
    const [page, setPage] = useState(1);
    const [uptitle,setUptitle]= useState("")
    const [upauthor, setUpauthor]= useState("")
    const [uppubliyear, setUppubliyear]= useState(0)
    const [upgenre, setUpgenre]= useState("")
    const handlePageChange = (event,value) => {        
        setPage(value);
        var initialvalue=(value-1)*10       
        setPaginatedbooks(books.slice(initialvalue, initialvalue+10))
    };    
    function sorting(param){  
        console.log(param);      
        if(order=="ASC"){         
            if(param=="publication_year"){
                var finaldata=[...paginatedbooks].sort((book1, book2)=> book1[param]< book2[param]? -1:1)
            }
            else if(param=="id"){
                var finaldata=[...paginatedbooks].sort()
            }
            else{
            var finaldata=[...paginatedbooks].sort((book1, book2)=> book1[param].toLowerCase()< book2[param].toLowerCase()? -1:1)
            }
            setPaginatedbooks(finaldata)
            setOrder("DSC")
        }      
        if(order=="DSC"){            
            if(param=="publication_year"){
                var finaldata=[...paginatedbooks].sort((book1, book2)=> book1[param]> book2[param]? -1:1)
            }
            else if(param=="id"){
                var finaldata=[...paginatedbooks].sort()
            }
            else{
            var finaldata=[...paginatedbooks].sort((book1, book2)=> book1[param].toLowerCase()> book2[param].toLowerCase()? -1:1)
            }
            setPaginatedbooks(finaldata)
            setOrder("ASC")
        }
        
    }
    function handlesearch(e){
        setSearch(e.target.value)
        const filteredlist=search?[...books].filter(book=>book.title.toLowerCase().includes(search.toLowerCase())): paginatedbooks
        console.log(filteredlist);
        setPaginatedbooks(filteredlist)
    }
    
    function deletedata(index, id){
        alert("Are you sure you want to delete this book?")
        var finallist=paginatedbooks.filter(eachbook=>eachbook.id!==id )        
        setPaginatedbooks(finallist)
    }
    function editbookdata(id){
        setEditid(id)
    }
    function updatebook(id){
        const reqbook=paginatedbooks.find(eachbook=> eachbook.id==id)
        reqbook.title= uptitle
        reqbook.author=upauthor
        reqbook.publication_year=uppubliyear
        reqbook.genre=upgenre
        const filteredbooks= paginatedbooks.filter(eachbook=> eachbook.id!= id)
         const finalbooklist= [...filteredbooks, reqbook]
        setPaginatedbooks(finalbooklist)
        setEditid()
        sorting("id")
        setUptitle("")
        setUpauthor("")
        setUppubliyear("")
        setUpgenre("")
    }

    
    
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
                {paginatedbooks.map((book, index)=>
                   book.id== editid?<tr key={index}>
                    <td>{book.id}</td>                   
                    <td><input type='text' value={uptitle} onChange={e=> setUptitle(e.target.value)}/></td>
                    <td><input type='text' value={upauthor} onChange={e=> setUpauthor(e.target.value)}/></td>
                    <td><input type='text' value={uppubliyear} onChange={e=> setUppubliyear(e.target.value)}/></td>
                    <td><input type='text' value={upgenre} onChange={e=> setUpgenre(e.target.value)}/></td>
                    <td><button onClick={()=> updatebook(book.id)}>Update</button></td>
                   </tr>:
                
                <tr key={index}> 
                    <td>{book.id}</td>                   
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publication_year}</td>
                    <td>{book.genre}</td>
                    <td><button onClick={()=>{ deletedata(index, book.id)}}>Delete</button></td>
                    <td><button onClick={(value)=> editbookdata(book.id)}>Edit</button></td>
                   
                   
                    
                </tr>
               
                )}
                </tbody>

            </table>
            <UserContext.Provider value={page}>
                <PaginationComp handlePageChange={(event, value)=>handlePageChange(event, value)}/>
            </UserContext.Provider>
           
        
    
    
    
    </div>
  )
}

export default Dashboard
