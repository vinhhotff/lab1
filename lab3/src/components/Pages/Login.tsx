/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "../Firebaseconfig/FireBaseconfig";
import Googleicon from "@mui/icons-material/Google";
import { onAuthStateChanged } from "firebase/auth";


export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("token", user.uid); // Lưu token hoặc user info
        navigate("/dashboard"); // Nếu đã đăng nhập, chuyển hướng luôn
      }
    });
    return () => unsubscribe();
  }, []);
  const handleLogicbasic = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Email or Password is Incorrect !");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Đăng nhập Google thất bại!");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center min-h-screen p-6">
      <Card className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-gray-700">
            Welcome Back
          </CardTitle>
          <p className="text-gray-500 text-sm pb-3">Sign in to continue</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              {error && (
                <Typography color="error" fontSize="0.875rem">
                  {error}
                </Typography>
              )}
  
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& fieldset": { borderColor: "gray" }, // Thêm viền màu xám
                  "&:hover fieldset": { borderColor: "black" }, // Khi hover đổi màu viền
                  "&.Mui-focused fieldset": { borderColor: "blue" }, // Khi focus viền màu xanh
                }}
              />
            </div>

            {/* Password Input */}
            <div>           
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "blue" },
                }}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <Box display="flex" justifyContent="space-between" width="100%">
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Typography variant="body2" sx={{ cursor: "pointer" , paddingTop:"9px"}}>
                Forgot password?
              </Typography>
            </Box>

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{ background: "#3f51b5", height: "45px",borderRadius:"12px" }}
              onClick={handleLogicbasic}
            >
              Sign in
            </Button>

            {/* Google Sign In */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#DB4437",
                color: "white",
                height: "45px",
                borderRadius:"12px"
              }}
              onClick={handleGoogleSignIn}
            >
              <Googleicon sx={{ fontSize: 20, mr: 1 }} /> Sign in with Google
            </Button>

            {/* Sign Up Link */}
            <div className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?
              <Link to="/Register" className="text-blue-400 text-sm ml-1">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
