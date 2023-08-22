import { useCallback, useState } from "react";
import {
  FlatList,
  GestureResponderEvent,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import emojis from "emojibase-data/en/compact.json";
import { CompactEmoji } from "emojibase";
import Emoji from "./Emoji";
import { searchEmojis } from "./utils/utilFunctions";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSetNewEmoji: (emoji: any) => void;
  onRequestClose: () => void;
};

const FlyoutModalV3: React.FC<Props> = (props: Props) => {
  const [inputText, setInputText] = useState("Search emojis...");
  const [filteredEmojis, setFilteredEmojis] = useState<CompactEmoji[]>(emojis);

  const setEmoji = (emoji: CompactEmoji) => {
    props.onSetNewEmoji(emoji);
    props.onClose();
  };

  const handleSearch = useCallback(
    (text: string) => {
      const { searchText, filteredEmojis } = searchEmojis(text, emojis);

      if (!searchText && !filteredEmojis) {
        setInputText("Search emojis...");
        setFilteredEmojis(emojis);
        return;
      }

      setInputText(searchText);
      setFilteredEmojis(filteredEmojis);
    },
    [filteredEmojis, setFilteredEmojis, inputText, setInputText]
  );

  const renderEmoji = useCallback(
    (emoji: CompactEmoji): JSX.Element => {
      return (
        <TouchableOpacity
          key={emoji.hexcode}
          onPress={(event: GestureResponderEvent) => setEmoji(emoji)}
        >
          <Emoji emoji={emoji} size={40} />
        </TouchableOpacity>
      );
    },
    [emojis]
  );

  return (
    <Modal
      visible={props.visible}
      transparent
      onRequestClose={props.onClose}
      animationType="slide"
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalText} onPress={props.onClose}>
              X
            </Text>

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextInput
                style={{
                  height: 30,
                  width: "100%",
                  backgroundColor: "lightgray",
                  borderRadius: 5,
                  borderColor: "gray",
                  fontSize: 20,
                }}
                placeholder={inputText}
                onChangeText={handleSearch}
                keyboardAppearance="default"
              />
            </View>
          </View>

          <SafeAreaView style={styles.listContainer}>
            <FlatList
              data={filteredEmojis}
              renderItem={({ item }) => renderEmoji(item)}
              keyExtractor={(item: CompactEmoji) => item.hexcode}
              numColumns={5}
              getItemLayout={(data, index) => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
            />
          </SafeAreaView>
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
    marginTop: 450,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    flex: 5,
  },
});

export default FlyoutModalV3;
