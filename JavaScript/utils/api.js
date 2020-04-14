import {transformFetch} from './util';

export const testApi = () => {
    // return new Promise.resolve(
    return new Promise((resolve, reject) => {
        let value = null;
        setTimeout(() => {
            value = {
                'name': '张三',
                age: 25,
            };
            value ? resolve(value) : reject('/');
        }, 0);
    });
    // return transformFetch('GET', '/image', {task_id: '', key: '', page: '', size: ''});
};
