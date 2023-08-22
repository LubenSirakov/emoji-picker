import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FlyoutModalV2 from "./ModalV2";
import { useState } from "react";
import FlyoutModalV3 from "./ModalV3";
import { CompactEmoji } from "emojibase";
import Emoji from "./Emoji";

export default function TwemojiScreen() {
  const [emoji, setEmoji] = useState<CompactEmoji>({
    group: 5,
    hexcode: "2B50",
    annotation: "star",
    order: 3679,
    tags: ["star"],
    unicode: "⭐️",
  });

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
          <FlyoutModalV3
            visible={modalVisible}
            onClose={handleCloseModal}
            onSetNewEmoji={onSetEmoji}
            onRequestClose={handleCloseModal}
          />
        </View>

        <Text>Twemoji</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={handleOpenModal}>
            <Emoji emoji={emoji} size={40} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Watchlist name</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      />
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
