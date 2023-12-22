import React from 'react'

function Dashboard() {
    const bookslist=[
        {
            "title": "The Official Raspberry Pi Handbook 2023",         
            "authors": "David Crookes, PJ Evans, Rosie Hattersley, Phil King, Nicola King, KG Orphanides, Nik Rawlinson, Mark Vanstone",
            "publication_year": 1978,
            "genre": "Comedy",
        },
        {
            "title": "Pay for Play",            
            "authors": "Larry Wayte",
            "publication_year": 1965,
            "genre": "Fiction",
        },
        {
            "title": "Azure Bot Service Succinctly",
            "authors": "Ed Freitas",
            "publication_year": 1995,
            "genre": "Thriller",
        },
        {
            "title": "Introductory Algebra",
            "authors": "Anne Gloag, Andrew Gloag, Melissa Kramer",
            "publication_year": 1987,
            "genre": "Comedy",
        },
        {
           "title": "Managing Cloud Native Data on Kubernetes",
            "authors": "Jeff Carpenter, Patrick McFadin",
            "publication_year": 1979,
            "genre": "Novel",
        },
        {
            "id": "1912047446",
            "title": "An Introduction to C &amp; GUI Programming",
            "authors": "Simon Long",
            "publication_year": 2005,
            "genre": "Comedy",
        },
        {
            "id": "1711470546",
            "title": "Contemporary Mathematics",
            "authors": "Donna Kirk",
            "publication_year": 2008,
            "genre": "Poetry",
        },
        {
            "id": "1805110195",
            "title": "The Last Man Who Knew Everything",
            "authors": "Andrew Robinson",
            "publication_year": 1990,
            "genre": "Comedy",
        },
        {
            "id": "5685527822",
            "title": "HackSpace Magazine: Issue 65",
            "authors": "HackSpace Team",
            "publication_year": 2010,
            "genre": "Thriller",
        },
        {
            "id": "5685535457",
            "title": "Intro to Social Media",
            "authors": "Cheryl Lawson",
            "publication_year": 2000,
            "genre": "Comedy",
        },
        {
            "id": "5679752518",
            "title": "HackSpace magazine: Issue 64",
            "authors": "HackSpace Team",
            "publication_year": 1990,
            "genre": "Comedy",
        },
        {
            "id": "5679742652",
            "title": "Introduction to Mechanical Engineering Design",
            "authors": "Jacqulyn A. Baughman",
            "publication_year": 2013,
            "genre": "Novel",
        },
        {
            "id": "1642002305",
            "title": "Svelte Succinctly",
            "authors": "Ed Freitas",
            "publication_year": 1980,
            "genre": "Comedy",
        },
        {
            "id": "1800644124",
            "title": "Introduction to Systems Biology",
            "authors": "Thomas Sauter, Marco Albrecht",
            "publication_year": 1976,
            "genre": "Fiction",
        },
        {
            "id": "111954601X",
            "title": "Blockchain For Dummies",
            "authors": "Manav Gupta",
            "publication_year": 1992,
            "genre": "Fiction",
        },
        {
            "id": "1642002283",
            "title": "ASP.NET Core APIs Succinctly",
            "authors": "Dirk Strauss",
            "publication_year": 1978,
            "genre": "Drama",
        },
        {
            "id": "9463666656",
            "title": "Numerical Methods for Ordinary Differential Equations",
            "authors": "Kees Vuik, Fred Vermolen, Martin van Gijzen",
            "publication_year": 1978,
            "genre": "Essay",
        },
        {
            "id": "1492095176",
            "title": "A Practical Guide to Cloud Migration",
            "authors": "Kieran Broadfoot",
            "publication_year": 1978,
            "genre": "Drama",
        },
        {
            "id": "1800648723",
            "title": "The European Experience",
            "authors": "Jan Hansen, Jochen Hung, Jaroslav Ira, Judit Klement, Sylvain Lesage, Juan Luis Simal, Andrew Tompkins",
            "publication_year": 1978,
            "genre": "Essay",
        },
        {
            "id": "5676984863",
            "title": "HackSpace Magazine: Issue 63",
            "authors": "HackSpace Team",
            "publication_year": 1978,
            "genre": "Short Story",
        }
    ]

    
  return (
    <div>       
            <table>
                <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>Publication Year</th>
                    <th>Genre</th>
                </tr>
                {bookslist.map(book=>
                <tr>
                    <td>{book.title}</td>
                    <td>{book.authors}</td>
                    <td>{book.publication_year}</td>
                    <td>{book.genre}</td>

                </tr>
)}
            </table>
           
        
    
    
    
    </div>
  )
}

export default Dashboard