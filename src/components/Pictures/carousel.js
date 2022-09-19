import React  from "react";
import Pic1 from '../../images/marja i vic 05.05 odbrani/1.JPG';
import Pic2 from '../../images/marja i vic 05.05 odbrani/2.JPG';
import Pic3 from '../../images/marja i vic 05.05 odbrani/3.JPG';

const CustomCarousel = () => {
    return (
        <div className="row">
            <div style={{height: "600px", width: "600px", color: 'white', padding: '10%', paddingTop: "0%", marginBottom: "2%"}} id="carouselExampleIndicators" className="carousel slide, mt-5" data-bs-ride="true">
                <p className="display-4">Newest collection</p>
                
                <div className="carousel-inner" style={{borderRadius: "5%"}}>
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
    )
};

export default CustomCarousel;