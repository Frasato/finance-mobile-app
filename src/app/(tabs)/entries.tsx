import InputText from "@/src/components/input";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropdownSelect from "react-native-input-select";
import * as colors from "../../constants/colors";
import Button from "@/src/components/button";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Entries(){

    const [value, setValue] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const router = useRouter();

    const handlerValue = (text: string) => {
        const valueNumber: number = Number(text);
        setValue(valueNumber);
    }

    const handlerCategory = (text: any) => setCategory(text);

    const handlerEntries = () => {
        if(value != 0 && category != ''){
            router.replace("/(tabs)/home");
        }
    }

    return(
        <View style={styles.container}>
                <InputText icon="attach-money" placeholderText="Value" onChangeText={(text) => handlerValue(text)}/>
                <DropdownSelect
                    dropdownContainerStyle={{paddingHorizontal: 27}}
                    dropdownStyle={styles.inDropDown}
                    placeholderStyle={{color: colors.white}}
                    selectedItemStyle={{color: colors.white}}
                    autoCloseOnSelect={true}
                    dropdownIcon={
                        <MaterialIcons name="keyboard-arrow-down" size={15} color={colors.white}/>
                    }
                    placeholder="Select a category..."
                    options={[
                        {label: 'Pay-day', value: 'pay-day'},
                        {label: 'Sell', value: 'sell'},
                        {label: 'Other', value: 'other'},
                    ]}
                    selectedValue={category}
                    onValueChange={(text) => handlerCategory(text)}
                    primaryColor={colors.white}
                />
                <Button label="Add Entries" color={colors.lightAquaGreen} onPress={handlerEntries}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.deepDarkBlue,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inDropDown: {
        backgroundColor: colors.deepDarkBlue,
        borderColor: colors.white
    },
});