import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "../@types/buttonProps";

export default function Button(props: ButtonProps){
    return(
        <TouchableOpacity style={{paddingHorizontal: 90, paddingVertical: 10, borderRadius: 10, backgroundColor: props.color}}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}