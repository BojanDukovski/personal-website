import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/header.js';
import repository from "./repository/pictureRepository";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cover from './images/background.jpg';
import Pictures from "./components/Pictures/pictures";
import Form from './components/Pictures/addPicturesForm';
import AboutMe from './components/AboutMe/aboutMe';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
    }

    render() {
        return (
            <div style={{backgroundImage: `url('${Cover}')`}}>
                <Header></Header>
                    <BrowserRouter>
                        <main>
                            <Routes>
                                    <Route path="/"
                                           element={<Pictures pictures={this.state.pictures}/>}/> 
                                    <Route path="/addPicturesForm"
                                            element={<Form 
                                            onAddPictures={this.addPictures}/>}/>
                                    <Route path='/aboutMe' element={<AboutMe/>}/>
                            </Routes>
                        </main>
                    </BrowserRouter>
            </div>
        )
    };
    componentDidMount() {
        this.getAllPictures();
    };
    getAllPictures = () => {
        repository.fetchPictures()
            .then((data) => {
                this.setState({
                    pictures: data.data
                })
            })
    };
    addPictures = (pictures) => {
        repository.addPictures(pictures)
        .then(() => {
            this.getAllPictures();
        })
    }
    
}

export default App;
