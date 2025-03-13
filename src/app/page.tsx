import { useEffect, useState } from "react";
import { initLiff, getLiffUserId } from "../utils/liff";

const LIFF_ID = "你的_LIFF_ID"; // 記得替換成你的 LIFF ID

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserId() {
      await initLiff(LIFF_ID);
      const id = await getLiffUserId();
      setUserId(id);
    }

    fetchUserId();
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
