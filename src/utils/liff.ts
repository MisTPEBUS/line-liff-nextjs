import liff from "@line/liff";

/**
 * 初始化 LIFF
 */
export const initLiff = async (): Promise<void> => {
  try {
    await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string });

    if (!liff.isLoggedIn()) {
      liff.login();
    }
  } catch (error) {
    console.error("LIFF 初始化失敗:", error);
  }
};

/**
 * 取得用戶資訊
 */
export const getProfile = async () => {
  if (!liff.isLoggedIn()) {
    return null;
  }

  try {
    const profile = await liff.getProfile();
    return profile;
  } catch (error) {
    console.error("取得用戶資訊失敗:", error);
    return null;
  }
};
