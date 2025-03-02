import React from "react";
import Header from "../ui/Header"; // Import Header bạn đã làm
import Footer from "../ui/Footer"; // Chúng ta sẽ tạo Footer tiếp theo
import { Box, Container } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header cố định trên cùng */}
      <Header></Header>

      {/* Phần chính, Dashboard hoặc nội dung khác */}
      <Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
        {children}
      </Container>

      {/* Footer cố định dưới cùng */}
      <Footer />
    </Box>
  );
};

export default Layout;
