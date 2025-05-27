import request from "../request";

// 获取 wallhaven 图片详情
export  function getWallhavenDetailApi  (id: string)  {
  return request(`/detail/${id}`, {
        method: "GET",
    },"wallhaven");
};
