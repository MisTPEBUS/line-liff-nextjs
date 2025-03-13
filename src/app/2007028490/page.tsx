"use client";
import { useEffect, useState } from "react";
import liff from "@line/liff";

export type userProfile = {
  userId: string;
  displayName: string;
};
const MyComponent = () => {
  const [user, setUser] = useState<userProfile>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const liffID = "2007049862-Le590xkP".trim();

      liff
        .init({ liffId: liffID })
        .then(() => {
          // 初始化成功後取得 profile 資訊
          liff
            .getProfile()
            .then((profile) => {
              setUser(profile);
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
      {user ? (
        <p>
          Your user ID: {user.userId} {user.displayName}
        </p>
      ) : (
        <p>正在載入使用者資料...</p>
      )}
    </div>
  );
};

export default MyComponent;
