import { useEffect, useState } from "react";
import { getProfile } from "@/utils/liff";

interface UserProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

const LiffProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getProfile();
      setProfile(userProfile);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>LINE 用戶資料</h1>
      {profile ? (
        <div>
          <p>
            <strong>用戶 ID:</strong> {profile.userId}
          </p>
          <p>
            <strong>名稱:</strong> {profile.displayName}
          </p>
          {profile.pictureUrl && (
            <img src={profile.pictureUrl} alt="頭像" width={100} />
          )}
          <p>
            <strong>狀態訊息:</strong> {profile.statusMessage ?? "無"}
          </p>
        </div>
      ) : (
        <p>載入中...</p>
      )}
    </div>
  );
};

export default LiffProfilePage;
