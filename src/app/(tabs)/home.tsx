import { Text, View, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

export default function Home(){
    return(
        <View style={styles.homeContainer}>
            <Text style={{color: 'white'}}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.deepDarkBlue
    },
})