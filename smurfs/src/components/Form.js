import React, { Component } from "react";
import { connect } from "react-redux";
import { postRequest } from "../actions";

class newForm extends Component {
    state = {
        name: "",
        age: "",
        height: ""
    };

    inputChange = event => {
        this.setState({ [event.target.name ]: event.target.value});
    }

    addSmurf = _ => {
        const { name, age, height } = this.state;
        this.props.postRequest({ name, age, height});
        this.setState({ name: "", age: "", height: ""});
    };

    render() {
        return (
            <form>
                <input
                    value = {this.state.name}
                    name = "name"
                    type = "text"
                    placeholder = "Name"
                    onChange = {this.inputChange}
                />

                <input 
                    className = "input"
                    value = {this.state.age}
                    name = "age"
                    type = "text"
                    placeholder = "age"
                    onChange = {this.inputChange}
                />

                <input
                    className = "input"
                    value = {this.state.height}
                    name = "height"
                    type = "text"
                    placeholder = "Height"
                    onChange = {this.inputChange}
                />

                <button onClick = {() => this.addSmurf()} type = "button">
                    New
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingSmurf: state.creatingSmurf
    };
};

export default connect(
    mapStateToProps,
    { postRequest }
) (newForm);