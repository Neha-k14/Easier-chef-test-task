import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import addDish from '../store/actions/addDish';

export class AddDish extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                dishName: "",
                ingName: "",
                ingQuantity: "",
                unitOfMeasurement: "",
                stepsToCook: "",
                imgUrl: ""
            }
        };
    }

    submitForm = e => {
        e.preventDefault();
        // dispatch FORM_SUBMIT action
        this.props.dispatch({
            type: "SUBMIT_FORM"
        });
        window.location.href = '/home'
    };

    handleInputChange = e =>
        this.setState(
            {
                values: { ...this.state.values, [e.target.name]: e.target.value }
            },
            () => {
                // dispatch SET_FORM_VALUES action
                this.props.dispatch({
                    type: "SET_FORMVALUES",
                    payload: this.state.values
                })
            }
        );


    render() {
        return (
            <div className="loginPaper">
                <Paper >

                    <div className="loginheaderpart" color="secondary">
                        <Typography variant="display1" gutterBottom className="loginpageheader">
                            Add Receipe
                        </Typography>
                    </div>

                    <form className=" " onSubmit={this.submitForm}>
                        <Typography variant="headline" component="h3">
                            Fill Receipe Details
                        </Typography>
                        <div className="loginformgroup">
                            <FastfoodIcon />
                            <TextField id="input-dishname" label="Name of Dish" value={this.state.values.dishname}
                                onChange={this.handleInputChange} name="dishname" />
                        </div>
                        <div className="loginformgroup">
                            <EmojiFoodBeverageIcon />
                            <TextField id="input-ingredientname" label="Ingredient Name" value={this.state.values.ingname}
                                onChange={this.handleInputChange} name="ingname" />
                        </div>
                        <div className="loginformgroup">
                            <SystemUpdateAltIcon />
                            <TextField id="input-ingredientquantity" label="Ingredient Quantity" value={this.state.values.ingQuantity}
                                onChange={this.handleInputChange} name="ingQuantity" />
                        </div>
                        <div className="loginformgroup">
                            <SwapHorizIcon />
                            <TextField id="input-unit" value={this.state.values.unitOfMeasurement}
                                onChange={this.handleInputChange} label="Unit of Measurement" name="unitOfMeasurement" />
                        </div>
                        <div className="loginformgroup">
                            <LocalDiningIcon />
                            <TextField id="input-steps" value={this.state.values.stepsToCook}
                                onChange={this.handleInputChange} label="Steps to Cook" name="stepsToCook" />
                        </div>
                        <div className="loginformgroup">
                            <LinkedCameraIcon />
                            <TextField id="input-url" value={this.state.values.imgUrl}
                                onChange={this.handleInputChange} label="Image Url of Dish" name="imgUrl" />
                        </div>
                        <Button variant="contained" type="submit" color="secondary" className="submit-btn" >
                            Add Dish
                        </Button>
                    </form>


                </Paper>
            </div >

        );
    }

}

const mapStateToProps = state => ({
    message: state.message
});

export default connect(mapStateToProps)(AddDish);
//export default ourWrapperFunction(MyRegularOldComponent)