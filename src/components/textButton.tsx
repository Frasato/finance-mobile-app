import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextButtonProps } from "../@types/TextButtonProps";
import * as colors from "../constants/colors";

export default function TextButton(props: TextButtonProps){
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        color: colors.white,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: colors.white
    }
})