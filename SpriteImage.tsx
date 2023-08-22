import React from "react";
import { View, Image } from "react-native";
import {
  SpriteImageData,
  selectImageFromSpriteSheet,
} from "./utils/utilFunctions";

type Props = {
  emojiXPosition: number;
  emojiYPosition: number;
};

const SpriteImage: React.FC<Props> = (props: Props) => {
  const spriteImageData: SpriteImageData = {
    source: require("./assets/emojis/twemoji.png"),
    width: 34,
    height: 34,
  };

  const emoji = selectImageFromSpriteSheet(
    spriteImageData,
    props.emojiXPosition,
    props.emojiYPosition
  );

  console.log("emojiCoordinates", emoji);
  return (
    <View>
      <Image
        source={spriteImageData.source}
        style={{
          width: emoji.width, // Adjust the width and height to match the individual image size in the sprite sheet
          height: emoji.height,
          resizeMode: "contain", // Or use 'contain' or 'stretch' based on your requirements
          overflow: "hidden", // Crop the image to the specified width and height
          position: "absolute",
          top: 0, // Adjust the position to display the desired image from the sprite sheet
          left: 0,
          marginLeft: emoji.x,
          marginTop: emoji.y,
          borderRadius: 1,
          borderColor: "red",
        }}
      />
    </View>
  );
};

export default SpriteImage;
