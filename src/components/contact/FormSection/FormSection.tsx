import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, TextField, Paper, Stack } from "@mui/material";

type ContactFormValues = {
  name: string;
  forname: string;
  email: string;
  message: string;
};

function FormSection() {
  const { t } = useTranslation();

  // Schéma Zod (+ messages i18n)
  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(
            2,
            t("contact_form_error_name_min", { defaultValue: "Nom trop court" })
          ),
        forname: z.string().min(
          2,
          t("contact_form_error_forname_min", {
            defaultValue: "Prénom trop court",
          })
        ),
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
        message: z.string().min(
          10,
          t("contact_form_error_message_min", {
            defaultValue: "Message trop court",
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
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", forname: "", email: "", message: "" },
    mode: "onTouched", // erreurs s'affichent au blur
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: remplacer:
    console.log(values);
    await new Promise((r) => setTimeout(r, 400)); // Simulation envoi

    reset();
  };

  return (
    <Box
      component="section"
      sx={{
        width: "min(980px, 92vw)",
        mx: "auto",
        pb: 8,
      }}
    >
      {/* Paper = container */}
      <Paper
        elevation={0}
        sx={{
          mx: "auto",
          p: { xs: 2.5, sm: 3.5 },
          borderRadius: 3,
          backgroundColor: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(168, 85, 247, 0.35)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2.2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label={t("contact_form_name_label")}
                placeholder={t("contact_form_name_placeholder")}
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                autoComplete="family-name"
              />

              <TextField
                label={t("contact_form_forname_label")}
                placeholder={t("contact_form_forname_placeholder")}
                fullWidth
                {...register("forname")}
                error={!!errors.forname}
                helperText={errors.forname?.message}
                autoComplete="given-name"
              />
            </Stack>

            <TextField
              label={t("contact_form_email_label")}
              placeholder={t("contact_form_email_placeholder")}
              type="email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              autoComplete="email"
            />

            <TextField
              label={t("contact_form_message_label")}
              placeholder={t("contact_form_message_placeholder")}
              fullWidth
              multiline
              minRows={4}
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
            />

            <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ minWidth: 140 }}
              >
                {t("contact_form_submit_button")}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default FormSection;
