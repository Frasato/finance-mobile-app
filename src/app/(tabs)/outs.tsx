import InputText from "@/src/components/input";
import { StyleSheet, View } from "react-native";
import * as colors from "../../constants/colors";

export default function Outs(){
    return(
        <View style={styles.container}>
            <InputText icon="money-off" placeholderText="Money out value..." onChangeText={()=>{}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: 'center',
        alignItems: 'center'
    }
})