import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";
import { InputProps } from "../@types/inputProps";
import * as colors from "../constants/colors";

export default function InputText({icon, placeholderText, onChangeText, ...rest}: InputProps){
    return(
        <View style={styles.containerInput}>
            <MaterialIcons name={icon} size={20} color={colors.darkAquaGrenn} style={styles.icon}/>
            <TextInput 
                placeholder={placeholderText}
                placeholderTextColor={colors.white}
                cursorColor={colors.lightOrange}
                style={styles.input}
                onChangeText={onChangeText}
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.7,
        borderStyle: 'solid',
        borderColor: colors.white,
        borderRadius: 10,
        width: '85%'
    },
    icon: {
        marginRight: 10
    },
    input: {
        color: colors.white
    }
});