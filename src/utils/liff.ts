import liff from "@line/liff";

export async function initLiff() {
  try {
    await liff.init({ liffId: "2007049862-Le590xkP" });
    console.log("LIFF 初始化成功", liff.isLoggedIn());

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
    alert(liff.getProfile());
    const profile = await liff.getProfile();
    alert(profile.userId);
    return profile.userId;
  } catch (error) {
    console.error("取得 userId 失敗", error);
    return null;
  }
}
export async function getProfile() {
  // ✅ 確保函式名稱是 getProfile
  try {
    if (!liff.isLoggedIn()) {
      console.warn("使用者尚未登入");
      return null;
    }
    return await liff.getProfile();
  } catch (error) {
    console.error("取得使用者資訊失敗", error);
    return null;
  }
}
