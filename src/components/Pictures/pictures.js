import React from "react";

class Pictures extends React.Component {

    constructor(props) {
        super(props);
    };

    
    consolePrint = (term) => {
        console.log(term);    
    }

    render () {
        const pictures = this.getAllPictures();
        return (
                <div>
                    {pictures}
                </div>
        )
    }


    getAllPictures = () => {
        return this.props.pictures.map((term) => {
            return (
                    <img src={term.url} key={term.url} className="feedImages col-3" />
                
            )
        })
    }

}
export default Pictures;