import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../contexts/userContext";
import * as colors from "../constants/colors";

export default function Welcome(){

    const {username} = useContext(User);

    return(
        <View style={styles.container}>
            <Text>{username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    }
})