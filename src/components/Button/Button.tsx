import { FC, PropsWithChildren } from "react";
import { DeleteIcon } from "../../svg/Delete/DeleteIcon";
import { EditIcon } from "../../svg/Edit/Edit";
import { IButtonProps } from "./Button.props";
import cn from 'classnames';
import css from './Button.module.scss';
import { SendIcon } from "../../svg/Send/SendIcon";
import { Add } from "../../svg/ArrowDown/Add";

export const Button: FC<PropsWithChildren<IButtonProps>> = ({className, action, children, ...rest}) => {
    const returnIcon = () => {
        switch (action) {
            case 'delete': {
                return <DeleteIcon />
            }
            case 'edit': {
                return <EditIcon />
            }
            case 'send': {
                return <SendIcon />
            }
            case 'add': {
                return <Add />
            }
            default: return <></>
        }
    }
    return <button className={cn({[css.button]: true, [`${className}`]: !!className})} {...rest}>
            {children}
            {returnIcon()}
        </button>
}