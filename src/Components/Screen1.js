import React, { useState } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from './Navbar'; // Importing Navbar component
import Back from "../Images/Back.png";
import Sidebar from './Sidebar';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";

const columns = [
    { id: "INV_NUM", name: "INV NUM", minWidth: 50 },
    { id: "INV_DATE", name: "INV DATE", minWidth: 80 },
    { id: "TAXABLE_VAL", name: "TAXABLE VAL", minWidth: 80 },
    { id: "TAX_VAL", name: "TAX VAL", minWidth: 60 },
    { id: "TOTAL_VAL", name: "TOTAL VAL", minWidth: 70 },
    { id: "TAX_DIFF", name: "TAX DIFF", minWidth: 70 },
    { id: "SUPPLIER", name: "SUPPLIER" },
    { id: "INV_NUM1", name: "INV NUM", minWidth: 50 },
    { id: "INV_DATE1", name: "INV DATEL", minWidth: 80 },
    { id: "TAXABLE_VA1L", name: "TAXABLE VAL", minWidth: 80 },
    { id: "TAX_VAL1", name: "TAX VAL", minWidth: 60 },
    { id: "TOTAL_VAL1", name: "TOTAL VAL", minWidth: 70 },
    { id: "RECON_STATUS", name: "RECON STATUS" },
];

function createData(
    INV_NUM,
    INV_DATE,
    TAXABLE_VAL,
    TAX_VAL,
    TOTAL_VAL,
    TAX_DIFF,
    SUPPLIER,
    INV_NUM1,
    INV_DATE1,
    TAXABLE_VA1L,
    TAX_VAL1,
    TOTAL_VAL1,
    RECON_STATUS
) {
    // const density = population / size;
    return {
        INV_NUM,
        INV_DATE,
        TAXABLE_VAL,
        TAX_VAL,
        TOTAL_VAL,
        TAX_DIFF,
        SUPPLIER,
        INV_NUM1,
        INV_DATE1,
        TAXABLE_VA1L,
        TAX_VAL1,
        TOTAL_VAL1,
        RECON_STATUS,
    };
}

const rows = [
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
    createData(
        "PAQW123",
        "08-01-2022",
        "15,823,85",
        "991.20",
        "20815.00",
        "0.0",
        "Supplier name",
        "PAQW123",
        "08-01-2022",
        "15,823.85",
        "991.20",
        "20815",
        "No Action"
    ),
];


