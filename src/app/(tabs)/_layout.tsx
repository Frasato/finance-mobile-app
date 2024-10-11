import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as colors from "../../constants/colors";

export default function TabsLayouts(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.darkBlue,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: colors.lightOrange,
                tabBarInactiveTintColor: colors.darkOrange,
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialIcons name="home" size={size} color={color}/>
                )
            }}/>
        </Tabs>
    )
}