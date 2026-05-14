import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, TextField } from "@mui/material";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./ForgotPasswordPage.scss";

type ForgotPasswordFormValues = {
  email: string;
};

function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        email: z
          .string()
          .min(
            1,
            t("contact_form_error_email_required", {
              defaultValue: "Email requis",
            }),
          )
          .email(
            t("contact_form_error_email_invalid", {
              defaultValue: "Email invalide",
            }),
          ),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    console.log(values);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setHasSubmitted(true);
    reset();
  };

  return (
    <div className="page-nav-footer">
      <NavBar />

      <main className="page__content">
        <section className="forgot-password-container">
          <Link className="forgot-password-back-button" to="/login">
            {t("forgot_password_back_to_login", {
              defaultValue: "← Retour à la connexion",
            })}
          </Link>

          <div className="forgot-password-card">
            <p className="forgot-password-eyebrow">
              {t("forgot_password_eyebrow", {
                defaultValue: "Réinitialisation",
              })}
            </p>

            <h1 className="forgot-password-title">
              {t("forgot_password_page_title", {
                defaultValue: "Mot de passe oublié",
              })}
            </h1>

            <p className="forgot-password-description">
              {t("forgot_password_page_description", {
                defaultValue:
                  "Entrez votre adresse email. Si elle correspond à un compte existant, vous recevrez un lien de réinitialisation.",
              })}
            </p>

            {hasSubmitted && (
              <div className="forgot-password-feedback" role="status">
                <strong>
                  {t("forgot_password_feedback_title", {
                    defaultValue: "Demande prise en compte",
                  })}
                </strong>
                <span>
                  {t("forgot_password_feedback_message", {
                    defaultValue:
                      "Si cette adresse email est utilisée, vous recevrez un mail pour réinitialiser votre mot de passe.",
                  })}
                </span>
              </div>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2.2}>
                <TextField
                  label={t("forgot_password_email_label", {
                    defaultValue: "Adresse email",
                  })}
                  placeholder={t("forgot_password_email_placeholder", {
                    defaultValue: "Entrez votre adresse email",
                  })}
                  type="email"
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  autoComplete="email"
                />

                <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{ minWidth: 180 }}
                  >
                    {t("forgot_password_submit_button", {
                      defaultValue: "Envoyer le lien",
                    })}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;
