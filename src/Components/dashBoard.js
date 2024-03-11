import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [checkedValues, setCheckedValues] = React.useState([]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };




    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{ color: 'black' }}
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Match and Reconcile
                </Typography>
                <ReplyRoundedIcon />
            </Toolbar>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{ color: 'black' }}
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
                    <label style={{ marginRight: '20px' }}>Invoice</label>

                    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                    />
                    <label style={{ marginRight: '20px' }}>Credit/Debit Note</label>


                </div>
                <div><FormControlLabel control={<Checkbox defaultChecked />} label="Indicates Adance Reconciliation Suggestions" /></div>
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    <div style={{ fontSize: '10  ', padding: '20', marginLeft: '20px', marginTop: '20px' }}>
                        <TableContainer component={Paper} style={{ backgroundColor: '#e3f2fd' }}>
                            <Table sx={{ minWidth: '300px'}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><h4 style={{ marginTop: '2px', marginBottom: '2px' }}>SUMMARY</h4></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><h5>Data Type</h5><h6>Supplier</h6><h6>Purchase(My Data)</h6></TableCell>
                                        <TableCell><h5>No. of Docs</h5><h6>349</h6><h6>342</h6></TableCell>
                                        <TableCell><h5>Taxable Value</h5><h6>41,25,830,95</h6><h6>43,23,842,61</h6></TableCell>
                                        <TableCell><h5>Tax Value</h5><h6>2,58,886,52</h6><h6>2,66,.52.70</h6></TableCell>
                                        <TableCell><h5>Tax Difference</h5><h6>(7,166,18)</h6><h6> </h6></TableCell>
                                    </TableRow>

                                </TableHead>

                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div style={{ marginLeft: '40px', marginTop: '20px', display: 'flex' }}>
                    <div style={{}}>
                        <FormControl sx={{  minWidth: 120 }} size="small">
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
                            label="Match Status"
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                        />
                        
                    </div>
                    <div>
                        <Button variant="outlined">Search</Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}
