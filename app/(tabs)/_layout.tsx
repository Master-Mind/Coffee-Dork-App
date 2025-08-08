import { Colors } from "@/constants/Colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors.tabIconSelected,
      tabBarInactiveTintColor: Colors.tabIconUnselected,
      tabBarActiveBackgroundColor: Colors.headerBackground,
      tabBarInactiveBackgroundColor: Colors.headerBackground,
      headerShown: false
    }}>
      <Tabs.Screen 
        name="(home)/index"
        options={{
          title:"Past Brews",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="coffee" color={color}/>
        }}/>
      <Tabs.Screen 
        name="(beans)/index"
        options={{
          title:"Beans",
          tabBarIcon: ({ color }) => <Feather size={28} name="shopping-bag" color={color}/>
        }}/>
      <Tabs.Screen 
        name="(brew)/index"
        options={{
          title:"Brew",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="coffee-maker" color={color}/>
        }}/>
    </Tabs>;
}
