"use client"; // 必須加上這行，讓 Next.js 知道這是 Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ 改成 next/navigation
import { initLiff } from "@/utils/liff"; // 請確認路徑正確

const LiffAuthPage = () => {
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      await initLiff();
      router.push("/liff/profile"); // 成功登入後跳轉
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
