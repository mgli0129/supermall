import base from "@/network/api/base";
import axios from "../http"

export const detail = {

  /**
   * 获取某个商品详细信息
   * @param iid
   * @returns {Promise<AxiosResponse<T>>}
   */
  getDetail(iid) {
    return axios.get(base._url_mall+'/detail', {
      params: {
        iid
      }
    })
  },

  /**
   * 获取推荐商品信息
   * @returns {Promise<AxiosResponse<T>>}
   */
  getRecommend() {
    return axios.get(base._url_mall+'/recommend')
  }

}




