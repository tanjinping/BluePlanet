import {UPDATE_TOKEN} from '../actions/token';

export default function token(state = "", action) {
    if (action.type === UPDATE_TOKEN) {
        return action.token;
    } else {
        return state;
    }
}
