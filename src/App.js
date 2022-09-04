import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/header.js';
import repository from "./repository/pictureRepository";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cover from './images/background.jpg';
import Pictures from "./components/Pictures/pictures";
import Pic1 from './images/marja i vic 05.05 odbrani/1.JPG';
import Pic2 from './images/marja i vic 05.05 odbrani/2.JPG';
import Pic3 from './images/marja i vic 05.05 odbrani/3.JPG';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
    }

    render() {
        return (
            <div style={{backgroundImage: `url('${Cover}')`, color: 'white'}}>
                <Header></Header>

                <div className="row">
                    <div style={{height: '50%', width: '30%', backgroundImage: 'url(Cover)', color: 'white', marginLeft: '35%'}} id="carouselExampleIndicators" className="carousel slide, mt-5" data-bs-ride="true">
                        <p className="display-4">Newest collection</p>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">



                            <div className="carousel-item active">
                                <img src={Pic1}  className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Pic2}  className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Pic3}  className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div id="feed" className="row">
                    <BrowserRouter>
                        <main>
                            <Routes>
                                <Route>
                                    <Route path="/"
                                           element={<Pictures pictures={this.state.pictures}/>}/>
                                </Route>
                            </Routes>
                        </main>
                    </BrowserRouter>
                </div>

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
}

export default App;
