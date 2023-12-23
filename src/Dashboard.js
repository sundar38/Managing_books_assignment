import React, { useState } from 'react'
import bookslist from './Bookslist'
import { Form, Formik, Field, ErrorMessage } from 'formik'
// import './style.scss';
function Dashboard() {

    const [books, setBooks]= useState(bookslist)  
    const [order,setOrder] = useState("ASC")
    const [search, setSearch]= useState("")
    const [form, setForm]= useState(false)
    const [view, setView]= useState(false)

    

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
                 <div>                   
                    <Formik
                        initialValues={{ title: '', author: '', pub_year:0, genre: "" }}
                        validate={values => {
                            const errors = {};
                            if (!values.title) {
                                errors.title = 'Title field is Required';
                            }
                            if(!values.author){
                                errors.author="Author field is Required";
                            }
                            if(!values.pub_year){
                                errors.pub_year="Publication year field is Required";
                            }
                            if(!values.genre){
                                errors.genre="Genre field is Required";
                            }
                            // } else if (
                            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            // ) {
                            //     errors.email = 'Invalid email address';
                            // }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {                        
                            let obj={            
                                "id": books.length+1, "title": values.title, "author": values.author, "publication_year": values.author, "genre": values.genre,
                            }
                            console.log(obj);
                            var bookslistafteradd=[...books, obj]
                            setBooks(bookslistafteradd)
                            values.title=""
                            values.author=""
                            values.genre=""
                            values.pub_year=0
                        }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="text" name="title" placeholder="Enter the title of book" /> <br></br>
                            <ErrorMessage name="title" component="div" className="errormessage" />
                            <Field type="text" name="author" placeholder="Enter the author of book" /><br></br>
                            <ErrorMessage name="author" component="div" className="errormessage"/>
                            <Field type="number" name="pub_year" placeholder="Enter the publication year of book" /><br></br>
                            <ErrorMessage name="pub_year" component="div" className="errormessage" />
                            <Field type="text" name="genre" placeholder="Enter the genre of book" /><br></br>
                            <ErrorMessage name="genre" component="div" className="errormessage" />
                            <button type="submit" >
                                Submit
                            </button>
                        </Form>
                    )}
                    </Formik>
                </div>
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