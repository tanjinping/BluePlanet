import {UPDATE_TOKEN} from '../actions/token';

export const updateToken = (token) => {
    return {
        type: UPDATE_TOKEN,
        token,
    };
};
