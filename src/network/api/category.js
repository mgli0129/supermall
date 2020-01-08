import base from "@/network/api/base";
import axios from "../http"

const category = {

  /**
   * 获取商品分类
   * @returns {Promise<AxiosResponse<T>>}
   */
  getCategory() {
    return axios.get(base._url_mall+'/category')
  },

  /**
   * 获取子分类
   * @param maitKey
   * @returns {Promise<AxiosResponse<T>>}
   */
  getSubcategory(maitKey) {
    return axios.get(base._url_mall+'/subcategory', {
      params: {
        maitKey
      }
    })
  },

  /**
   * 获取分类详细信息
   * @param miniWallkey
   * @param type
   * @returns {Promise<AxiosResponse<T>>}
   */
  getCategoryDetail(miniWallkey, type) {
    return axios.get(base._url_mall+'/subcategory/detail', {
      params: {
        miniWallkey,
        type
      }
    })
  }

}

export default category;
