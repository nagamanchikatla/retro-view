import React from 'react';
import FeedbackTable from "./FeedbackTable";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function RetroTable({retros}) {
  if(retros.length === 0) {
return(<div> No Data to Display</div>)
  } else {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Retrospective Name</TableCell>
            <TableCell>Retrospective Summary</TableCell>
            <TableCell>Retrospective Date</TableCell>
            <TableCell>Participant Names</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {retros.map((row) => (
            <TableRow key={`r${row.id}`}>
              <TableCell>{row.rName}</TableCell>
              <TableCell>{row.summary}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.pName.join(', ')}</TableCell>
              <TableCell>{
              (row.fdback === [])? "No Feedback" : <FeedbackTable feedback={row.fdback}></FeedbackTable>
              }</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}

export default RetroTable;