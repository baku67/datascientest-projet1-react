import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./LoginPage.scss";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  Box,
  Button,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
};

function LoginPage() {
  const { t } = useTranslation();

  // Schéma Zod (+ messages i18n)
  const schema = useMemo(
    () =>
      z.object({
        email: z
          .string()
          .min(
            1,
            t("contact_form_error_email_required", {
              defaultValue: "Email requis",
            })
          )
          .email(
            t("contact_form_error_email_invalid", {
              defaultValue: "Email invalide",
            })
          ),
        password: z.string().min(
          1,
          t("auth_error_password_required", {
            defaultValue: "Mot de passe requis.",
          })
        ),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched", // erreurs s'affichent au blur
  });

  const onSubmit = async (values: LoginFormValues) => {
    // TODO: remplacer:
    console.log(values);
    await new Promise((r) => setTimeout(r, 400)); // Simulation envoi

    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page-nav-footer">
      <NavBar />

      <main className="page__content">
        <section className="login-container">
          <h1 className="login-title">{t("login_page_title")}</h1>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2.2}>
              <TextField
                label={t("login_form_email_label")}
                placeholder={t("login_form_email_placeholder")}
                type="email"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                autoComplete="email"
              />

              <TextField
                label={t("login_form_password_label")}
                placeholder={t("login_form_password_placeholder")}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                fullWidth
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((v) => !v)}
                        edge="end"
                        aria-label={
                          showPassword
                            ? t("hide_password", {
                                defaultValue: "Masquer le mot de passe",
                              })
                            : t("show_password", {
                                defaultValue: "Afficher le mot de passe",
                              })
                        }
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ minWidth: 140 }}
                >
                  {t("login_form_submit_button")}
                </Button>
              </Box>

              <div className="login-footer-links">
                <NavLink
                  to="/forgot-password"
                  onClick={close}
                  className="forgot-password-link login-links"
                >
                  {t("forgot_password")}
                </NavLink>

                <p className="go-to-login-text">
                  {t("no_account_question")}
                  <NavLink
                    to="/signup"
                    onClick={close}
                    className="go-to-register-link login-links"
                  >
                    {t("register_create_one")}
                  </NavLink>
                </p>
              </div>
            </Stack>
          </Box>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
