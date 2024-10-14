import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as colors from "../../constants/colors";

export default function TabsLayouts(){
    return(
        <Tabs
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.darkBlue,
                    borderTopWidth: 0,
                    display: route.name === "index" || "register" ? 'none' : 'flex',
                },
                tabBarActiveTintColor: colors.lightOrange,
                tabBarInactiveTintColor: colors.darkOrange,
                tabBarShowLabel: false
            })}
        >
            <Tabs.Screen name="home" options={{tabBarStyle: {display: 'flex'}}}/>
        </Tabs>
    )
}