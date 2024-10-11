import { Text, View, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

export default function Home(){
    return(
        <View style={styles.homeContainer}>
            <Text>Home</Text>
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