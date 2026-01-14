import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./RegisterPage.scss";
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

type RegisterFormValues = {
  email: string;
  password: string;
  repeatPassword: string;
};

function RegisterPage() {
  const { t } = useTranslation();

  // Schéma Zod (+ messages i18n)
  const schema = useMemo(
    () =>
      z
        .object({
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

          password: z
            .string()
            .min(
              12, // la CNIL recommande 12 caractères minimum
              t("auth_error_password_min", {
                defaultValue:
                  "Mot de passe trop court (12 caractères minimum).",
              })
            )
            .regex(/[a-z]/, {
              message: t("auth_error_password_lower", {
                defaultValue:
                  "Le mot de passe doit contenir au moins une minuscule.",
              }),
            })
            .regex(/[A-Z]/, {
              message: t("auth_error_password_upper", {
                defaultValue:
                  "Le mot de passe doit contenir au moins une majuscule.",
              }),
            })
            .regex(/[0-9]/, {
              message: t("auth_error_password_digit", {
                defaultValue:
                  "Le mot de passe doit contenir au moins un chiffre.",
              }),
            })
            .regex(/[^a-zA-Z0-9]/, {
              message: t("auth_error_password_special", {
                defaultValue:
                  "Le mot de passe doit contenir au moins un caractère spécial.",
              }),
            }),

          repeatPassword: z.string().min(
            1,
            t("auth_error_repeatpassword_required", {
              defaultValue: "Veuillez répéter le mot de passe.",
            })
          ),
        })
        .superRefine(({ password, repeatPassword }, ctx) => {
          if (password !== repeatPassword) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["repeatPassword"],
              message: t("auth_error_repeatpassword_mismatch", {
                defaultValue: "Les mots de passe ne correspondent pas.",
              }),
            });
          }
        }),
    [t]
  );

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
    <>
      <NavBar />
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

      <Footer />
    </>
  );
}

export default RegisterPage;
