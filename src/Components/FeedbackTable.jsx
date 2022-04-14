import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function FeedbackTable({ feedback }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feedback Provided By</TableCell>
            <TableCell>Feedback Body</TableCell>
            <TableCell>Feedback Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedback.map((fb) => (
            <TableRow key={`f${fb.id}`}>
              <TableCell>{fb.pName}</TableCell>
              <TableCell>{fb.body}</TableCell>
              <TableCell>{fb.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FeedbackTable;
