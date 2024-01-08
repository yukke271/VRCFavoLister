/**
 * @/utils/download/downloadJSON.ts
 * included in `@/utils/index.ts`
 *
 * 受け取ったAvatar型かWorld型の配列を重複を排除してJSON形式にしてクライアントにダウンロードさせる
 * @param List Avatar型かWorld型の配列
 */
export const downloadJSON = (List: any[]) => {
  // 重複を排除する
  const uniqList = List.filter((element, index, self) => {
    return (
      self.findIndex((e) => {
        return e.id === element.id;
      }) === index
    );
  });
  // JSON形式にする
  const json = JSON.stringify(uniqList, null, 2);
  // ダウンロードさせる
  const blob = new Blob([json], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "VRCFavoLister.json";
  link.click();
};
