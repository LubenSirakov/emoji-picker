export type Emoji = {
  name: string;
  unified: string;
  non_qualified: null;
  docomo: string;
  au: null;
  softbank: null;
  google: string;
  image: string;
  sheet_x: number;
  sheet_y: number;
  short_name: string;
  short_names: string[];
  text: string | null;
  texts: string | null;
  category: string;
  subcategory: string;
  sort_order: number;
  added_in: string;
  has_img_apple: boolean;
  has_img_google: boolean;
  has_img_twitter: boolean;
  has_img_facebook: boolean;
};

export type EmojiV3 = {
  name: string;
  codepoint: string;
  emoji: string;
  description: string[];
};

export type EmojiListWithCategories = {
  title: string;
  categoryEmoji: string;
  data: EmojiV3[];
};

// export const emojis: Emoji[] = [
//   {
//     name: "grinning",
//     escapedUnicode: "\ud83d\ude00",
//   },
//   {
//     name: "smiley",
//     escapedUnicode: "\ud83d\ude03",
//   },
//   {
//     name: "smile",
//     escapedUnicode: "\ud83d\ude04",
//   },
//   {
//     name: "grin",
//     escapedUnicode: "\ud83d\ude01",
//   },
//   {
//     name: "laughing",
//     escapedUnicode: "\ud83d\ude06",
//   },
//   {
//     name: "satisfied",
//     escapedUnicode: "\ud83d\ude06",
//   },
//   {
//     name: "sweat_smile",
//     escapedUnicode: "\ud83d\ude05",
//   },
//   {
//     name: "rofl",
//     escapedUnicode: "\ud83e\udd23",
//   },
//   {
//     name: "joy",
//     escapedUnicode: "\ud83d\ude02",
//   },
//   {
//     name: "slightly_smiling_face",
//     escapedUnicode: "\ud83d\ude42",
//   },
//   {
//     name: "upside_down_face",
//     escapedUnicode: "\ud83d\ude43",
//   },
//   {
//     name: "melting_face",
//     escapedUnicode: "\ud83e\udee0",
//   },
//   {
//     name: "wink",
//     escapedUnicode: "\ud83d\ude09",
//   },
//   {
//     name: "blush",
//     escapedUnicode: "\ud83d\ude0a",
//   },
//   {
//     name: "innocent",
//     escapedUnicode: "\ud83d\ude07",
//   },
//   {
//     name: "smiling_face_with_three_hearts",
//     escapedUnicode: "\ud83e\udd70",
//   },
//   {
//     name: "heart_eyes",
//     escapedUnicode: "\ud83d\ude0d",
//   },
//   {
//     name: "star_struck",
//     escapedUnicode: "\ud83e\udd29",
//   },
//   {
//     name: "kissing_heart",
//     escapedUnicode: "\ud83d\ude18",
//   },
//   {
//     name: "kissing",
//     escapedUnicode: "\ud83d\ude17",
//   },
//   {
//     name: "money_mouth_face",
//     escapedUnicode: "\ud83e\udd11",
//   },
//   {
//     name: "kissing_closed_eyes",
//     escapedUnicode: "\ud83d\ude1a",
//   },
//   {
//     name: "kissing_smiling_eyes",
//     escapedUnicode: "\ud83d\ude19",
//   },
//   {
//     name: "smiling_face_with_tear",
//     escapedUnicode: "\ud83e\udd72",
//   },
//   {
//     name: "yum",
//     escapedUnicode: "\ud83d\ude0b",
//   },
//   {
//     name: "stuck_out_tongue",
//     escapedUnicode: "\ud83d\ude1b",
//   },
//   {
//     name: "hugs",
//     escapedUnicode: "\ud83e\udd17",
//   },
//   {
//     name: "face_with_peeking_eye",
//     escapedUnicode: "\ud83e\udee3",
//   },
//   {
//     name: "rocket",
//     escapedUnicode: "\ud83d\ude80",
//   },
//   {
//     name: "robot",
//     escapedUnicode: "\ud83e\udd16",
//   },
//   {
//     name: "poop",
//     escapedUnicode: "\ud83d\udca9",
//   },
//   {
//     name: "ghost",
//     escapedUnicode: "\ud83d\udc7b",
//   },
//   {
//     name: "smiley_cat ",
//     escapedUnicode: "\ud83d\ude3a",
//   },
//   {
//     name: "100 ",
//     escapedUnicode: "\ud83d\udcaf",
//   },
//   {
//     name: "middle_finger",
//     escapedUnicode: "\ud83d\udd95",
//   },
//   {
//     name: "rose",
//     escapedUnicode: "\ud83c\udf39",
//   },
//   {
//     name: "slot_machine",
//     escapedUnicode: "\ud83c\udfb0",
//   },
//   {
//     name: "tv",
//     escapedUnicode: "\ud83d\udcfa",
//   },
//   {
//     name: "chart",
//     escapedUnicode: "\ud83d\udcb9",
//   },
//   {
//     name: "chart_with_upwards_trend ",
//     escapedUnicode: "\ud83d\udcc8",
//   },
//   {
//     name: "bulgaria ",
//     escapedUnicode: "\ud83c\udde7\ud83c\uddec",
//   },
//   {
//     name: "statue_of_liberty",
//     escapedUnicode: "\ud83d\uddfd",
//   },
//   {
//     name: "statue_of_liberty",
//     escapedUnicode: "\ud83d\uddfd",
//   },
//   {
//     name: "eggplant",
//     escapedUnicode: "\ud83c\udf46",
//   },
// ];

