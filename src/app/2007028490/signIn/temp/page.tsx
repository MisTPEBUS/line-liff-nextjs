"use client";

import { useState } from "react";

interface UserData {
  company: string;
  groupCode: string;
  phone: string;
  job: string;
  dept: string;
  empId: string;
  name: string;
  channelId: string;
  userId: string;
}

const initialData: UserData = {
  company: "臺北客運",
  groupCode: "",
  phone: "",
  job: "",
  dept: "D78 資訊中心",
  empId: "19541",
  name: "Lobinda",
  channelId: "2007028490",
  userId: "U77bc55ff44a63d93b88e891780b6c04f",
};

const UserForm = () => {
  const [formData, setFormData] = useState<UserData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // 在此可以呼叫 API 或做其他後續處理
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-700">公司</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">群組代碼</label>
        <input
          type="text"
          name="groupCode"
          value={formData.groupCode}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">電話</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">職稱</label>
        <input
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">部門</label>
        <input
          type="text"
          name="dept"
          value={formData.dept}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">員工編號</label>
        <input
          type="text"
          name="empId"
          value={formData.empId}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">姓名</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Channel ID</label>
        <input
          type="text"
          name="channelId"
          value={formData.channelId}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">User ID</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        送出
      </button>
    </form>
  );
};

export default UserForm;
