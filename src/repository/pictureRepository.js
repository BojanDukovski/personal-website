import axios from '../custom-axios/axios';

const repository = {
    fetchPictures: () => {
        return axios.get("/pictures");
    },
    addPictures: (formData) => {
        return axios.post("/addPictures", formData);
    },
    fetchProjects: () => {
        return axios.get("/projects");
    }
};

export default repository;

