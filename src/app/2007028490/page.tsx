"use client";
import { useEffect, useState } from "react";
import liff from "@line/liff";

const MyComponent = () => {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      liff
        .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID_TP || "你的LIFF_ID" })
        .then(() => {
          // 初始化成功後取得 profile 資訊
          liff
            .getProfile()
            .then((profile) => {
              setUserId(profile.userId);
              console.log("User ID:", profile.userId);
            })
            .catch((err) => {
              console.error("取得 profile 失敗:", err);
            });
        })
        .catch((err) => {
          console.error("LIFF 初始化失敗:", err);
        });
    }
  }, []);

  return (
    <div>
      <h1>LIFF App</h1>
      {userId ? <p>Your user ID: {userId}</p> : <p>正在載入使用者資料...</p>}
    </div>
  );
};

export default MyComponent;