export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [checkedValues, setCheckedValues] = React.useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleReconStatusChange = (event, rowIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].RECON_STATUS = event.target.value;
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => row.INV_NUM);
            setSelectedRows(newSelecteds);
            return;
        }
        setSelectedRows([]);
    };

    const handleCheckboxClick = (event, INV_NUM) => {
        const selectedIndex = selectedRows.indexOf(INV_NUM);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedRows, INV_NUM);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelected = newSelected.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1)
            );
        }

        setSelectedRows(newSelected);
    };

    const isSelected = (INV_NUM) => selectedRows.indexOf(INV_NUM) !== -1;

    const totalCount = rows.length;

    const handleChange = (event) => {   
        setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <Sidebar />
            <Toolbar   style={{ marginLeft: '65px', marginTop: '55px'}}>
                <Typography
                    variant="h1"
                    noWrap
                    component="div"
                    style={{ color: 'black', fontSize: '13px', fontWeight: 'bold' }}
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Match and Reconcile
                </Typography>
                <img src={Back} alt="Back" style={{ width: "30px", paddingTop: "0" }} />
            </Toolbar>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '70px' , marginTop: '-15px'}}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{ color: 'black', fontSize: '14px' }}
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Types
                    </Typography>

                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    <label style={{ marginRight: '20px', fontSize: '13px' }}>Invoice</label>

                    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                    />
                    <label style={{ marginRight: '20px', fontSize: '13px' }}>Credit/Debit Note</label>


                </div>
                <div><Checkbox Checked /><label style={{ fontSize: '14px', marginRight: '10px' }}>Indicates Advance Reconciliation Suggestions</label></div>
            </div>
            <div style={{ display: 'flex', marginLeft: '75px', marginRight: '10px' }}>
                <div>
                    <div style={{ marginLeft: '10px', marginTop: 'px' }}>
                        <TableContainer component={Paper} style={{ backgroundColor: '#e3f2fd' }}>
                            <Table sx={{ minWidth: '20px' }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#6E738E' }}>SUMMARY</h4></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell ><h5 style={{ fontSize: '12px' }}>Data Type</h5><h6 style={{ fontSize: '12px' }} >Supplier</h6><h6 style={{ fontSize: '12px' }}>Purchase(My Data)</h6></TableCell>
                                        <TableCell><h5 style={{ fontSize: '12px' }}>No. of Docs</h5><h6 style={{ fontSize: '12px' }}>349</h6><h6 style={{ fontSize: '12px' }}>342</h6></TableCell>
                                        <TableCell><h5 style={{ fontSize: '12px' }}>Taxable Value</h5><h6 style={{ fontSize: '12px' }}>41,25,830,95</h6><h6 style={{ fontSize: '12px' }}>43,23,842,61</h6></TableCell>
                                        <TableCell><h5 style={{ fontSize: '12px' }}>Tax Value</h5><h6 style={{ fontSize: '12px' }}>2,58,886,52</h6><h6 style={{ fontSize: '12px' }}>2,66,.52.70</h6></TableCell>
                                        <TableCell><h5 style={{ fontSize: '12px' }}>Tax Difference</h5><h6 style={{ fontSize: '12px' }}>(7,166,18)</h6><h6> </h6></TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div style={{ marginLeft: '20px', marginTop: '0px', display: 'flex' }}>
                    <div style={{}}>
                        <FormControl sx={{ minWidth: 220 }} size="small">
                            <InputLabel id="demo-select-small-label">Match Status</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Age"
                                onChange={handleChange}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            label=""
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"

                        />
                        <TuneOutlinedIcon style={{ margin: '5px' }} />

                    </div>
                    <div style={{ marginLeft: '15px' }}>
                        <Button variant="outlined" style={{ backgroundColor: '#E7F1FF' }}>Search</Button>
                    </div>
                </div>
            </div>
            <Paper
                sx={{
                    width: "92%",
                    marginLeft: "85px",
                    marginRight: "20px",
                    marginTop: "20px",
                }}
            >
                <TableContainer className="customTableContainer">
                    <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={7} style={{fontSize:'12px', fontWeight:'bold'}}>
                                    MyData (Purchase Register)
                                </TableCell>
                                <TableCell
                                    align="center"
                                    colSpan={0}
                                    style={{
                                        position: "sticky",
                                        top: 0,
                                        backgroundColor: "#E6E6E6",
                                        zIndex: 1,
                                        fontSize:'10px', fontWeight:'bold'
                                    }}
                                >
                                    TAX DIFF
                                </TableCell>
                                <TableCell align="center" colSpan={7} style={{fontSize:'12px', fontWeight:'bold'}}>
                                    MyData (Purchase Register)
                                </TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        indeterminate={
                                            selectedRows.length > 0 && selectedRows.length < rowsPerPage
                                        }
                                        checked={
                                            rows.length > 0 &&
                                            selectedRows.length ===
                                            rows.slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            ).length
                                        }
                                        onChange={handleSelectAllClick}
                                    />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth || 50,
                                            backgroundColor: "#E6E6E6",
                                            fontSize: "10px",
                                        }}
                                    >
                                        {column.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.INV_NUM);
                                    return (
                                        <TableRow hover key={index}>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    onChange={(event) =>
                                                        handleCheckboxClick(event, row.INV_NUM)
                                                    }
                                                />
                                            </TableCell>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{
                                                        backgroundColor:
                                                            column.id === "TAX_DIFF" ? "#d4dbf1" : "inherit",
                                                        fontSize: "12px",
                                                        color:
                                                            column.id === "TOTAL_VAL" ||
                                                                column.id === "TOTAL_VAL1"
                                                                ? "red"
                                                                : "inherit",
                                                    }}
                                                >
                                                    {column.id === "RECON_STATUS" ? (
                                                        <Select
                                                            value={row.RECON_STATUS}
                                                            sx={{
                                                                minWidth: "60px",
                                                                height: "28px",
                                                                "& .MuiSelect-select": {
                                                                    fontSize: "12px",
                                                                },
                                                            }}
                                                            onChange={(event) =>
                                                                handleReconStatusChange(event, index)
                                                            }
                                                        >
                                                            <MenuItem value="Actions">Actions</MenuItem>
                                                            <MenuItem value="No Action">No Action</MenuItem>
                                                        </Select>
                                                    ) : (
                                                        row[column.id]
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 20px",
                    }}
                >
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={totalCount}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    <Pagination
                        count={Math.ceil(rows.length / rowsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>
            </Paper>
        </Box>
    );
}




