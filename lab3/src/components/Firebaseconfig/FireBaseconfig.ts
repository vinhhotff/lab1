import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getAuth,
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";

// Cấu hình Firebase (sử dụng biến môi trường)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Khởi tạo Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

/** 
 * ✅ Đăng nhập bằng Email & Mật khẩu
 * @param email Email người dùng
 * @param password Mật khẩu
 */
const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken(); // Lấy token
    localStorage.setItem("token", token); // Lưu token vào localStorage
    console.log("User Logged In:", userCredential.user);
  } catch (error: any) {
    console.error("Login Error:", error.message);
  }
};

/**
 * ✅ Đăng ký tài khoản mới
 * @param email Email người dùng
 * @param password Mật khẩu
 */
const registerUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    localStorage.setItem("token", token);
    console.log("User Registered:", userCredential.user);
  } catch (error: any) {
    console.error("Registration Error:", error.message);
  }
};

/**
 * ✅ Đăng nhập bằng Google
 */
const signInWithGoogle = async (): Promise<void> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken(); // Lấy token
    localStorage.setItem("token", token); // Lưu token
    console.log("Google User:", result.user);
  } catch (error: any) {
    console.error("Google Sign-in Error:", error.message);
  }
};

/**
 * ✅ Đăng xuất
 */
const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    localStorage.removeItem("token"); // Xóa token
    console.log("User Logged Out");
  } catch (error: any) {
    console.error("Logout Error:", error.message);
  }
};

/**
 * ✅ Kiểm tra trạng thái đăng nhập
 * @param callback Hàm nhận dữ liệu User
 */
const checkAuthState = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

/**
 * ✅ Lấy token của người dùng hiện tại
 */
const getUserToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  return user ? await user.getIdToken() : null;
};

// ✅ Export tất cả các hàm & biến để có thể sử dụng ở bất kỳ đâu
export {
  app,
  auth,
  googleProvider,
  loginUser,
  registerUser,
  signInWithGoogle,
  logoutUser,
  checkAuthState,
  getUserToken,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
};
