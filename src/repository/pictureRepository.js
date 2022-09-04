import axios from '../custom-axios/axios';

const repository = {
    fetchPictures: () => {
        return axios.get("/pictures");
    },
};

export default repository;