// export const emojisV2: EmojiListWithCategories[] = [
//   {
//     title: "Smileys and people",
//     data: [
//       {
//         name: "grinning",
//         escapedUnicode: "\ud83d\ude00",
//       },
//       {
//         name: "smiley",
//         escapedUnicode: "\ud83d\ude03",
//       },
//       {
//         name: "smile",
//         escapedUnicode: "\ud83d\ude04",
//       },
//       {
//         name: "grin",
//         escapedUnicode: "\ud83d\ude01",
//       },
//       {
//         name: "laughing",
//         escapedUnicode: "\ud83d\ude06",
//       },
//       {
//         name: "satisfied",
//         escapedUnicode: "\ud83d\ude06",
//       },
//       {
//         name: "sweat_smile",
//         escapedUnicode: "\ud83d\ude05",
//       },
//       {
//         name: "rofl",
//         escapedUnicode: "\ud83e\udd23",
//       },
//       {
//         name: "joy",
//         escapedUnicode: "\ud83d\ude02",
//       },
//       {
//         name: "slightly_smiling_face",
//         escapedUnicode: "\ud83d\ude42",
//       },
//       {
//         name: "upside_down_face",
//         escapedUnicode: "\ud83d\ude43",
//       },
//       {
//         name: "melting_face",
//         escapedUnicode: "\ud83e\udee0",
//       },
//       {
//         name: "wink",
//         escapedUnicode: "\ud83d\ude09",
//       },
//       {
//         name: "blush",
//         escapedUnicode: "\ud83d\ude0a",
//       },
//       {
//         name: "innocent",
//         escapedUnicode: "\ud83d\ude07",
//       },
//       {
//         name: "smiling_face_with_three_hearts",
//         escapedUnicode: "\ud83e\udd70",
//       },
//       {
//         name: "heart_eyes",
//         escapedUnicode: "\ud83d\ude0d",
//       },
//       {
//         name: "star_struck",
//         escapedUnicode: "\ud83e\udd29",
//       },
//       {
//         name: "kissing_heart",
//         escapedUnicode: "\ud83d\ude18",
//       },
//       {
//         name: "kissing",
//         escapedUnicode: "\ud83d\ude17",
//       },
//       {
//         name: "money_mouth_face",
//         escapedUnicode: "\ud83e\udd11",
//       },
//       {
//         name: "kissing_closed_eyes",
//         escapedUnicode: "\ud83d\ude1a",
//       },
//       {
//         name: "kissing_smiling_eyes",
//         escapedUnicode: "\ud83d\ude19",
//       },
//       {
//         name: "smiling_face_with_tear",
//         escapedUnicode: "\ud83e\udd72",
//       },
//       {
//         name: "yum",
//         escapedUnicode: "\ud83d\ude0b",
//       },
//       {
//         name: "stuck_out_tongue",
//         escapedUnicode: "\ud83d\ude1b",
//       },
//       {
//         name: "hugs",
//         escapedUnicode: "\ud83e\udd17",
//       },
//       {
//         name: "face_with_peeking_eye",
//         escapedUnicode: "\ud83e\udee3",
//       },
//     ],
//   },
//   {
//     title: "Random shit",
//     data: [
//       {
//         name: "star",
//         escapedUnicode: "\u2b50",
//       },
//       {
//         name: "rocket",
//         escapedUnicode: "\ud83d\ude80",
//       },
//       {
//         name: "robot",
//         escapedUnicode: "\ud83e\udd16",
//       },
//       {
//         name: "poop",
//         escapedUnicode: "\ud83d\udca9",
//       },
//       {
//         name: "ghost",
//         escapedUnicode: "\ud83d\udc7b",
//       },
//       {
//         name: "smiley_cat ",
//         escapedUnicode: "\ud83d\ude3a",
//       },
//       {
//         name: "100 ",
//         escapedUnicode: "\ud83d\udcaf",
//       },
//       {
//         name: "middle_finger",
//         escapedUnicode: "\ud83d\udd95",
//       },
//       {
//         name: "rose",
//         escapedUnicode: "\ud83c\udf39",
//       },
//       {
//         name: "slot_machine",
//         escapedUnicode: "\ud83c\udfb0",
//       },
//       {
//         name: "tv",
//         escapedUnicode: "\ud83d\udcfa",
//       },
//       {
//         name: "chart",
//         escapedUnicode: "\ud83d\udcb9",
//       },
//       {
//         name: "chart_with_upwards_trend ",
//         escapedUnicode: "\ud83d\udcc8",
//       },
//       {
//         name: "bulgaria ",
//         escapedUnicode: "\ud83c\udde7\ud83c\uddec",
//       },
//       {
//         name: "statue_of_liberty",
//         escapedUnicode: "\ud83d\uddfd",
//       },
//       {
//         name: "eggplant",
//         escapedUnicode: "\ud83c\udf46",
//       },
//     ],
//   },
// ];

