/**
=========================================================
* CFFI Admin Dashboard powered by Argon Dashboard 2 MUI - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Link from "@mui/material/Link";

// Argon Dashboard 2 MUI components
import ArgonButton from "components/ArgonButton";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <ArgonBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
      <ArgonBox position="relative" textAlign="center">
        <ArgonBox component="img" src={icon} alt="sidebar_illustration" width="60%" />
        <ArgonBox
          width="100%"
          pb={2}
          px={2}
          color={darkSidenav ? "white" : "dark"}
          textAlign="center"
          lineHeight={0}
        >
          <ArgonTypography color="inherit" variant="h6">
            Need help?
          </ArgonTypography>
          <ArgonTypography color="inherit" variant="caption">
            `Please check cffi&#39;s manual`
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonButton
          component={Link}
          href={`${process.env.REACT_APP_BASE_URL}`}
          target="_blank"
          rel="noreferrer"
          color="dark"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        >
          Guidelines
        </ArgonButton>
        <ArgonButton
          component={Link}
          href={`${process.env.REACT_APP_BASE_URL}`}
          target="_blank"
          rel="noreferrer"
          color="info"
          size="small"
          fullWidth
          mb={2}
        >
          Upgrade CFFI&#39;s Membership
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  );
}

export default SidenavFooter;
