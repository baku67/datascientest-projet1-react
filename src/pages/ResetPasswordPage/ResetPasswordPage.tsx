import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./ResetPasswordPage.scss";
import {
  createResetPasswordSchema,
  type ResetPasswordFormValues,
} from "../../validation/AuthValidation";

function ResetPasswordPage() {
  const { t } = useTranslation();
  const { uid, token } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const schema = useMemo(() => createResetPasswordSchema(t), [t]);

  const hasValidResetLink = Boolean(uid && token);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    console.log({
      uid,
      token,
      password: values.password,
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    setHasSubmitted(true);
    reset();
  };

  return (
    <div className="page-nav-footer">
      <NavBar />

      <main className="page__content">
        <section className="reset-password-container">
          <Link className="reset-password-back-button" to="/login">
            {t("reset_password_back_to_login", {
              defaultValue: "← Retour à la connexion",
            })}
          </Link>

          <div className="reset-password-card">
            <p className="reset-password-eyebrow">
              {t("reset_password_eyebrow", {
                defaultValue: "Sécurité",
              })}
            </p>

            <h1 className="reset-password-title">
              {t("reset_password_page_title", {
                defaultValue: "Créer un nouveau mot de passe",
              })}
            </h1>

            <p className="reset-password-description">
              {t("reset_password_page_description", {
                defaultValue:
                  "Choisissez un nouveau mot de passe sécurisé pour finaliser la réinitialisation de votre compte.",
              })}
            </p>

            {!hasValidResetLink && (
              <div className="reset-password-feedback reset-password-feedback--error">
                <strong>
                  {t("reset_password_invalid_link_title", {
                    defaultValue: "Lien invalide",
                  })}
                </strong>
                <span>
                  {t("reset_password_invalid_link_message", {
                    defaultValue:
                      "Le lien de réinitialisation est invalide ou incomplet.",
                  })}
                </span>
              </div>
            )}

            {hasSubmitted && (
              <div className="reset-password-feedback" role="status">
                <strong>
                  {t("reset_password_feedback_title", {
                    defaultValue: "Mot de passe modifié",
                  })}
                </strong>
                <span>
                  {t("reset_password_feedback_message", {
                    defaultValue:
                      "Votre mot de passe a bien été réinitialisé. Vous pouvez maintenant vous connecter.",
                  })}
                </span>
              </div>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2.2}>
                <TextField
                  label={t("reset_password_password_label", {
                    defaultValue: "Nouveau mot de passe",
                  })}
                  placeholder={t("reset_password_password_placeholder", {
                    defaultValue: "Entrez votre nouveau mot de passe",
                  })}
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  fullWidth
                  disabled={!hasValidResetLink || hasSubmitted}
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((value) => !value)}
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
                  label={t("reset_password_repeat_password_label", {
                    defaultValue: "Confirmer le nouveau mot de passe",
                  })}
                  placeholder={t("reset_password_repeat_password_placeholder", {
                    defaultValue: "Répétez votre nouveau mot de passe",
                  })}
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  fullWidth
                  disabled={!hasValidResetLink || hasSubmitted}
                  {...register("repeatPassword")}
                  error={!!errors.repeatPassword}
                  helperText={errors.repeatPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((value) => !value)}
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
                    disabled={
                      isSubmitting || !hasValidResetLink || hasSubmitted
                    }
                    sx={{ minWidth: 210 }}
                  >
                    {t("reset_password_submit_button", {
                      defaultValue: "Réinitialiser le mot de passe",
                    })}
                  </Button>
                </Box>

                {hasSubmitted && (
                  <Link className="reset-password-login-link" to="/login">
                    {t("reset_password_go_to_login", {
                      defaultValue: "Se connecter",
                    })}
                  </Link>
                )}
              </Stack>
            </Box>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ResetPasswordPage;
