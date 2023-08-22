import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import FlyoutModal from "./Modal";

export default function EmojiSelectorScreen() {
  const [inputText, setInputText] = useState("");
  const [emoji, setEmoji] = useState("⭐");
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const onSetEmoji = (emoji: any) => {
    setEmoji(emoji);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View style={styles.container}>
          <FlyoutModal
            visible={modalVisible}
            onClose={handleCloseModal}
            onSetNewEmoji={onSetEmoji}
          />
        </View>
        <Text>EmojiSelector</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Welcome back, </Text>
          <Pressable onPress={handleOpenModal}>
            <Text>{emoji}</Text>
          </Pressable>
          <Text> {inputText ? inputText : "username"}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 240,
            backgroundColor: "azure",
            fontSize: 20,
          }}
          placeholder="Type here..."
          onChangeText={(text) => setInputText(text)}
          keyboardAppearance="default"
        />
      </View>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
