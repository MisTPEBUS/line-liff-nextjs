"use client";
import { getLiffUserId, initLiff } from "@/utils/liff";
import { useEffect, useState } from "react";

const LIFF_ID = "2007049862-Le590xkP"; // 記得替換成你的 LIFF ID

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserId() {
      await initLiff();
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
