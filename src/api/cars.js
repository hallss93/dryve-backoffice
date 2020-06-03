import api from "./index";

const url = {
    cars: "5eb553df31000060006994a8"
};

export default {
    getAllCars: async () => {
        try {
            const response = await api.get(url.cars);
            return response;
        } catch (error) {
            return error;
        }
    }
};
