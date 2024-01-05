// fetchAPI.ts
interface LoginResponse {
  id: string;
  username: string;
  displayName: string;
  currentAvatarImageUrl: string;
  currentAvatarThumbnailImageUrl: string;
  status: string;
}

export default async function loginToVRChatAPI(
  username: string,
  password: string,
): Promise<LoginResponse> {
  // const configUrl = "https://api.vrchat.cloud/api/1/config";
  const apiUrl = "https://api.vrchat.cloud/api/1/auth/user";

  /*
  // apikeyを取得するためにconfigを取得する
  const configResponse: Response = await fetch(configUrl);
  // status code 200以外の場合はエラーを投げる
  if (!configResponse.ok) {
    throw new Error(`Failed to fetch config: ${configResponse.statusText}`);
  }
  const configData = await configResponse.json();
  const apiKey = configData.apiKey;
  */

  const apiKey = "JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26";
  // ログインする
  const response: Response = await $fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-VRChat-ApiVersion": "1",
      Authorization: `Basic ${btoa(`${username}:${password}:${apiKey}`)}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to log in: ${response.statusText}`);
  }
  const responseData = await response.json();
  return responseData as LoginResponse;
}
