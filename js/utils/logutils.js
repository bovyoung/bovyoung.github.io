/**
 * Created by S0S on 2016/10/28.
 */
var LogUtils = {};

LogUtils.isDebug = true;

LogUtils.log = function(str) {
    if(this.isDebug) {
        console.log(str);
    }
};