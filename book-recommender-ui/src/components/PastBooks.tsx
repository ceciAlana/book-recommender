import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CardContent } from "@mui/material";

const createData = (title: string, genre: string, author: string) => {
  return { title, genre, author };
};

const rows = [
  createData("Past Book", "Comedy", "Author 1"),
  createData("Another Past Book", "Self Help", "Author 2"),
];

export default function PastBooksList() {
  return (
    <React.Fragment>
      <CardContent>
        <TableContainer component={Table}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Book Title </TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right"> Genre </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">{row.genre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </React.Fragment>
  );
}
