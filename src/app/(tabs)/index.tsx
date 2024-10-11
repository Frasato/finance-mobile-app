import { View, StyleSheet, Image } from "react-native";
import * as colors from "../../constants/colors";
import InputText from "@/src/components/input";
import Button from "@/src/components/button";
import TextButton from "@/src/components/textButton";
import { useRouter } from "expo-router";

export default function Login(){

    const router = useRouter();

    const registerRedirect = () =>{
        router.push("/register");
    }

    return(
        <View style={styles.homeContainer}>
            <Image source={require('../../assets/login.png')} style={styles.imageLogin}/>
            <InputText icon="email" placeholderText="financeapp@email.com"/>
            <InputText icon="lock" placeholderText="Password"/>
            <Button color={colors.lightAquaGreen} label="Login"/>
            <TextButton label="Register" onPress={registerRedirect}/>
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