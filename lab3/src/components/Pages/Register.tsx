/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth, createUserWithEmailAndPassword } from "../Firebaseconfig/FireBaseconfig";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Stack, Typography, TextField, FormControlLabel, Checkbox } from "@mui/material";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError(""); // Xóa lỗi cũ trước khi xử lý đăng ký

    if (!agreed) {
      setError("You must agree to the terms and conditions.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-4">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-700">Create an Account</CardTitle>
          <Typography variant="body2" color="textSecondary">
            Sign up to get started
          </Typography>
        </CardHeader>

        <CardContent>
          <Stack spacing={3}>
            {/* Hiển thị lỗi nếu có */}
            {error && (
              <Typography color="error" sx={{ textAlign: "center" }}>
                {error}
              </Typography>
            )}

            {/* Email Input */}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input */}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Confirm Password Input */}
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Checkbox Terms & Conditions */}
            <FormControlLabel
              control={<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />}
              label="I agree to the terms and conditions"
            />

            {/* Submit Button */}
            <Button
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg"
              onClick={handleRegister}
            >
              Sign Up
            </Button>

            {/* Sign In Link */}
            <Typography variant="body2" color="textSecondary" align="center">
              Already have an account?
              <Link to="/" className="text-teal-600 hover:underline ml-1">
                Sign in
              </Link>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
