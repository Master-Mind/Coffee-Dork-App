import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background
      }}
    >
      <Text>Heres a big list of brews</Text>
    </View>
  );
}
