import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { InputProps } from "../@types/inputProps";
import * as colors from "../constants/colors";

export default function InputText(props: InputProps){
    return(
        <View>
            <MaterialIcons name={props.icon} size={20} color={colors.darkAquaGrenn}/>
            <TextInput 
                placeholder={props.placeholderText}
                placeholderTextColor={colors.white}
                cursorColor={colors.lightOrange}
            />
        </View>
    )
}