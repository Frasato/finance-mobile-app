import { Text, TouchableOpacity } from "react-native";
import { TextButtonProps } from "../@types/TextButtonProps";

export default function TextButton(props: TextButtonProps){
    return(
        <TouchableOpacity>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}