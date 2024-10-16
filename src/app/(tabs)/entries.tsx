import InputText from "@/src/components/input";
import { useState } from "react";
import { View } from "react-native";
import DropdownSelect from "react-native-input-select";
import * as colors from "../../constants/colors";

export default function Entries(){

    const [value, setValue] = useState<number>(0);
    const [category, setCategory] = useState<string>('');

    const handlerValue = (text: string) => {
        const valueNumber: number = Number(text);
        setValue(valueNumber);
    }

    const handlerCategory = (text: any) => setCategory(text);

    return(
        <View>
            <InputText icon="attach-money" placeholderText="Value" onChangeText={(text) => handlerValue(text)}/>
            <DropdownSelect 
                label="Entries..."
                placeholder="Select a category..."
                options={[
                    {title: 'Pay-day', data: 'pay-day'},
                    {title: 'Sell', data: 'sell'},
                    {title: 'Other', data: 'other'},
                ]}
                selectedValue={category}
                onValueChange={(text) => handlerCategory(text)}
                primaryColor={colors.darkBlue}
            />
        </View>
    )
}