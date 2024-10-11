import { View, Image, StyleSheet } from "react-native";
import * as colors from "../../constants/colors";
import InputText from "@/src/components/input";
import Button from "@/src/components/button";
import TextButton from "@/src/components/textButton";

export default function Register(){
    return(
        <View style={styles.registerContainer}>
            <Image source={require('../../assets/register.png')} style={styles.image}/>
            <InputText icon="person" placeholderText="Your Username"/>
            <InputText icon="email" placeholderText="youremail@email.com"/>
            <InputText icon="lock" placeholderText="Set a password"/>
            <Button label="Register" color={colors.lightAquaGreen}/>
            <TextButton label="Already have a account?" onPress={()=>{}}/>
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