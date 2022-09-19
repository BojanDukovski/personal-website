import axios from '../custom-axios/axios';

const repository = {
    fetchPictures: () => {
        return axios.get("/pictures");
    },
    addPictures: (pictures) => {
        return axios.post("/addPictures", pictures);
    }
};

export default repository;

