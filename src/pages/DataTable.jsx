import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system'; 

const StyledTableCell = styled(TableCell)(({ theme, isHeader, isGreen, isRed, isYellow, isBlack, isOrange, isCyan }) => ({
  borderBottom: '1px solid black', 
  '&:not(:last-child)': {
    borderRight: '1px solid black', 
  },
  backgroundColor: isHeader
    ? '#2196F3'
    : isGreen
    ? 'green'
    : isRed
    ? 'red'
    : isYellow
    ? 'pink'
    : isBlack
    ? 'lightseagreen'
    : isOrange 
    ? 'lightcoral'
    : isCyan 
    ? 'cyan'
    : 'transparent',
  color: isHeader || isGreen || isRed || isYellow || isBlack ? 'white' : 'inherit',
}));


const DataTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell isHeader>Employee Name</StyledTableCell>
            <StyledTableCell isHeader>Job Title</StyledTableCell>
            <StyledTableCell isHeader>Client</StyledTableCell>
            <StyledTableCell isHeader>Track</StyledTableCell>
            <StyledTableCell isHeader>January</StyledTableCell>
            <StyledTableCell isHeader>February</StyledTableCell>
            <StyledTableCell isHeader>March</StyledTableCell>
            <StyledTableCell isHeader>April</StyledTableCell>
            <StyledTableCell isHeader>May</StyledTableCell>
            <StyledTableCell isHeader>June</StyledTableCell>
            <StyledTableCell isHeader>July</StyledTableCell>
            <StyledTableCell isHeader>Auguest</StyledTableCell>
            <StyledTableCell isHeader>September</StyledTableCell>
            <StyledTableCell isHeader>October</StyledTableCell>
            <StyledTableCell isHeader>November</StyledTableCell>
            <StyledTableCell isHeader>December</StyledTableCell>
            <StyledTableCell isHeader>Engagement</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((row) => (
            row.data.map((item, index) => (
              <TableRow key={index}>
                {index === 0 ? (
                  <StyledTableCell rowSpan={row.data.length}>
                    {row.employeeName}
                  </StyledTableCell>
                ) : null} 
             <StyledTableCell
                  isOrange={item.jobTitle === "Sr.Software Engineer"} >
                  {item.jobTitle}
                </StyledTableCell>
                <StyledTableCell
                  isCyan={item.client === "liverPool"} >
                  {item.client}
                </StyledTableCell>
                <StyledTableCell>{item.track}</StyledTableCell>
                <StyledTableCell isGreen={item.months.January === 1}>{item.months.January}</StyledTableCell>
                <StyledTableCell isGreen={item.months.February === 1}>{item.months.February}</StyledTableCell>
                <StyledTableCell isGreen={item.months.March === 1}>{item.months.March}</StyledTableCell>
                <StyledTableCell isGreen={item.months.April === 1}>{item.months.April}</StyledTableCell>
                <StyledTableCell isGreen={item.months.May === 1}>{item.months.May}</StyledTableCell>
                <StyledTableCell isGreen={item.months.June === 1}>{item.months.June}</StyledTableCell>
                <StyledTableCell isGreen={item.months.July === 1}>{item.months.July}</StyledTableCell>
                <StyledTableCell isGreen={item.months.August === 1}>{item.months.August}</StyledTableCell>
                <StyledTableCell isGreen={item.months.September === 1}>{item.months.September}</StyledTableCell>
                <StyledTableCell isGreen={item.months.October === 1}>{item.months.October}</StyledTableCell>
                <StyledTableCell isGreen={item.months.November === 1}>{item.months.November}</StyledTableCell>
                <StyledTableCell isGreen={item.months.December === 1}>{item.months.December}</StyledTableCell>
                <StyledTableCell
                  isRed={item.engagement > 1 && item.engagement < 26}
                  isYellow={item.engagement > 26 && item.engagement < 51}
                  isBlack={item.engagement > 51}>
                  {item.engagement}
                </StyledTableCell>
        </TableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
