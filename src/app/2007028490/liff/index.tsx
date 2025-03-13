import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLiffUserId, initLiff } from "@/utils/liff";

const LIFF_ID = "2007049862-Le590xkP"; // 記得替換

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      await initLiff(LIFF_ID); // ✅ 傳入 LIFF_ID
      const id = await getLiffUserId();
      if (id) {
        setUserId(id);
        router.push("/liff/profile"); // 成功登入後跳轉 Profile 頁面
      }
    };

    initialize();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">取得 LIFF User ID</h1>
      {userId ? (
        <p className="mt-4 text-lg">你的 User ID：{userId}</p>
      ) : (
        <p>載入中...</p>
      )}
    </div>
  );
}
