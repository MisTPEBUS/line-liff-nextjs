"use client"; // 必須加上這行，讓 Next.js 知道這是 Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ 改成 next/navigation
import { initLiff } from "@/utils/liff"; // 請確認路徑正確

const LiffAuthPage = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initLiff();
        if (!window.liff.isLoggedIn()) {
          window.liff.login();
          return;
        }
        const profileData = await window.liff.getProfile();
        console.log("取得的 profile 資料：", profileData);
        setProfile(profileData);
        // router.push("/liff/profile");
      } catch (error) {
        console.error("LIFF 初始化或取得 profile 失敗：", error);
      }
    };

    initialize();
  }, [router]);

  return (
    <div>
      <h1>LINE LIFF 授權中...</h1>
    </div>
  );
};

export default LiffAuthPage;
