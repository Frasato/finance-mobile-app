import { View, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

export default function Register(){
    return(
        <View style={styles.registerContainer}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: 'center',
        alignItems: 'center'
    }
})