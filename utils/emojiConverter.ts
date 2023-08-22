export function convertListToJson(list: string): string {
  const lines = list.split("\n");
  const emojis = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("#") || line === "") {
      continue;
    }

    const [codePoint, qualifiers] = line.split(";").map((item) => item.trim());
    const [emoji, description] = qualifiers
      .split("#")
      .map((item) => item.trim());
    const synonyms = description
      .split(" ")
      .filter((word) => word !== "")
      .map((word) => word.trim());

    emojis.push({
      emoji: codePoint.trim(),
      name: description,
      description: synonyms,
    });
  }

  return JSON.stringify(emojis, null, 2);
}

// Example usage
const inputList = `
# subgroup: face-tongue
1F60B                                                  ; fully-qualified     # 😋 E0.6 face savoring food
1F61B                                                  ; fully-qualified     # 😛 E1.0 face with tongue
1F61C                                                  ; fully-qualified     # 😜 E0.6 winking face with tongue
1F92A                                                  ; fully-qualified     # 🤪 E5.0 zany face
1F61D                                                  ; fully-qualified     # 😝 E0.6 squinting face with tongue
1F911                                                  ; fully-qualified     # 🤑 E1.0 money-mouth face

# subgroup: face-hand
1F917                                                  ; fully-qualified     # 🤗 E1.0 smiling face with open hands
1F92D                                                  ; fully-qualified     # 🤭 E5.0 face with hand over mouth
1FAE2                                                  ; fully-qualified     # 🫢 E14.0 face with open eyes and hand over mouth
1FAE3                                                  ; fully-qualified     # 🫣 E14.0 face with peeking eye
1F92B                                                  ; fully-qualified     # 🤫 E5.0 shushing face
1F914                                                  ; fully-qualified     # 🤔 E1.0 thinking face
1FAE1                                                  ; fully-qualified     # 🫡 E14.0 saluting face

# subgroup: face-neutral-skeptical
1F910                                                  ; fully-qualified     # 🤐 E1.0 zipper-mouth face
1F928                                                  ; fully-qualified     # 🤨 E5.0 face with raised eyebrow
1F610                                                  ; fully-qualified     # 😐 E0.7 neutral face
1F611                                                  ; fully-qualified     # 😑 E1.0 expressionless face
1F636                                                  ; fully-qualified     # 😶 E1.0 face without mouth
1FAE5                                                  ; fully-qualified     # 🫥 E14.0 dotted line face
1F636 200D 1F32B FE0F                                  ; fully-qualified     # 😶‍🌫️ E13.1 face in clouds
1F636 200D 1F32B                                       ; minimally-qualified # 😶‍🌫 E13.1 face in clouds
1F60F                                                  ; fully-qualified     # 😏 E0.6 smirking face
1F612                                                  ; fully-qualified     # 😒 E0.6 unamused face
1F644                                                  ; fully-qualified     # 🙄 E1.0 face with rolling eyes
1F62C                                                  ; fully-qualified     # 😬 E1.0 grimacing face
1F62E 200D 1F4A8                                       ; fully-qualified     # 😮‍💨 E13.1 face exhaling
1F925                                                  ; fully-qualified     # 🤥 E3.0 lying face
1FAE8                                                  ; fully-qualified     # 🫨 E15.0 shaking face
`;

const jsonData = convertListToJson(inputList);
console.log(jsonData);
