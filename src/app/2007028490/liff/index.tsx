import { useEffect } from "react";
import { useRouter } from "next/router";
import { initLiff } from "@/utils/liff";

const LiffAuthPage = () => {
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      await initLiff();
      router.push("/liff/profile"); // 成功登入後跳轉到 Profile 頁面
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
