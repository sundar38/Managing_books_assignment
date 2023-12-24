import * as React from 'react';
import { useContext } from 'react';
import "./style.css"
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import UserContext from '../UserContext';
export default function PaginationComp({ handlePageChange}) { 
  const page= useContext(UserContext)
  return (
    <div className='paginationcomp'>
      <Typography>Page: {page}</Typography>
      <Pagination count={8} page={page} onChange={(event, value)=>handlePageChange(event,value)} />
    </div>
  );
}