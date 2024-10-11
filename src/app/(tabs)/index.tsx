import { View, StyleSheet, Image } from "react-native";
import * as colors from "../../constants/colors";
import InputText from "@/src/components/input";
import Button from "@/src/components/button";

export default function Login(){
    return(
        <View style={styles.homeContainer}>
            <Image source={require('../../assets/login.png')} style={styles.imageLogin}/>
            <InputText icon="email" placeholderText="financeapp@email.com"/>
            <InputText icon="lock" placeholderText="Senha"/>
            <Button />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: "center",
        alignItems: "center"
    },
    imageLogin: {
        width: 105 * 2.4,
        height: 82 * 2.4,
        marginBottom: 20
    }
});