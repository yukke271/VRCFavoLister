/**
 * @/utils/parser/avatarsParser.ts
 * included in `@/utils/index.ts`
 *
 * 受け取ったjson配列をAvatar型の配列に変換する
 * @param avatarList Avatar型の配列
 * @param json json配列
 */
export const avatarsParser = (avatarList: Avatar[], json: string) => {
  // 受け取ったjson配列をパースする
  let avatarsJson: JSON[] = [];
  try {
    avatarsJson = JSON.parse(json);
  } catch (error) {
    throw new Error("JSONのパースに失敗しました");
  }

  avatarsJson.forEach((avatar: Avatar) => {
    avatarList.push(avatar);
  });
};
