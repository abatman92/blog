import { FormHTMLAttributes } from "react";

export interface IFormPorps extends FormHTMLAttributes<HTMLFormElement> {
    opened: boolean;
}