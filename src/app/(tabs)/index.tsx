import { Text, View, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";
import InputText from "@/src/components/input";

export default function Login(){
    return(
        <View style={styles.homeContainer}>
            <InputText />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: "center",
        alignItems: "center"
    }
})