import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name: string, 
                    License: string, 
                    Date1: string, Date2: string, Date3: string,
                    Kod: string, Vid: string, Org: string) {
  return { name, License, Date1, Date2, Date3, Kod, Vid, Org };
}

const rows = [
  createData('1027700070518',
             'КРР 15946 НР',
             '07.12.2015', '07.12.2015', 'Бессрочная',
             '3474', 'Разведка и добыча полезных ископаемых', 'Департамент по недропользованию Центральному ФО'),
  createData('1027700070518',
             'КРР 15946 НР',
             '07.12.2015', '07.12.2015', 'Бессрочная',
             '3474', 'Разведка и добыча полезных ископаемых', 'Департамент по недропользованию Центральному ФО'),
  createData('1027700070518',
             'КРР 15946 НР',
             '07.12.2015', '07.12.2015', 'Бессрочная',
             '3474', 'Разведка и добыча полезных ископаемых', 'Департамент по недропользованию Центральному ФО'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ОГРН</StyledTableCell>
            <StyledTableCell align="right">Номер лицензии</StyledTableCell>
            <StyledTableCell align="right">Дата лицензии</StyledTableCell>
            <StyledTableCell align="right">Дата начала действия лицензии</StyledTableCell>
            <StyledTableCell align="right">Дата приостановления лицензии</StyledTableCell>
            <StyledTableCell align="right">Код организации, выдавшей лицензию</StyledTableCell>
            <StyledTableCell align="right">Вид лицензируемой деятельности</StyledTableCell>
            <StyledTableCell align="right">Выдавший орган</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.License}</StyledTableCell>
              <StyledTableCell align="right">{row.Date1}</StyledTableCell>
              <StyledTableCell align="right">{row.Date2}</StyledTableCell>
              <StyledTableCell align="right">{row.Date3}</StyledTableCell>
              <StyledTableCell align="right">{row.Kod}</StyledTableCell>
              <StyledTableCell align="right">{row.Vid}</StyledTableCell>
              <StyledTableCell align="right">{row.Org}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
