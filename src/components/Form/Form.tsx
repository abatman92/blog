import classNames from "classnames";
import { FC } from "react";
import { IFormPorps } from "./Form.props";
import css from './Form.module.scss';
import { Button } from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormType, schema } from "./schema";
import { usePost } from "../../api/query";

export const Form: FC<IFormPorps> = ({opened}) => {
    const { register, formState: {errors}, handleSubmit, reset } = useForm<FormType>({resolver: yupResolver(schema)});
    const {sendPost} = usePost()
    const onSubmit: SubmitHandler<FormType> = (data) => {
        sendPost(data).then(() => reset())
    }
    return <form onSubmit={handleSubmit(onSubmit)} className={classNames(css.form, {[css.opened]: opened})}>
        <label>
            Заголовок
            <input placeholder="Введите заголовок" {...register('title')}  />
            {errors.title && <span className={css.error}>{errors.title.message}</span>}
        </label>
        <label>
            Текст
            <textarea placeholder="Введите текст" {...register('content')} />
            {errors.content && <span className={css.error}>{errors.content.message}</span>}
        </label>
        <Button action="send" type="submit">Отправить</Button>
    </form>
}