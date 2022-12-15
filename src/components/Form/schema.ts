import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup.string().required('Это поле обязательно').min(4, "Слишком короткое"),
    content: yup.string().required('Введите текст').max(100, 'Максимум 100 символов').min(4, "Слишком короткое")
})

export type FormType = {
    title: string,
    content: string
}