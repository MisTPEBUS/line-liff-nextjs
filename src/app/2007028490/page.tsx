"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [liffInitialized, setLiffInitialized] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // 檢查是否已載入 LIFF SDK
    if (!window.liff) {
      const script = document.createElement("script");
      script.src = "https://static.line-scdn.net/liff/edge/2.1/sdk.js";
      script.onload = () => {
        initializeLiff();
      };
      document.body.appendChild(script);
    } else {
      initializeLiff();
    }
  }, []);

  const initializeLiff = async () => {
    try {
      // 用從 LINE Developers 取得的 LIFF ID 替換 'YOUR_LIFF_ID'
      await window.liff.init({ liffId: "2007049862-Le590xkP" });
      setLiffInitialized(true);

      // 若使用者已登入，取得使用者資訊
      if (window.liff.isLoggedIn()) {
        const profile = await window.liff.getProfile();
        setUserId(profile.userId);
        alert(2);
      } else {
        alert(1);
        // 若尚未登入，則導向 LIFF 登入（根據需求可啟用）
        window.liff.login();
      }
    } catch (error) {
      console.error("LIFF 初始化失敗", error);
    }
  };

  return (
    <div>
      <h1>Next.js LIFF 範例</h1>
      {liffInitialized ? (
        <p>
          LIFF 已初始化
          {userId ? `，使用者ID：${userId}` : "，但尚未取得使用者資訊"}
        </p>
      ) : (
        <p>正在初始化 LIFF...</p>
      )}
    </div>
  );
}
