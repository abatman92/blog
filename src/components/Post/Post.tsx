import { FC, memo, useCallback } from "react";
import { IPostProps } from "./Post.props";
import css from './Post.module.scss';
import { Button } from "../Button/Button";
import { ApiRequests } from "../../api/api";
import { usePost } from "../../api/query";

export const Post: FC<IPostProps> = memo(({post, ...rest}) => {
    const {deletePost} = usePost();
    const sendDeleteRequest = useCallback(() => deletePost(post.id) ,[post.id]);
    return <div className={css.component} {...rest}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <Button action='delete' className={css.remove} onClick={sendDeleteRequest} />
    </div>
})