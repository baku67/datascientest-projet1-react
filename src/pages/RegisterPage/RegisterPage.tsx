import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./RegisterPage.scss";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
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
import {
  createRegisterSchema,
  type RegisterFormValues,
} from "../../validation/AuthValidation";

function RegisterPage() {
  const { t } = useTranslation();

  const schema = useMemo(() => createRegisterSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "", repeatPassword: "" },
    mode: "onTouched", // erreurs s'affichent au blur
  });

  const onSubmit = async (values: RegisterFormValues) => {
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
        <section className="register-container">
          <h1 className="register-title">{t("register_page_title")}</h1>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2.2}>
              <TextField
                label={t("register_form_email_label")}
                placeholder={t("register_form_email_placeholder")}
                type="email"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                autoComplete="email"
              />

              <TextField
                label={t("register_form_password_label")}
                placeholder={t("register_form_password_placeholder")}
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
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

              <TextField
                label={t("register_form_repeat_password_label")}
                placeholder={t("register_form_repeat_password_placeholder")}
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                fullWidth
                {...register("repeatPassword")}
                error={!!errors.repeatPassword}
                helperText={errors.repeatPassword?.message}
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
                  {t("register_form_submit_button")}
                </Button>
              </Box>

              <p className="go-to-register-text">
                {t("already_registered_question")}
                <NavLink
                  to="/login"
                  onClick={close}
                  className="register-links go-to-login-link"
                >
                  {t("go_to_login")}
                </NavLink>
              </p>
            </Stack>
          </Box>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RegisterPage;
