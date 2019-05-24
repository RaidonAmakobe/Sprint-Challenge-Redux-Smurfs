import React, { Component } from "react";
import { connect } from "react-redux";

class Smurf extends Component {
    render() {
        return (
            <div className = "container">
                <ul>
                    {this.props.smurf.map(smurf => {
                        return (
                            <li key = {smurf.id}>
                                <div>{smurf.name}</div>
                                <div>{smurf.age}</div>
                                <div>{smurf.height}</div>
                                <div>{smurf.id}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    null,
    {}
)(Smurf)