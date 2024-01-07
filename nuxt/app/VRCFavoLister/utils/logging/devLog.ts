/**
 * @/utils/logging/devLog.ts
 * included in `@/utils/index.ts`
 *
 * 開発環境であるときのみログを出力する関数
 * @param text
 */
export const devLog = (text: string) => {
  const config = useRuntimeConfig();
  if (config.public.phase !== "development") return;
  console.log(text);
};
