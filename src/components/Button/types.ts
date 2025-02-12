import { Theme } from "../../styles/theme";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    size?: ButtonSize;
    color?: ButtonColor;
    variant?: ButtonVariant;
    disabled?: boolean;
}

export type ButtonVariant = 'outline' | 'contained';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonColor = keyof Theme['colors'];
