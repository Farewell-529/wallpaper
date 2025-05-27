import request from "../request";
export  async function getLatestWallhavenApi(params = { page: 1 }) {
    // 直接请求后端接口
    return await request(`/latest?page=${params.page}`, {
        method: "GET",
        ...params
    },'wallhaven');
}