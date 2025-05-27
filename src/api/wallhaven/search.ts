import request from "../request";
export  async function getSearchWallhavenApi(params = { keyword : '',page:1 }) {
    // 直接请求后端接口
    return await request(`/search?kw=${params.keyword}&page=${params.page}`,{
        method: "GET",
        ...params
    }, 'wallhaven');
}