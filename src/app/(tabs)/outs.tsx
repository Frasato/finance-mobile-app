import InputText from "@/src/components/input";
import { StyleSheet, View } from "react-native";
import * as colors from "../../constants/colors";
import DropdownSelect from "react-native-input-select";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/src/components/button";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Outs(){

    const router = useRouter();
    const [value, setValue] = useState<number>(0);
    const [forWhat, setForWhat] = useState<string>('');
    const [category, setCategory] = useState();

    return(
        <View style={styles.container}>
            <InputText icon="money-off" placeholderText="Money out value..." onChangeText={()=>{}}/>
            <InputText icon="question-mark" placeholderText="For what?" onChangeText={()=>{}}/>
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
                        {label: 'Bills', value: 'bills'},
                        {label: 'Food', value: 'food'},
                        {label: 'Travel', value: 'travel'},
                        {label: 'Video Strems', value: 'streams'},
                        {label: 'Cats/Dogs', value: 'animals'},
                        {label: 'Others', value: 'other'},
                    ]}
                    selectedValue={category}
                    onValueChange={(text) => {}}
                    primaryColor={colors.white}
                />
                <Button color={colors.lightAquaGreen} label="Take Out" onPress={()=>{}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.deepDarkBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inDropDown: {
        backgroundColor: colors.deepDarkBlue,
        borderColor: colors.white
    },
})