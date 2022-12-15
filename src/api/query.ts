import { queryClient } from './../index';
import { useMutation, useQuery } from 'react-query';
import { ApiRequests } from './api';

export const useData = () => {
    const { data: data, isFetching, isError } = useQuery('posts', ApiRequests.getPosts, {refetchOnWindowFocus: false});
    return {
        data, isFetching, isError
    }
}

export const usePost = () => {
    const { mutateAsync } = useMutation(ApiRequests.sendNewPost, {onSuccess() {
        queryClient.invalidateQueries('posts')
        }
    })
    const { mutate } = useMutation(ApiRequests.removePost, {onSuccess() {
        queryClient.invalidateQueries('posts')
        }
    })
    return {
        sendPost: mutateAsync,
        deletePost: mutate
    }
}