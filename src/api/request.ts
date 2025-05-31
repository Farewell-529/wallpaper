import type { Source } from "../types/images";

// 后端 API 基础地址
const baseURL = "http://localhost:3001/api";
// const baseURL = "http://159.65.7.241/3001/api";

// RequestOptions 继承了 fetch 的 RequestInit 类型，
// 并允许自定义 headers 和 method，方便类型推断和智能提示。
interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
    method?: string;
}
const request = async (
    endpoint: string,
    options: RequestOptions = {},
    source?: Source,
): Promise<any> => {
    const url = `${baseURL}/${source}${endpoint}`; // 使用模板字符串，添加 / 分隔符
    // 默认 headers
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };
    const response = await fetch(url, {
        ...options,
        headers,
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    // 统一返回数据
    return response.json();
};

export default request;