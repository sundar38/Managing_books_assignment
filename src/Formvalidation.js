import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
function Formvalidation({books, setBooks}) {
  return (
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
  )
}

export default Formvalidation