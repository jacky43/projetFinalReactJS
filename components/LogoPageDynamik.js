import React from "react";

const LogoPagedynamique = (props) => {

    const {title } = props;
    return (
        <div className="logo">
                <div className="left">
                    <img src="logoCollege.jpg" alt="logo" />
                    <button className="btn btn-secondary">Back</button>
                </div>
                <div className="title">
                    <h3>{title.title}</h3>
                </div>
                <div className="right">
                    <button className="btn btn-primary">Home</button>
                    <button className="btn btn-danger">Log out</button>
                </div>
        </div>
    )
}

export default LogoPagedynamique;