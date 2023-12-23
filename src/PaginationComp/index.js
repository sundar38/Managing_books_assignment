import * as React from 'react';
import { useState } from 'react';
import "./style.css"
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationComp({page, handlePageChange}) { 
  return (
    <div className='paginationcomp'>
      <Typography>Page: {page}</Typography>
      <Pagination count={8} page={page} onChange={(event, value)=>handlePageChange(event,value)} />
    </div>
  );
}