import { Text, View } from "react-native";
import { EmojisV3WithCategories } from "./constants/emojis";
import { useCallback } from "react";

const EmojiTabs: React.FC<Props> = () => {
  const categoriesList = EmojisV3WithCategories.map((category) => [
    category.title,
    category.categoryEmoji,
  ]);

  const renderTab = useCallback((category: string) => {
    return <Text>{category}</Text>;
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {categoriesList.map((category) => renderTab(category[1]))}
    </View>
  );
};

export default EmojiTabs;
