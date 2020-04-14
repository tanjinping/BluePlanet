const DEVELOPER = 'Production';// Staging 测试环境 || Production 正式环境
const URL = DEVELOPER === 'Staging' ? 'https://dev-card.prismslight.com/api' : 'https://card.prismslight.com/api';
const PRIVATE_KEY = DEVELOPER === 'Staging' ? 'mDzYhG8NVzNiMDPLhyVBSncCPWrcGS0pdAercBZ2wYM=' : '+QwkgbaU5dFbfLAc2MQH0nKSqcBceWIEz99gYJeOD3U=';

export const transformFetch = async (method, url, data) => {
    const TIME_STAMP = Math.round(Date.now() / 1000).toString();
    const POST_DATA = JSON.stringify(data);
    const HEADER = new Headers({
        'x-uaid': '10006', 'x-timestamp': TIME_STAMP,
        // 'x-signature': CryptoJS.HmacSHA256((method === 'GET' ? buildStr(data) : POST_DATA) + '.' + TIME_STAMP, PRIVATE_KEY).toString(),
    });
    let request = {method, headers: HEADER};
    method !== 'GET' && (request['body'] = POST_DATA);
    const FETCH_DATA = await fetch(parameterTransform(method, url, data), request);
    return DEVELOPER === 'Production' ? AesDecrypt(await FETCH_DATA.text()) : await FETCH_DATA.text();
};

/**
 * @Description fetch parameter transform
 * @param  method 请求方法
 * @param  key URL参数字符串的前缀
 * @param parameter 将要转为URL参数字符串的对象
 * @return string URL参数字符串
 * @author JinPing Tan 2020/3/30
 */
const parameterTransform = (method, key, parameter) => {
    if (Object.keys(parameter).length === 0 || key.length === 0) {
        return '';
    }
    if (method !== 'GET') {
        return URL + key;
    }
    let parameterString = URL + key + '?';
    for (let param in parameter) {
        if (parameter.hasOwnProperty(param)) {
            parameterString += param + '=' + parameter[param] + '&';
        }
    }
    return parameterString.slice(0, -1);
};

const buildStr = (data) => {
    let signString = '';
    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            signString += item + '=' + data[item] + '&';
        }
    }
    return signString.slice(0, -1);
};

//AES解密
const AesDecrypt = (word) => {
    try {
        // let decrypt = CryptoJS.AES.decrypt(word, CryptoJS.enc.Base64.parse(PRIVATE_KEY), {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7,
        // });
        // let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        // return JSON.parse(decryptedStr.toString());
    } catch (e) {
        console.log(word, e);
        return {};
    }
};
