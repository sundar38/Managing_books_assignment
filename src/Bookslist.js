const bookslist=[
    { 
        "id": 1, "title": "The Official Raspberry Pi Handbook 2023", "author": "David Crookes", "publication_year": 1978,"genre": "Comedy",
    },
    {
        "id": 2, "title": "Pay for Play", "author": "Larry Wayte", "publication_year": 1965, "genre": "Fiction",
    },
    {
        "id": 3, "title": "Azure Bot Service Succinctly", "author": "Ed Freitas", "publication_year": 1995, "genre": "Thriller",
    },
    {
        "id": 4, "title": "Introductory Algebra", "author": "Anne Gloag", "publication_year": 1987, "genre": "Comedy",
    },
    {
        "id": 5, "title": "Managing Cloud Native Data on Kubernetes", "author": "Jeff Carpenter", "publication_year": 1979, "genre": "Novel",
    },
    {
        "id": 6, "title": "An Introduction to C &amp; GUI Programming", "author": "Simon Long", "publication_year": 2005, "genre": "Comedy",
    },
    {
        "id": 7, "title": "Contemporary Mathematics", "author": "Donna Kirk", "publication_year": 2008, "genre": "Poetry",
    },
    {
        "id": 8, "title": "The Last Man Who Knew Everything", "author": "Andrew Robinson", "publication_year": 1990, "genre": "Comedy",
    },
    {
        "id": 9, "title": "HackSpace Magazine: Issue 65", "author": "HackSpace Team", "publication_year": 2010, "genre": "Thriller",
    },
    {
        "id":10, "title": "Intro to Social Media", "author": "Cheryl Lawson", "publication_year": 2000, "genre": "Comedy",
    },
    {
        "id": 11, "title": "HackSpace magazine: Issue 64", "author": "HackSpace Team", "publication_year": 1990, "genre": "Comedy",
    },
    {
        "id": 12, "title": "Introduction to Mechanical Engineering Design", "author": "Jacqulyn A. Baughman", "publication_year": 2013, "genre": "Novel",
    },
    {
        "id": 13, "title": "Svelte Succinctly", "author": "Ed Freitas", "publication_year": 1980, "genre": "Comedy",
    },
    {
        "id": 14, "title": "Introduction to Systems Biology", "author": "Thomas Sauter", "publication_year": 1976, "genre": "Fiction",
    },
    {
        "id": 15, "title": "Blockchain For Dummies", "author": "Manav Gupta", "publication_year": 1992, "genre": "Fiction",
    },
    {
        "id": 16, "title": "ASP.NET Core APIs Succinctly", "author": "Dirk Strauss", "publication_year": 1978, "genre": "Drama",
    },
    {
        "id": 17, "title": "Numerical Methods for Ordinary Differential Equations", "author": "Kees Vuik", "publication_year": 1978, "genre": "Essay",
    },
    {
        "id": 18, "title": "A Practical Guide to Cloud Migration", "author": "Kieran Broadfoot", "publication_year": 1978, "genre": "Drama",
    },
    {
        "id": 19, "title": "The European Experience", "author": "Jan Hansen, Jochen Hung,", "publication_year": 1978, "genre": "Essay",
    },
    {
        "id": 20, "title": "HackSpace Magazine: Issue 63", "author": "HackSpace Team", "publication_year": 1978, "genre": "Short Story",
    },
    {
        "id": 21, "title": "HackSpace magazine: Issue 64", "author": "HackSpace Team", "publication_year": 1990, "genre": "Comedy",
    },
    {
        "id": 22, "title": "Introduction to Mechanical Engineering Design", "author": "Jacqulyn A. Baughman", "publication_year": 2013, "genre": "Novel",
    },
    {
        "id": 23, "title": "Svelte Succinctly", "author": "Ed Freitas", "publication_year": 1980, "genre": "Comedy",
    },
    {
        "id": 24, "title": "Introduction to Systems Biology", "author": "Thomas Sauter", "publication_year": 1976, "genre": "Fiction",
    },
    {
        "id": 25, "title": "Blockchain For Dummies", "author": "Manav Gupta", "publication_year": 1992, "genre": "Fiction",
    },
    {
        "id": 26, "title": "ASP.NET Core APIs Succinctly", "author": "Dirk Strauss", "publication_year": 1978, "genre": "Drama",
    },
    {
        "id": 27, "title": "Numerical Methods for Ordinary Differential Equations", "author": "Kees Vuik", "publication_year": 1978, "genre": "Essay",
    },
    {
        "id": 28, "title": "A Practical Guide to Cloud Migration", "author": "Kieran Broadfoot", "publication_year": 1978, "genre": "Drama",
    },
    {
        "id": 29, "title": "The European Experience", "author": "Jan Hansen, Jochen Hung ", "publication_year": 1978, "genre": "Essay",
    },
    {
        "id": 30, "title": "HackSpace Magazine: Issue 63", "author": "HackSpace Team", "publication_year": 1978, "genre": "Short Story",
    },
    {
    
    "id": 31, "title": "Blockchain For Dummies", "author": "Manav Gupta", "publication_year": 1992, "genre": "Fiction",
},
{
    "id": 32, "title": "ASP.NET Core APIs Succinctly", "author": "Dirk Strauss", "publication_year": 1978, "genre": "Drama",
},
{
    "id": 33, "title": "Numerical Methods for Ordinary Differential Equations", "author": "Kees Vuik", "publication_year": 1978, "genre": "Essay",
},
{
    "id": 34, "title": "A Practical Guide to Cloud Migration", "author": "Kieran Broadfoot", "publication_year": 1978, "genre": "Drama",
},
{
    "id": 35, "title": "The European Experience", "author": "Jan Hansen, Jochen Hung,", "publication_year": 1978, "genre": "Essay",
},
{
    "id": 36, "title": "HackSpace Magazine: Issue 63", "author": "HackSpace Team", "publication_year": 1978, "genre": "Short Story",
},
{
    "id": 37, "title": "HackSpace magazine: Issue 64", "author": "HackSpace Team", "publication_year": 1990, "genre": "Comedy",
},
{
    "id": 38, "title": "Introduction to Mechanical Engineering Design", "author": "Jacqulyn A. Baughman", "publication_year": 2013, "genre": "Novel",
},
{
    "id": 39, "title": "Svelte Succinctly", "author": "Ed Freitas", "publication_year": 1980, "genre": "Comedy",
},
{
    "id": 40, "title": "Introduction to Systems Biology", "author": "Thomas Sauter", "publication_year": 1976, "genre": "Fiction",
},
{
    "id": 41, "title": "Blockchain For Dummies", "author": "Manav Gupta", "publication_year": 1992, "genre": "Fiction",
},
{ 
    "id": 42, "title": "The Official Raspberry Pi Handbook 2023", "author": "David Crookes", "publication_year": 1978,"genre": "Comedy",
},
{
    "id": 43, "title": "Pay for Play", "author": "Larry Wayte", "publication_year": 1965, "genre": "Fiction",
},
{
    "id": 44, "title": "Azure Bot Service Succinctly", "author": "Ed Freitas", "publication_year": 1995, "genre": "Thriller",
},
{
    "id": 45, "title": "Introductory Algebra", "author": "Anne Gloag", "publication_year": 1987, "genre": "Comedy",
},
{
    "id": 46, "title": "Managing Cloud Native Data on Kubernetes", "author": "Jeff Carpenter", "publication_year": 1979, "genre": "Novel",
},
{
    "id": 47, "title": "An Introduction to C &amp; GUI Programming", "author": "Simon Long", "publication_year": 2005, "genre": "Comedy",
},
{
    "id": 48, "title": "Contemporary Mathematics", "author": "Donna Kirk", "publication_year": 2008, "genre": "Poetry",
},
{
    "id": 49, "title": "The Last Man Who Knew Everything", "author": "Andrew Robinson", "publication_year": 1990, "genre": "Comedy",
},
{
    "id": 50, "title": "HackSpace Magazine: Issue 65", "author": "HackSpace Team", "publication_year": 2010, "genre": "Thriller",
},
    
{
    "id": 51, "title": "A Practical Guide to Cloud Migration", "author": "Kieran Broadfoot", "publication_year": 1978, "genre": "Drama",
},
{
    "id": 52, "title": "The European Experience", "author": "Jan Hansen, Jochen Hung ", "publication_year": 1978, "genre": "Essay",
},
{
    "id": 53, "title": "HackSpace Magazine: Issue 63", "author": "HackSpace Team", "publication_year": 1978, "genre": "Short Story",
},
{

"id": 54, "title": "Blockchain For Dummies", "author": "Manav Gupta", "publication_year": 1992, "genre": "Fiction",
},
{
"id": 55, "title": "ASP.NET Core APIs Succinctly", "author": "Dirk Strauss", "publication_year": 1978, "genre": "Drama",
},
{
"id": 56, "title": "Numerical Methods for Ordinary Differential Equations", "author": "Kees Vuik", "publication_year": 1978, "genre": "Essay",
},
{
"id": 57, "title": "A Practical Guide to Cloud Migration", "author": "Kieran Broadfoot", "publication_year": 1978, "genre": "Drama",
},
{
"id": 58, "title": "The European Experience", "author": "Jan Hansen, Jochen Hung,", "publication_year": 1978, "genre": "Essay",
},
{
"id": 59, "title": "HackSpace Magazine: Issue 63", "author": "HackSpace Team", "publication_year": 1978, "genre": "Short Story",
},
{
"id": 60, "title": "HackSpace magazine: Issue 64", "author": "HackSpace Team", "publication_year": 1990, "genre": "Comedy",
},
{
"id": 61, "title": "Introduction to Mechanical Engineering Design", "author": "Jacqulyn A. Baughman", "publication_year": 2013, "genre": "Novel",
},
{
"id": 62, "title": "Svelte Succinctly", "author": "Ed Freitas", "publication_year": 1980, "genre": "Comedy",
},
{
"id": 63, "title": "Introduction to Systems Biology", "author": "Thomas Sauter", "publication_year": 1976, "genre": "Fiction",
},
{
"id": 64, "title": "Blockchain For Dummies", "author": "Manav Gupta", "publication_year": 1992, "genre": "Fiction",
},
{ 
"id": 65, "title": "The Official Raspberry Pi Handbook 2023", "author": "David Crookes", "publication_year": 1978,"genre": "Comedy",
},
{
"id": 66, "title": "Pay for Play", "author": "Larry Wayte", "publication_year": 1965, "genre": "Fiction",
},
{
"id": 67, "title": "Azure Bot Service Succinctly", "author": "Ed Freitas", "publication_year": 1995, "genre": "Thriller",
},
{
"id": 68, "title": "Introductory Algebra", "author": "Anne Gloag", "publication_year": 1987, "genre": "Comedy",
},
{
"id": 69, "title": "Managing Cloud Native Data on Kubernetes", "author": "Jeff Carpenter", "publication_year": 1979, "genre": "Novel",
},
{
"id": 70, "title": "An Introduction to C &amp; GUI Programming", "author": "Simon Long", "publication_year": 2005, "genre": "Comedy",
},
{
"id": 71, "title": "Contemporary Mathematics", "author": "Donna Kirk", "publication_year": 2008, "genre": "Poetry",
},
{
"id": 72, "title": "The Last Man Who Knew Everything", "author": "Andrew Robinson", "publication_year": 1990, "genre": "Comedy",
},
{
"id": 73, "title": "HackSpace Magazine: Issue 65", "author": "HackSpace Team", "publication_year": 2010, "genre": "Thriller",
},
{ 
    "id":74, "title": "The Official Raspberry Pi Handbook 2023", "author": "David Crookes", "publication_year": 1978,"genre": "Comedy",
},
{
    "id": 75, "title": "Pay for Play", "author": "Larry Wayte", "publication_year": 1965, "genre": "Fiction",
},
{
    "id": 76, "title": "Azure Bot Service Succinctly", "author": "Ed Freitas", "publication_year": 1995, "genre": "Thriller",
},
{
    "id":77, "title": "Introductory Algebra", "author": "Anne Gloag", "publication_year": 1987, "genre": "Comedy",
},
{
    "id": 78, "title": "Managing Cloud Native Data on Kubernetes", "author": "Jeff Carpenter", "publication_year": 1979, "genre": "Novel",
},
{
    "id":79, "title": "An Introduction to C &amp; GUI Programming", "author": "Simon Long", "publication_year": 2005, "genre": "Comedy",
},
{
    "id": 80, "title": "Contemporary Mathematics", "author": "Donna Kirk", "publication_year": 2008, "genre": "Poetry",
},


]
export default bookslist