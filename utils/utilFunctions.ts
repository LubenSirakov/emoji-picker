import { EmojiV3 } from "../constants/emojis";
import { CompactEmoji } from "emojibase";

export const EMOJIS_BASE_URL =
  "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets";

export function getEmojiURI(emoji: CompactEmoji): {
  uri: string;
} {
  if (!emoji) {
    return { uri: `${EMOJIS_BASE_URL}/72x72/2b50.png` };
  }

  return {
    uri: `${EMOJIS_BASE_URL}/72x72/${emoji.hexcode.toLowerCase()}.png`,
  };
}

export function getEmojiImageSourceWithCategory(emoji: EmojiV3): {
  uri: string;
} {
  return {
    uri: emoji
      ? `${EMOJIS_BASE_URL}/72x72/${emoji.codepoint.toLowerCase()}.png`
      : `${EMOJIS_BASE_URL}/72x72/2b50.png`, // Return default star emoji uri
  };
}

export function searchEmojis(text: string, emojis: CompactEmoji[]) {
  if (!text || text === "Search emojis...") {
    return { text: "Search emojis...", emojis };
  }

  const filteredByAnnotation = emojis.filter((emoji) => {
    return emoji.label?.toLowerCase().includes(text.toLowerCase());
  });

  const filteredByTags = emojis.filter((emoji) => {
    return emoji.tags?.includes(text.toLowerCase());
  });

  const filteredByUnicode = emojis.filter((emoji) => {
    return emoji.unicode?.includes(text);
  });

  const searchResults = [
    ...new Set([
      ...filteredByAnnotation,
      ...filteredByTags,
      ...filteredByUnicode,
    ]), // Remove duplicates
  ];

  return { searchText: text, filteredEmojis: searchResults };
}
