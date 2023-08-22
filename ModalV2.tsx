import React, { useCallback, useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import {
  getEmojiURI,
  getEmojiImageSourceWithCategory,
  searchEmojis,
} from "./utils/utilFunctions";
import {
  Emoji,
  EmojiListWithCategories,
  emojisV3,
  EmojiV3,
  EmojisV3WithCategories,
} from "./constants/emojis";
import EmojiTabs from "./EmojiTabs";

import emojis from "emojibase-data/en/compact.json";
import { CompactEmoji } from "emojibase";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSetNewEmoji: (emoji: any) => void;
};

const FlyoutModalV2: React.FC<Props> = (props: Props) => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number>(0);
  const [inputText, setInputText] = useState("Search emojis...");
  const [filteredEmojis, setFilteredEmojis] = useState<
    EmojiListWithCategories[]
  >(EmojisV3WithCategories);

  const setEmoji = (emoji: EmojiV3) => {
    console.log("emoji ->", emoji);
    props.onSetNewEmoji(emoji);
  };

  // const handleSearch = (text: string) => {
  //   const filteredEmojis = emojis.filter((emoji) =>
  //     emoji.name.toLowerCase().includes(text.toLowerCase())
  //   );
  //   setInputText(text);
  //   setFilteredEmojis(filteredEmojis);
  // };

  const handleSectionPress = (index: number) => {
    setSelectedSectionIndex(index);
  };

  // const renderSectionHeader = ({ section }: { section: EmojiSection }) => (
  //   <TouchableOpacity onPress={() => handleSectionPress(section.index)}>
  //     <Text style={styles.sectionHeader}>{section.title}</Text>
  //   </TouchableOpacity>
  // );

  const handleSearch = useCallback(
    (text: string) => {
      if (!text || text === "Search emojis...") {
        setInputText("Search emojis...");
        setFilteredEmojis(emojis);
        return;
      }
      const newlyFilteredEmojis = EmojisV3WithCategories.map((category) => ({
        ...category,
        data: category.data.filter((emoji) =>
          emoji.name.toLowerCase().includes(text.toLowerCase())
        ),
      }));
      setInputText(text);
      setFilteredEmojis(newlyFilteredEmojis);
    },
    [filteredEmojis, setFilteredEmojis, inputText, setInputText]
  );

  const renderEmoji = useCallback(
    (emoji: EmojiV3): JSX.Element => {
      console.log("renderEmoji", emoji);
      return (
        <TouchableWithoutFeedback
          key={emoji.name}
          onPress={(event: GestureResponderEvent) => setEmoji(emoji)}
        >
          <Image
            source={getEmojiImageSourceWithCategory(emoji)}
            style={{ width: 40, height: 40, margin: 15 }}
          />
        </TouchableWithoutFeedback>
      );
    },
    [emojis]
  );

  return (
    <Modal visible={props.visible} transparent animationType="slide">
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText} onPress={props.onClose}>
            Close
          </Text>

          <View
            style={{
              flex: 0.2,
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
          <EmojiTabs />
          <SafeAreaView
            style={{
              flex: 1,
              marginTop: StatusBar.currentHeight,
            }}
          >
            <SectionList
              sections={filteredEmojis}
              keyExtractor={(item, index) => item.name + index}
              renderItem={({ item }) => renderEmoji(item)}
              stickySectionHeadersEnabled={true}
              renderSectionHeader={({ section: { title } }) =>
                !inputText || inputText === "Search emojis..." ? (
                  <View
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        backgroundColor: "white",
                        width: 350,
                      }}
                    >
                      {title}
                    </Text>
                  </View>
                ) : null
              }
              keyboardDismissMode="none"
              contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
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
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
});

export default FlyoutModalV2;
