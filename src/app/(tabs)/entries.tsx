import InputText from "@/src/components/input";
import { useState } from "react";
import { View } from "react-native";
import DropdownSelect from "react-native-input-select";
import * as colors from "../../constants/colors";

export default function Entries(){

    const [value, setValue] = useState<number>(0);

    const handlerValue = (text: string) => {
        const valueNumber: number = Number(text);
        setValue(valueNumber);
    }

    return(
        <View>
            <InputText icon="attach-money" placeholderText="Value" onChangeText={(text) => handlerValue(text)}/>
            <DropdownSelect label="" placeholder="" options={[]} selectedValue={} onValueChange={} primaryColor={colors.darkBlue}/>
        </View>
    )
}