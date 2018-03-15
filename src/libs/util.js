import data from '@/iconfont/teliconfont';

let util = {};

// 拿到svg的d属性
util.getIconfont = function(name) {
    if (data[name]) {
        return data[name];
    } else {
        return data['gongyesheshi'];
    }
};

util.formatNumber = function(num) {
    return parseFloat(num).toLocaleString();
};

export default util;
