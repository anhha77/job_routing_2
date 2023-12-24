import {
  Alert,
  Stack,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FTextField, FormProvider } from "./form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import { useAuth } from "../auth/auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const defaultValues = {
    username: "minhanh",
    password: "123",
  };

  const methods = useForm({ defaultValues });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const styleBtn = {
    bgcolor: "rgb(215, 71, 66)",
    color: "#fff",
    boxShadow: 2,
    "&:hover": {
      backgroundColor: "rgb(150, 49, 46)",
    },
  };

  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    auth.login(defaultValues.username);
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "#c0392b",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="LockOutlinedIcon"
            height="25px"
            style={{ fontWeight: "400" }}
          >
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </svg>
        </div>
      </Box>
      <Stack spacing={3}>
        <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
          Log In
        </Typography>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <FTextField name="username" label="Username" />
        <FTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={styleBtn}
        >
          Sign In
        </LoadingButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgb(215, 71, 66)",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontWeight: "400",
            fontSize: "0.875rem",
          }}
        >
          <Typography variant="p" sx={{ cursor: "pointer" }}>
            Forgot password?
          </Typography>
          <Typography variant="p" sx={{ cursor: "pointer" }}>
            Don't have an account? Sign Up
          </Typography>
        </Box>
      </Stack>
    </FormProvider>
  );
}

export default LoginForm;
