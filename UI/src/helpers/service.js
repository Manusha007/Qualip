import { post} from '../helpers/apiHelper';


export const LoginReq = async (data) => {
    try {
        const result = await post(`login`, data);
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

