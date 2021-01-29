import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth';

export class LoginPage extends React.Component {

    OnClickLogin = () => {
        this.props.userlogin('12345');
        this.props.history.push('/add');
    };

    render() {
        return (
            <div className="login-page-class">
                <Paper className="loginPaper">
                    <div className="loginheaderpart">
                        <Typography variant="display3" gutterBottom className="loginpageheader">
                            Login
                        </Typography>
                    </div>

                    <form>
                        <Typography variant="headline" component="h3">
                            Login to your account
                        </Typography>
                        <div className="loginformgroup">
                            <AccountCircle />
                            <TextField id="input-username" label="Username" />
                        </div>
                        <div className="loginformgroup">



                            <Key />

                            <TextField type="password" id="input-password" label="Password" />

                        </div>
                    </form>

                    <Button variant="contained" className="submit-btn" color="secondary" onClick={this.OnClickLogin}>
                        Login
                    </Button>
                </Paper>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userlogin: (userid) => dispatch(login(userid))
});


export default connect(
    undefined,
    mapDispatchToProps
)(LoginPage);