/* eslint-disable no-unused-vars */
import { useForm, isEmail, hasLength } from "@mantine/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
    },
  });

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-700">Welcome Back</CardTitle>
          <p className="text-gray-500 text-sm">Sign in to continue</p>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-6"
            onSubmit={form.onSubmit((values) => {
              console.log("Submitted values:", values);
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
                className="mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
                className="mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {form.errors.password && (
                <p className="text-red-500 text-sm mt-1">{form.errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg">
                <Link to="/Register"> Sign in</Link>
            </Button>

            {/* Sign Up Link */}
            <div className="text-sm text-center text-gray-600 mt-4">
              Don't have an account? 
              <Link to="/Register" className="text-blue-400 text-sm">Sign up</Link>
              </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
