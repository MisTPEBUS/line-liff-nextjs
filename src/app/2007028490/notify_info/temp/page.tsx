"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import liff from "@line/liff";
const NotificationBindingPage = (data: any) => {
  const router = useRouter();

  // 點選「是，解除綁定」按鈕時呼叫此函式
  const handleUnbind = async () => {
    try {
      await axios.delete(
        "https://line-notify-18ab.onrender.com/v1/api/lineHook/user/2007028490/U77bc55ff44a63d93b88e891780b6c04f"
      );
      // DELETE 成功後導向其他頁面，請替換成你想離開的頁面路由
      window.liff.closeWindow();
    } catch (error) {
      console.error("解除綁定失敗：", error);
      // 可視需求顯示錯誤提示訊息
    }
  };

  // 點選「否，保持綁定」按鈕時直接離開頁面
  const handleKeepBinding = () => {
    window.liff.closeWindow();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-orange-500">
        臺北客運通知綁定
      </h1>

      <Card className="w-full p-6 bg-white shadow-lg rounded-xl border-none">
        <p className="text-gray-700 mt-4 text-center">
          您已經綁定至通知，是否要解除綁定？
        </p>
        <CardContent className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-bold">Lobinda_Wang 19541</p>
          <p className="text-gray-600">
            您好，您目前已綁定並同意接受以下範圍的相關業務通知：
          </p>
          <ul className="text-gray-600 mt-2 space-y-1">
            <li>公司：台北客運</li>
            <li>部門：D78 資訊中心</li>
            <li>職稱：專員</li>
            <li>專案群組：</li>
            <li>員工編號：19541</li>
            <li>姓名：Lobinda Wang</li>
          </ul>
        </CardContent>
        <div className="mt-6 flex flex-col space-y-2">
          <Button
            className="w-full bg-green-500 text-white py-2 rounded font-extrabold hover:bg-green-600"
            onClick={handleUnbind}
          >
            是，解除綁定
          </Button>
          <Button
            className="w-full bg-gray-300 hover:bg-gray-400 py-2 rounded font-bold"
            onClick={handleKeepBinding}
          >
            否，保持綁定
          </Button>
        </div>
        <h6
          id="channel-id"
          className="text-sm bg-gray-200 p-2 mt-4 text-center"
        >
          ChannelId: 2006992891
        </h6>
      </Card>
    </div>
  );
};

export default NotificationBindingPage;
