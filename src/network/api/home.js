import base from "@/network/api/base";
import axios from "../http"

const home = {
  BANNER: 'banner',
  RECOMMEND: 'recommend',

  /**
   * 获取首页多个数据
   * @returns {Promise<AxiosResponse<T>>}
   */
  getHomeMultidata() {
    console.log(base._url_mall);
    return axios.get(base._url_mall+'/home/multidata');
  },

  /**
   * 获取首页商品信息
   * @param type
   * @param page
   * @returns {Promise<AxiosResponse<T>>}
   */
  getHomeData(type, page) {
    return axios.get(base._url_mall+'/home/data', {
      params: {
        type,
        page
      }
    })
  }
}

export default home;

