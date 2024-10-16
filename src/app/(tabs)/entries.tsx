import InputText from "@/src/components/input";
import { View } from "react-native";

export default function Entries(){
    return(
        <View>
            <InputText icon="attach-money" placeholderText="Value" onChangeText={handlerValue}/>
        </View>
    )
}