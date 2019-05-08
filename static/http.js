import axios from "axios";
import qs from "qs";
let http = {

    /** get 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    get: function(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                    params: params
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    /** post 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    post: function(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}
export default http;

// this.$http.get('/xxx/xx', {})