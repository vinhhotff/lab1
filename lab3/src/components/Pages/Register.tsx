/* eslint-disable no-unused-vars */
import { useForm, isEmail, hasLength } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "", confirmPassword: "" },
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-700">Create an Account</CardTitle>
          <p className="text-gray-500 text-sm">Sign up to get started</p>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-6"
            onSubmit={form.onSubmit((values) => {
              console.log("Submitted values:", values);
              navigate("/");
            })}
          >
            {/* Email Input */}
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                {...form.getInputProps("email")}
                key={form.key("email")}
                type="email"
                placeholder="Enter your email"
                className="mt-1 border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              />
              {form.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                {...form.getInputProps("password")}
                key={form.key("password")}
                type="password"
                placeholder="Enter your password"
                className="mt-1 border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              />
              {form.errors.password && (
                <p className="text-red-500 text-sm mt-1">{form.errors.password}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
              <Input
                {...form.getInputProps("confirmPassword")}
                key={form.key("confirmPassword")}
                type="password"
                placeholder="Confirm your password"
                className="mt-1 border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              />
              {form.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{form.errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg">
              Sign Up
            </Button>

            {/* Sign In Link */}
            <div className="text-sm text-center text-gray-600 mt-4">
              Already have an account? 
              <Link to="/" className="text-teal-600 hover:underline ml-1">Sign in</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
