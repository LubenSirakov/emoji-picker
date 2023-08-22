import { Image, TouchableWithoutFeedback, View } from "react-native";
import { getEmojiURI } from "./utils/utilFunctions";
import { CompactEmoji } from "emojibase";

type Props = {
  emoji: CompactEmoji;
  size?: number;
};

export default function Emoji(props: Props) {
  const emojiUri = getEmojiURI(props.emoji);

  return (
    <>
      <Image
        source={emojiUri}
        style={{ width: props.size, height: props.size, margin: 15 }}
      />
    </>
  );
}