export const emojisV3 = [
  {
    codepoint: "1F600",
    emoji: "😀",
    name: "Grinning Face",
    description: ["smiling", "face", "happy", "grinning"],
  },
  {
    codepoint: "1F603",
    emoji: "😃",
    name: "Grinning Face with Big Eyes",
    description: ["Smiling", "Face", "Big", "Eyes"],
  },
  {
    codepoint: "1F604",
    emoji: "😄",
    name: "Grinning Face with Smiling Eyes",
    description: ["Smiling", "Face", "smiling", "Eyes", "Grinning"],
  },
  {
    codepoint: "1F601",
    emoji: "😁",
    name: "Beaming Face with Smiling Eyes",
    description: ["Smiling", "Face", "Smiling", "Eyes", "Beaming"],
  },
  {
    codepoint: "1F606",
    emoji: "😆",
    name: "Grinning Squinting Face",
    description: ["Smiling Squinting Face"],
  },
  {
    codepoint: "1F605",
    emoji: "😅",
    name: "Grinning Face with Sweat",
    description: ["Smiling Face with Sweat"],
  },
  {
    codepoint: "1F923",
    emoji: "🤣",
    name: "Rolling on the Floor Laughing",
    description: ["Laughing Face", "ROFL"],
  },
  {
    codepoint: "1F602",
    emoji: "😂",
    name: "Face with Tears of Joy",
    description: ["Laughing Crying Face"],
  },
  {
    codepoint: "1F642",
    emoji: "🙂",
    name: "Slightly Smiling Face",
    description: ["Subtle Smile"],
  },
  {
    codepoint: "1F643",
    emoji: "🙃",
    name: "Upside-Down Face",
    description: ["Flipped Face"],
  },
  {
    codepoint: "1FAE0",
    emoji: "🫠",
    name: "Melting Face",
    description: ["Face Melting", "Melting Expression"],
  },
  {
    codepoint: "1F609",
    emoji: "😉",
    name: "Winking Face",
    description: ["Face with a Wink"],
  },
  {
    codepoint: "1F60A",
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    description: ["Happy Face with Smiling Eyes"],
  },
  {
    codepoint: "1F607",
    emoji: "😇",
    name: "Smiling Face with Halo",
    description: ["Angel Face", "Heavenly Smile"],
  },
  {
    codepoint: "1F970",
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    description: ["Face with Hearts", "In Love Face"],
  },
  {
    codepoint: "1F60D",
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    description: ["Heart Eyes", "Infatuated Face"],
  },
  {
    codepoint: "1F929",
    emoji: "🤩",
    name: "Star-Struck",
    description: ["Dazzled Face", "Excited Face"],
  },
  {
    codepoint: "1F618",
    emoji: "😘",
    name: "Face Blowing a Kiss",
    description: ["Kissing Face with Heart", "Sending Kisses"],
  },
  {
    codepoint: "1F617",
    emoji: "😗",
    name: "Kissing Face",
    description: ["Smooch", "Affectionate Face"],
  },
  {
    codepoint: "1F61A",
    emoji: "😚",
    name: "Kissing Face with Closed Eyes",
    description: ["Face with Closed Eyes and Kissing Lips"],
  },
  {
    codepoint: "1F619",
    emoji: "😙",
    name: "Kissing Face with Smiling Eyes",
    description: ["Face with Smiling Eyes and Kissing Lips"],
  },
  {
    codepoint: "1F972",
    emoji: "🥲",
    name: "Smiling Face with Tear",
    description: ["Face with Single Tear", "Happy Face with Tear"],
  },
  {
    codepoint: "1F60B",
    name: "face savoring food",
    emoji: "😋",
    description: ["yum", "delicious", "tasty"],
  },
  {
    codepoint: "1F61B",
    name: "face with tongue",
    emoji: "😛",
    description: ["playful", "cheeky", "joking"],
  },
  {
    codepoint: "1F61C",
    name: "winking face with tongue",
    emoji: "😜",
    description: ["flirting", "teasing", "mischievous"],
  },
  {
    codepoint: "1F92A",
    name: "zany face",
    emoji: "🤪",
    description: ["crazy", "wild", "goofy"],
  },
  {
    codepoint: "1F61D",
    name: "squinting face with tongue",
    emoji: "😝",
    description: ["sarcastic", "mocking", "silly"],
  },
  {
    codepoint: "1F911",
    name: "money-mouth face",
    emoji: "🤑",
    description: ["wealthy", "greedy", "rich"],
  },
  {
    codepoint: "1F917",
    name: "smiling face with open hands",
    emoji: "🤗",
    description: ["hug", "embrace", "joyful"],
  },
  {
    codepoint: "1F92D",
    name: "face with hand over mouth",
    emoji: "🤭",
    description: ["surprise", "shocked", "amazed"],
  },
  {
    codepoint: "1FAE2",
    name: "face with open eyes and hand over mouth",
    emoji: "🫢",
    description: ["astonished", "speechless", "startled"],
  },
  {
    codepoint: "1FAE3",
    name: "face with peeking eye",
    emoji: "🫣",
    description: ["curiosity", "sneaky", "spying"],
  },
  {
    codepoint: "1F92B",
    name: "shushing face",
    emoji: "🤫",
    description: ["quiet", "silence", "hush"],
  },
  {
    codepoint: "1F914",
    name: "thinking face",
    emoji: "🤔",
    description: ["pondering", "contemplating", "reflective"],
  },
  {
    codepoint: "1FAE1",
    name: "saluting face",
    emoji: "🫡",
    description: ["respect", "honor", "tribute"],
  },
  {
    codepoint: "1F910",
    name: "zipper-mouth face",
    emoji: "🤐",
    description: ["secret", "silent", "hush"],
  },
  {
    codepoint: "1F928",
    name: "face with raised eyebrow",
    emoji: "🤨",
    description: ["skepticism", "doubtful", "unimpressed"],
  },
  {
    codepoint: "1F610",
    name: "neutral face",
    emoji: "😐",
    description: ["indifferent", "expressionless", "blank"],
  },
  {
    codepoint: "1F611",
    name: "expressionless face",
    emoji: "😑",
    description: ["emotionless", "blank stare", "stoic"],
  },
  {
    codepoint: "1F636",
    name: "face without mouth",
    emoji: "😶",
    description: ["speechless", "wordless", "silent"],
  },
  {
    codepoint: "1FAE5",
    name: "dotted line face",
    emoji: "🫥",
    description: ["confused", "uncertain", "bewildered"],
  },
  {
    codepoint: "1F60F",
    name: "smirking face",
    emoji: "😏",
    description: ["sly", "mischievous", "smug"],
  },
  {
    codepoint: "1F612",
    name: "unamused face",
    emoji: "😒",
    description: ["displeased", "unimpressed", "bored"],
  },
  {
    codepoint: "1F644",
    name: "face with rolling eyes",
    emoji: "🙄",
    description: ["disbelief", "annoyed", "exasperated"],
  },
  {
    codepoint: "1F62C",
    name: "grimacing face",
    emoji: "😬",
    description: ["pain", "discomfort", "awkward"],
  },
  {
    codepoint: "1F925",
    name: "lying face",
    emoji: "🤥",
    description: ["deception", "dishonesty", "untrustworthy"],
  },
  {
    codepoint: "1F1F9-1F1F1",
    name: "flag: Timor-Leste",
    description: ["flag"],
    emoji: "🇹🇱",
  },
  {
    codepoint: "1F1F9-1F1F2",
    name: "flag: Turkmenistan",
    description: ["flag"],
    emoji: "🇹🇲",
  },
  {
    codepoint: "1F1F9-1F1F3",
    name: "flag: Tunisia",
    description: ["flag"],
    emoji: "🇹🇳",
  },
  {
    codepoint: "1F1F9-1F1F4",
    name: "flag: Tonga",
    description: ["flag"],
    emoji: "🇹🇴",
  },
  {
    codepoint: "1F1F9-1F1F7",
    name: "flag: Turkey",
    description: ["flag"],
    emoji: "🇹🇷",
  },
  {
    codepoint: "1F1F9-1F1F9",
    name: "flag: Trinidad & Tobago",
    description: ["flag"],
    emoji: "🇹🇹",
  },
  {
    codepoint: "1F1F9-1F1FB",
    name: "flag: Tuvalu",
    description: ["flag"],
    emoji: "🇹🇻",
  },
  {
    codepoint: "1F1F9-1F1FC",
    name: "flag: Taiwan",
    description: ["flag"],
    emoji: "🇹🇼",
  },
  {
    codepoint: "1F1F9-1F1FF",
    name: "flag: Tanzania",
    description: ["flag"],
    emoji: "🇹🇿",
  },
  {
    codepoint: "1F1FA-1F1E6",
    name: "flag: Ukraine",
    description: ["flag"],
    emoji: "🇺🇦",
  },
  {
    codepoint: "1F1FA-1F1EC",
    name: "flag: Uganda",
    description: ["flag"],
    emoji: "🇺🇬",
  },
  {
    codepoint: "1F1FA-1F1F2",
    name: "flag: U.S. Outlying Islands",
    description: ["flag"],
    emoji: "🇺🇲",
  },
  {
    codepoint: "1F1FA-1F1F3",
    name: "flag: United Nations",
    description: ["flag"],
    emoji: "🇺🇳",
  },
  {
    codepoint: "1F1FA-1F1F8",
    name: "flag: United States",
    description: ["flag"],
    emoji: "🇺🇸",
  },
  {
    codepoint: "1F1FA-1F1FE",
    name: "flag: Uruguay",
    description: ["flag"],
    emoji: "🇺🇾",
  },
  {
    codepoint: "1F1FA-1F1FF",
    name: "flag: Uzbekistan",
    description: ["flag"],
    emoji: "🇺🇿",
  },
  {
    codepoint: "1F1FB-1F1E6",
    name: "flag: Vatican City",
    description: ["flag"],
    emoji: "🇻🇦",
  },
  {
    codepoint: "1F1FB-1F1E8",
    name: "flag: St. Vincent & Grenadines",
    description: ["flag"],
    emoji: "🇻🇨",
  },
  {
    codepoint: "1F1FB-1F1EA",
    name: "flag: Venezuela",
    description: ["flag"],
    emoji: "🇻🇪",
  },
  {
    codepoint: "1F1FB-1F1EC",
    name: "flag: British Virgin Islands",
    description: ["flag"],
    emoji: "🇻🇬",
  },
  {
    codepoint: "1F1FB-1F1EE",
    name: "flag: U.S. Virgin Islands",
    description: ["flag"],
    emoji: "🇻🇮",
  },
  {
    codepoint: "1F1FB-1F1F3",
    name: "flag: Vietnam",
    description: ["flag"],
    emoji: "🇻🇳",
  },
  {
    codepoint: "1F1FB-1F1FA",
    name: "flag: Vanuatu",
    description: ["flag"],
    emoji: "🇻🇺",
  },
  {
    codepoint: "1F1FC-1F1EB",
    name: "flag: Wallis & Futuna",
    description: ["flag"],
    emoji: "🇼🇫",
  },
  {
    codepoint: "1F1FC-1F1F8",
    name: "flag: Samoa",
    description: ["flag"],
    emoji: "🇼🇸",
  },
  {
    codepoint: "1F1FD-1F1F0",
    name: "flag: Kosovo",
    description: ["flag"],
    emoji: "🇽🇰",
  },
  {
    codepoint: "1F1FE-1F1EA",
    name: "flag: Yemen",
    description: ["flag"],
    emoji: "🇾🇪",
  },
  {
    codepoint: "1F1FE-1F1F9",
    name: "flag: Mayotte",
    description: ["flag"],
    emoji: "🇾🇹",
  },
  {
    codepoint: "1F1FF-1F1E6",
    name: "flag: South Africa",
    description: ["flag"],
    emoji: "🇿🇦",
  },
];

