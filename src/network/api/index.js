/**
 * export all APIs
 */

import home from "@/network/api/home";
import category from "@/network/api/category";
import {detail, Goods, GoodsParam, Shop} from "@/network/api/detail"
import mgcomm from "@/network/api/mgquestion";

export default {
  home,
  category,
  detail,
  mgcomm
}
