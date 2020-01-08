import base from "@/network/api/base";
import axios from "../http";
import qs from 'qs';

const mgcomm = {

  /**
   * 获取单个问题
   * Restful风格
   * @param id
   * @returns {Promise<AxiosResponse<T>>}
   */
  getQuestion(id) {
    return axios.get( '/axios/question/'+id);
  },

  /**
   * 提交一个问题
   * @param params
   *        {
   *          title,content,tag,id
   *        }
   * @returns {Promise<AxiosResponse<T>>}
   */
  postQuestion(params) {
    return axios.post('/axios/publish',qs.stringify(params))
  }

}

export default mgcomm;
