import liff from "@line/liff";

export async function initLiff(liffId: string) {
  try {
    await liff.init({ liffId });
    console.log("LIFF 初始化成功", liff.isLoggedIn());

    // 如果未登入，則自動導向登入
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  } catch (error) {
    console.error("LIFF 初始化失敗", error);
  }
}

export async function getLiffUserId() {
  try {
    if (!liff.isLoggedIn()) {
      console.warn("使用者尚未登入");
      return null;
    }
    const profile = await liff.getProfile();
    return profile.userId; // 取得 userId
  } catch (error) {
    console.error("取得 userId 失敗", error);
    return null;
  }
}
