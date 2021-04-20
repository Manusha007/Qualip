import { post} from '../helpers/apiHelper';

export const loginReq = async (data) => {
    try {
        const result = await post(`login`, data);
        if (result) {
            if (result.data) {
                window.location.replace('http://localhost:3001/home');
                return result.data;
            }
            throw result.data;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const signUpReq = async (data) => {
    try {
        const result = await post(`signup`, data);
        if (result) {
            if (result.data) {
                return result.data;
            }
            throw result.data;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

