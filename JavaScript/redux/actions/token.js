import {testApi} from '../../utils/api';
import {updateToken} from '../helper/helper';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const handleUpdateToken = () => {
    return (dispatch) => {
        testApi()
            .then(response => {
                response && dispatch(updateToken(Math.random().toString()));
            })
            .catch(error => {
                console.log(error);
                console.log('更新token失败');
            });
    };
};
