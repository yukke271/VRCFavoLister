// 配下のディレクトリのオートインポートを有効にする
export { devLog } from "@/utils/logging/devLog";
export { worldsParser } from "@/utils/parser/worldsParser";
export const isMobile = () => {
  // サイトにアクセスしている端末がモバイル端末かどうかを画面の幅で判定する
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(max-device-width: 640px)").matches
  ) {
    return true;
  } else {
    return false;
  }
};
