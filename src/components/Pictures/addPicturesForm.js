import React from "react";
import axios from '../../custom-axios/axios';

class Form extends React.Component { 

    constructor(props) {
        super(props);
    }

    state = { 
        pictures : null
    }

    handleInput(e) {
        this.state.pictures = e.target.files;
    }

    onFormSubmit(e) {
        e.preventDefault();
        const pictures = this.state.pictures;
        const formData = new FormData();
        for (let i=0; i<pictures.length; i++ ) {
            formData.append('pictures', pictures[i]);
        }
        axios.post("https://bojandukovski-backend.herokuapp.com/api/addPictures", formData);
        //this.props.onAddPictures(formData);
    }

    render(){
        return (
            <div id='form' className='container text-light'>
                <form onSubmit={(e) => this.onFormSubmit(e)} style={{padding: '30%', marginLeft: '8%'}} accept="image/jpg, image/jpeg, image/png">
                    <input id="pictures" type='file' name='pictures' multiple onChange={(e) => this.handleInput(e)}/>
                    <input type="submit" className='btn btn-outline-light' value="submit" />
                </form>
            </div>
        )
    }
};

export default Form;