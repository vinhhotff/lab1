import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebaseconfig/FireBaseconfig"; // Viết đúng tên file
import { onAuthStateChanged, User } from "firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setEmail(user.email || "Unknown User"); // Tránh lỗi nếu user.email bị null
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">
        Hello {email ? email : "Guest"}!
      </h1>
    </div>
  );
}
