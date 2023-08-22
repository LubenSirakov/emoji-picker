import { View } from "react-native";
import TwemojiScreen from "./TwemojiScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <TwemojiScreen />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 30,
        }}
      ></View>
    </View>
  );
}
