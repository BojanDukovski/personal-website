import axios from '../custom-axios/axios';

const repository = {
    fetchPictures: () => {
        return axios.get("/pictures");
    },
    addPictures: (formData) => {
        console.log("ready")
        return axios.post("/addPictures", formData);
    }
};

export default repository;

