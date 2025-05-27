import request from "../request";
export  async function getSearchKonachanApi(params = {keyword:'', page: 1 }) {
    // 直接请求后端接口
    return await request(`/search?page=${params.page}&keyword=${params.keyword}`, {
        method: "GET",
        ...params
    },'konachan');
}