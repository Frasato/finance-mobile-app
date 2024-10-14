import { IconNameProps } from "./iconNameProps";

export interface InputProps {
    placeholderText: string,
    icon: IconNameProps,
    secureTextEntry?: boolean,
    onChangeText: (text: string) => void 
}