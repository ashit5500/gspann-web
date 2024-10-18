import {
    Box,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  
  const ProjectListing = () => {
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalDocs, setTotalDocs] = useState(0);
    const rowsPerPage = 5;
  
    useEffect(() => {
      getData()
    }, [currentPage]);
  
    const getData = async () => {
      await fetch(`https://dummyjson.com/products?limit=${rowsPerPage}&skip=${currentPage}`)
        .then((res) => res.json())
        .then((data) => {
          setRows(data.products)
          setTotalDocs(data.total)
        });
    };
  
    return (
      <div>
        <div
          style={{
            padding: '1rem 0rem',
            background: '#fff',
            margin: '-0.5rem 1rem',
          }}
        >
          {/* Table Component */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>SKU</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Brand</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Rating</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <img
                        src={row.thumbnail}
                        alt={row.title}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.sku}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.brand}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  
          {/* Centered Pagination */}
          <Box mt={3} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(totalDocs / rowsPerPage)}
              page={currentPage}
              onChange={(e, page) => setCurrentPage(page)}
              color="primary"
            />
          </Box>
        </div>
      </div>
    );
  };
  
  export default ProjectListing;
  