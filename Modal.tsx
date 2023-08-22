import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import EmojiSelector from "react-native-emoji-selector";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSetNewEmoji: (emoji: any) => void;
};

const FlyoutModal: React.FC<Props> = (props: Props) => {
  const setEmoji = (emoji: string) => {
    console.log("emoji ->", emoji);
    props.onSetNewEmoji(emoji);
  };

  return (
    <Modal visible={props.visible} transparent animationType="slide">
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.emojisContent}>
            <EmojiSelector onEmojiSelected={setEmoji} />
          </View>
          <Text style={styles.modalText} onPress={props.onClose}>
            Close
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginTop: 450,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  emojisContent: {
    flex: 1,
  },
});

export default FlyoutModal;
