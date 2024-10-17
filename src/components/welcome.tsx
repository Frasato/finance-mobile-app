import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../contexts/userContext";
import * as colors from "../constants/colors";

export default function Welcome(){

    const {usernameContext, userEmail} = useContext(User);

    return(
        <View style={styles.container}>
            <Text>{usernameContext}</Text>
            <Text>{userEmail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    }
})