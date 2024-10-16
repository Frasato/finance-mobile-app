import InputText from "@/src/components/input";
import { useState } from "react";
import { View } from "react-native";

export default function Entries(){

    const [value, setValue] = useState<number>(0);

    const handlerValue = (text: string) => {
        const valueNumber: number = Number(text);
        setValue(valueNumber);
    }

    return(
        <View>
            <InputText icon="attach-money" placeholderText="Value" onChangeText={(text) => handlerValue(text)}/>
        </View>
    )
}