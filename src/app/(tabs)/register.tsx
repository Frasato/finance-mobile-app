import { View, Image, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

export default function Register(){
    return(
        <View style={styles.registerContainer}>
            <Image source={require('../../assets/register.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70 * 3,
        height: 50 * 3,
        marginBottom: 15,
    },
})