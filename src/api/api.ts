import { IPost } from './../types/post';
import { FormType } from './../components/Form/schema';
import axios, { AxiosInstance } from "axios";

export class ApiRequests {
    static api = axios.create({baseURL: 'http://localhost:3333'})
    static async getPosts(): Promise<IPost[]> {
        return await (await ApiRequests.api.get('/')).data
    }
    static async sendNewPost (post: FormType) {
        return await ApiRequests.api.post("/post", post)
    }
    static async removePost (id: number) {
        return await ApiRequests.api.delete("/post/" + id)
    }
}