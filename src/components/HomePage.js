import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


export class HomePage extends React.Component {
    state = {
        originalDishList: [],
        dishList: []
    }
    componentDidMount(){
        this.initialData();
    }

    initialData = () => {
        let dishList = JSON.parse(localStorage.getItem("dishList"));
        this.setState({
            originalDishList: dishList,
            dishList: dishList == null ? [] : dishList
        });
    }

    handleSearchInput = (e) => {
        this.setState({search: e.target.value});
    }

    handleSearch = async () => {
        if(this.state.search == "") {
            this.initialData();
        } else {
            let dsData = await this.state.originalDishList.filter((item) => {
                if(item.dishname == this.state.search || item.imgUrl == this.state.search || item.ingQuantity == this.state.search || item.ingname == this.state.search || item.stepsToCook == this.state.search || item.unitOfMeasurement == this.state.search) {
                    return item
                }
            });
            this.setState({dishList: dsData});
        }
    }

    render() {
        return (
            <div className="max-width-container">
                <Paper>
                    <div className="m-1">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <div className="loginformgroup">
                                    <TextField id="input-dishname" label="Search" value={this.state.search}
                                        onChange={this.handleSearchInput} name="search" />
                                    <Search onClick={this.handleSearch} />
                                </div>
                            </Grid>
                            <Grid item xs={4}></Grid>
                            <Grid item xs={2}>
                                <div className="loginformgroup">
                                    <Button variant="contained" type="button" color="secondary" className="submit-btn" onClick={()=>{window.location.href='/add'}} >
                                        Add New Dish
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="loginheaderpart">
                        <Typography gutterBottom className="loginpageheader">
                            List of Receipes
                        </Typography>
                    </div>
                    <TableContainer>
                        <Table className="d-table" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name of Dish</TableCell>
                                    <TableCell>Ingredient Name</TableCell>
                                    <TableCell>Ingredient Quantity</TableCell>
                                    <TableCell>Unit of Measurement</TableCell>
                                    <TableCell>Steps to Cook</TableCell>
                                    <TableCell>Image Url of Dish</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.dishList != null && this.state.dishList.map((item, i) => {
                                return (<TableRow key={i}>
                                    <TableCell component="th" scope="row">{i+1}</TableCell>
                                    <TableCell>{item.dishname}</TableCell>
                                    <TableCell>{item.ingname}</TableCell>
                                    <TableCell>{item.ingQuantity}</TableCell>
                                    <TableCell>{item.unitOfMeasurement}</TableCell>
                                    <TableCell>{item.stepsToCook}</TableCell>
                                    <TableCell>{item.imgUrl}</TableCell>
                                </TableRow>)})}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div >

        );
    }

}

export default HomePage;