export const EmojisV3WithCategories: EmojiListWithCategories[] = [
  {
    title: "face-smiling",
    categoryEmoji: "😀",
    data: [
      {
        codepoint: "1F600",
        emoji: "😀",
        name: "Grinning Face",
        description: ["Smiling Face", "Happy Face"],
      },
      {
        codepoint: "1F603",
        emoji: "😃",
        name: "Grinning Face with Big Eyes",
        description: ["Smiling Face with Big Eyes"],
      },
      {
        codepoint: "1F604",
        emoji: "😄",
        name: "Grinning Face with Smiling Eyes",
        description: ["Smiling Face with Smiling Eyes"],
      },
      {
        codepoint: "1F601",
        emoji: "😁",
        name: "Beaming Face with Smiling Eyes",
        description: ["Smiling Face with Smiling Eyes"],
      },
      {
        codepoint: "1F606",
        emoji: "😆",
        name: "Grinning Squinting Face",
        description: ["Smiling Squinting Face"],
      },
      {
        codepoint: "1F605",
        emoji: "😅",
        name: "Grinning Face with Sweat",
        description: ["Smiling Face with Sweat"],
      },
      {
        codepoint: "1F923",
        emoji: "🤣",
        name: "Rolling on the Floor Laughing",
        description: ["Laughing Face", "ROFL"],
      },
      {
        codepoint: "1F602",
        emoji: "😂",
        name: "Face with Tears of Joy",
        description: ["Laughing Crying Face"],
      },
      {
        codepoint: "1F642",
        emoji: "🙂",
        name: "Slightly Smiling Face",
        description: ["Subtle Smile"],
      },
      {
        codepoint: "1F643",
        emoji: "🙃",
        name: "Upside-Down Face",
        description: ["Flipped Face"],
      },
      {
        codepoint: "1FAE0",
        emoji: "🫠",
        name: "Melting Face",
        description: ["Face Melting", "Melting Expression"],
      },
      {
        codepoint: "1F609",
        emoji: "😉",
        name: "Winking Face",
        description: ["Face with a Wink"],
      },
      {
        codepoint: "1F60A",
        emoji: "😊",
        name: "Smiling Face with Smiling Eyes",
        description: ["Happy Face with Smiling Eyes"],
      },
      {
        codepoint: "1F607",
        emoji: "😇",
        name: "Smiling Face with Halo",
        description: ["Angel Face", "Heavenly Smile"],
      },
    ],
  },
  {
    title: "face-affection",
    categoryEmoji: "🥰",
    data: [
      {
        codepoint: "1F970",
        emoji: "🥰",
        name: "Smiling Face with Hearts",
        description: ["Face with Hearts", "In Love Face"],
      },
      {
        codepoint: "1F60D",
        emoji: "😍",
        name: "Smiling Face with Heart-Eyes",
        description: ["Heart Eyes", "Infatuated Face"],
      },
      {
        codepoint: "1F929",
        emoji: "🤩",
        name: "Star-Struck",
        description: ["Dazzled Face", "Excited Face"],
      },
      {
        codepoint: "1F618",
        emoji: "😘",
        name: "Face Blowing a Kiss",
        description: ["Kissing Face with Heart", "Sending Kisses"],
      },
      {
        codepoint: "1F617",
        emoji: "😗",
        name: "Kissing Face",
        description: ["Smooch", "Affectionate Face"],
      },
      {
        codepoint: "1F61A",
        emoji: "😚",
        name: "Kissing Face with Closed Eyes",
        description: ["Face with Closed Eyes and Kissing Lips"],
      },
      {
        codepoint: "1F619",
        emoji: "😙",
        name: "Kissing Face with Smiling Eyes",
        description: ["Face with Smiling Eyes and Kissing Lips"],
      },
      {
        codepoint: "1F972",
        emoji: "🥲",
        name: "Smiling Face with Tear",
        description: ["Face with Single Tear", "Happy Face with Tear"],
      },
    ],
  },
  {
    title: "face-tongue",
    categoryEmoji: "😋",
    data: [
      {
        codepoint: "1F60B",
        name: "face savoring food",
        emoji: "😋",
        description: ["yum", "delicious", "tasty"],
      },
      {
        codepoint: "1F61B",
        name: "face with tongue",
        emoji: "😛",
        description: ["playful", "cheeky", "joking"],
      },
      {
        codepoint: "1F61C",
        name: "winking face with tongue",
        emoji: "😜",
        description: ["flirting", "teasing", "mischievous"],
      },
      {
        codepoint: "1F92A",
        name: "zany face",
        emoji: "🤪",
        description: ["crazy", "wild", "goofy"],
      },
      {
        codepoint: "1F61D",
        name: "squinting face with tongue",
        emoji: "😝",
        description: ["sarcastic", "mocking", "silly"],
      },
      {
        codepoint: "1F911",
        name: "money-mouth face",
        emoji: "🤑",
        description: ["wealthy", "greedy", "rich"],
      },
    ],
  },
  {
    title: "face-hand",
    categoryEmoji: "🤗",
    data: [
      {
        codepoint: "1F917",
        name: "smiling face with open hands",
        emoji: "🤗",
        description: ["hug", "embrace", "joyful"],
      },
      {
        codepoint: "1F92D",
        name: "face with hand over mouth",
        emoji: "🤭",
        description: ["surprise", "shocked", "amazed"],
      },
      {
        codepoint: "1FAE2",
        name: "face with open eyes and hand over mouth",
        emoji: "🫢",
        description: ["astonished", "speechless", "startled"],
      },
      {
        codepoint: "1FAE3",
        name: "face with peeking eye",
        emoji: "🫣",
        description: ["curiosity", "sneaky", "spying"],
      },
      {
        codepoint: "1F92B",
        name: "shushing face",
        emoji: "🤫",
        description: ["quiet", "silence", "hush"],
      },
      {
        codepoint: "1F914",
        name: "thinking face",
        emoji: "🤔",
        description: ["pondering", "contemplating", "reflective"],
      },
      {
        codepoint: "1FAE1",
        name: "saluting face",
        emoji: "🫡",
        description: ["respect", "honor", "tribute"],
      },
    ],
  },
  {
    title: "face-neutral-skeptical",
    categoryEmoji: "😐",
    data: [
      {
        codepoint: "1F910",
        name: "zipper-mouth face",
        emoji: "🤐",
        description: ["secret", "silent", "hush"],
      },
      {
        codepoint: "1F928",
        name: "face with raised eyebrow",
        emoji: "🤨",
        description: ["skepticism", "doubtful", "unimpressed"],
      },
      {
        codepoint: "1F610",
        name: "neutral face",
        emoji: "😐",
        description: ["indifferent", "expressionless", "blank"],
      },
      {
        codepoint: "1F611",
        name: "expressionless face",
        emoji: "😑",
        description: ["emotionless", "blank stare", "stoic"],
      },
      {
        codepoint: "1F636",
        name: "face without mouth",
        emoji: "😶",
        description: ["speechless", "wordless", "silent"],
      },
      {
        codepoint: "1FAE5",
        name: "dotted line face",
        emoji: "🫥",
        description: ["confused", "uncertain", "bewildered"],
      },
      {
        codepoint: "1F636 200D 1F32B FE0F",
        name: "face in clouds",
        emoji: "😶‍🌫️",
        description: ["daydreaming", "lost in thought", "absent-minded"],
      },
      {
        codepoint: "1F636 200D 1F32B",
        name: "face in clouds",
        emoji: "😶‍🌫",
        description: ["daydreaming", "lost in thought", "absent-minded"],
      },
      {
        codepoint: "1F60F",
        name: "smirking face",
        emoji: "😏",
        description: ["sly", "mischievous", "smug"],
      },
      {
        codepoint: "1F612",
        name: "unamused face",
        emoji: "😒",
        description: ["displeased", "unimpressed", "bored"],
      },
      {
        codepoint: "1F644",
        name: "face with rolling eyes",
        emoji: "🙄",
        description: ["disbelief", "annoyed", "exasperated"],
      },
      {
        codepoint: "1F62C",
        name: "grimacing face",
        emoji: "😬",
        description: ["pain", "discomfort", "awkward"],
      },
      {
        codepoint: "1F62E 200D 1F4A8",
        name: "face exhaling",
        emoji: "😮‍💨",
        description: ["relief", "release", "letting go"],
      },
      {
        codepoint: "1F925",
        name: "lying face",
        emoji: "🤥",
        description: ["deception", "dishonesty", "untrustworthy"],
      },
      {
        codepoint: "1FAE8",
        name: "shaking face",
        emoji: "🫨",
        description: ["nervous", "anxious", "worried"],
      },
    ],
  },
  {
    title: "flags",
    categoryEmoji: "🏁",
    data: [
      {
        codepoint: "1F1F9-1F1F1",
        name: "flag: Timor-Leste",
        description: ["flag"],
        emoji: "🇹🇱",
      },
      {
        codepoint: "1F1F9-1F1F2",
        name: "flag: Turkmenistan",
        description: ["flag"],
        emoji: "🇹🇲",
      },
      {
        codepoint: "1F1F9-1F1F3",
        name: "flag: Tunisia",
        description: ["flag"],
        emoji: "🇹🇳",
      },
      {
        codepoint: "1F1F9-1F1F4",
        name: "flag: Tonga",
        description: ["flag"],
        emoji: "🇹🇴",
      },
      {
        codepoint: "1F1F9-1F1F7",
        name: "flag: Turkey",
        description: ["flag"],
        emoji: "🇹🇷",
      },
      {
        codepoint: "1F1F9-1F1F9",
        name: "flag: Trinidad & Tobago",
        description: ["flag"],
        emoji: "🇹🇹",
      },
      {
        codepoint: "1F1F9-1F1FB",
        name: "flag: Tuvalu",
        description: ["flag"],
        emoji: "🇹🇻",
      },
      {
        codepoint: "1F1F9-1F1FC",
        name: "flag: Taiwan",
        description: ["flag"],
        emoji: "🇹🇼",
      },
      {
        codepoint: "1F1F9-1F1FF",
        name: "flag: Tanzania",
        description: ["flag"],
        emoji: "🇹🇿",
      },
      {
        codepoint: "1F1FA-1F1E6",
        name: "flag: Ukraine",
        description: ["flag"],
        emoji: "🇺🇦",
      },
      {
        codepoint: "1F1FA-1F1EC",
        name: "flag: Uganda",
        description: ["flag"],
        emoji: "🇺🇬",
      },
      {
        codepoint: "1F1FA-1F1F2",
        name: "flag: U.S. Outlying Islands",
        description: ["flag"],
        emoji: "🇺🇲",
      },
      {
        codepoint: "1F1FA-1F1F3",
        name: "flag: United Nations",
        description: ["flag"],
        emoji: "🇺🇳",
      },
      {
        codepoint: "1F1FA-1F1F8",
        name: "flag: United States",
        description: ["flag"],
        emoji: "🇺🇸",
      },
      {
        codepoint: "1F1FA-1F1FE",
        name: "flag: Uruguay",
        description: ["flag"],
        emoji: "🇺🇾",
      },
      {
        codepoint: "1F1FA-1F1FF",
        name: "flag: Uzbekistan",
        description: ["flag"],
        emoji: "🇺🇿",
      },
      {
        codepoint: "1F1FB-1F1E6",
        name: "flag: Vatican City",
        description: ["flag"],
        emoji: "🇻🇦",
      },
      {
        codepoint: "1F1FB-1F1E8",
        name: "flag: St. Vincent & Grenadines",
        description: ["flag"],
        emoji: "🇻🇨",
      },
      {
        codepoint: "1F1FB-1F1EA",
        name: "flag: Venezuela",
        description: ["flag"],
        emoji: "🇻🇪",
      },
      {
        codepoint: "1F1FB-1F1EC",
        name: "flag: British Virgin Islands",
        description: ["flag"],
        emoji: "🇻🇬",
      },
      {
        codepoint: "1F1FB-1F1EE",
        name: "flag: U.S. Virgin Islands",
        description: ["flag"],
        emoji: "🇻🇮",
      },
      {
        codepoint: "1F1FB-1F1F3",
        name: "flag: Vietnam",
        description: ["flag"],
        emoji: "🇻🇳",
      },
      {
        codepoint: "1F1FB-1F1FA",
        name: "flag: Vanuatu",
        description: ["flag"],
        emoji: "🇻🇺",
      },
      {
        codepoint: "1F1FC-1F1EB",
        name: "flag: Wallis & Futuna",
        description: ["flag"],
        emoji: "🇼🇫",
      },
      {
        codepoint: "1F1FC-1F1F8",
        name: "flag: Samoa",
        description: ["flag"],
        emoji: "🇼🇸",
      },
      {
        codepoint: "1F1FD-1F1F0",
        name: "flag: Kosovo",
        description: ["flag"],
        emoji: "🇽🇰",
      },
      {
        codepoint: "1F1FE-1F1EA",
        name: "flag: Yemen",
        description: ["flag"],
        emoji: "🇾🇪",
      },
      {
        codepoint: "1F1FE-1F1F9",
        name: "flag: Mayotte",
        description: ["flag"],
        emoji: "🇾🇹",
      },
      {
        codepoint: "1F1FF-1F1E6",
        name: "flag: South Africa",
        description: ["flag"],
        emoji: "🇿🇦",
      },
    ],
  },
];
