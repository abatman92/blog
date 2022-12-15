import { IPost } from './../../types/post';
import { HTMLAttributes } from "react";

export interface IPostProps extends HTMLAttributes<HTMLDivElement> {
    post: IPost
}