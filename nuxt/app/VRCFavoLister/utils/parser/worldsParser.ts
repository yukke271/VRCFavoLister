/**
 * @/utils/parser/worldsParser.ts
 * included in `@/utils/index.ts`
 *
 * 受け取ったjson配列をWorld型の配列に変換する
 * @param text
 * @returns World型の配列
 */
export const worldsParser = (json: string) => {
  // 受け取ったjson配列をパースする
  let worldsJson: JSON[] = [];
  try {
    worldsJson = JSON.parse(json);
  } catch (error) {
    throw new Error("JSONのパースに失敗しました");
  }

  const worldList: World[] = [];
  worldsJson.forEach((world: World) => {
    worldList.push(world);
  });
};
