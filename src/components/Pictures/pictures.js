import React from "react";
import CustomCarousel from "./carousel";
import ProfileInfo from "../profileInfo";

class Pictures extends React.Component {

    constructor(props) {
        super(props);
    };

    render () {
        const pictures = this.getAllPictures();
        return (
                <div className="row">
                    <div className="col-sm-1 col-lg-6">
                        <ProfileInfo></ProfileInfo>
                    </div>
                    <div className="col-sm-1 col-lg-6">
                        <CustomCarousel></CustomCarousel>
                    </div>
                    <div className="row" style={{backgroundColor: "black"}}>
                        {pictures}
                    </div>
                </div>
        )
    }

    buildImagePath = (path) => {
        return "https://bojandukovski-backend.herokuapp.com/api/picture?path=" + path;
    }

    getAllPictures = () => {
        return this.props.pictures.map((term) => {
            return (
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <img src={this.buildImagePath(term.url)} key={term.url} 
                        style={{position: "relative", display: "inline", float: "left", width: "100%", height: "100%", margin: "3%"}}
                        className="feedImages m-sm-0"
                        />
                    </div>
            )
        })
    }

}
export default Pictures;