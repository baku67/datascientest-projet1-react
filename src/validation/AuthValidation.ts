import type { TFunction } from "i18next";
import { z } from "zod";

export function createEmailSchema(t: TFunction) {
  return z
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
    );
}

export function createPasswordSchema(t: TFunction) {
  return z
    .string()
    .min(
      12,
      t("auth_error_password_min", {
        defaultValue: "Mot de passe trop court (12 caractères minimum).",
      }),
    )
    .regex(/[a-z]/, {
      message: t("auth_error_password_lower", {
        defaultValue: "Le mot de passe doit contenir au moins une minuscule.",
      }),
    })
    .regex(/[A-Z]/, {
      message: t("auth_error_password_upper", {
        defaultValue: "Le mot de passe doit contenir au moins une majuscule.",
      }),
    })
    .regex(/[0-9]/, {
      message: t("auth_error_password_digit", {
        defaultValue: "Le mot de passe doit contenir au moins un chiffre.",
      }),
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: t("auth_error_password_special", {
        defaultValue:
          "Le mot de passe doit contenir au moins un caractère spécial.",
      }),
    });
}

export function createPasswordConfirmationSchema(t: TFunction) {
  return z
    .object({
      password: createPasswordSchema(t),
      repeatPassword: z.string().min(
        1,
        t("auth_error_repeatpassword_required", {
          defaultValue: "Veuillez répéter le mot de passe.",
        }),
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
    });
}

export function createRegisterSchema(t: TFunction) {
  return z
    .object({
      email: createEmailSchema(t),
    })
    .and(createPasswordConfirmationSchema(t));
}

export function createResetPasswordSchema(t: TFunction) {
  return createPasswordConfirmationSchema(t);
}

export type RegisterFormValues = z.infer<
  ReturnType<typeof createRegisterSchema>
>;

export type ResetPasswordFormValues = z.infer<
  ReturnType<typeof createResetPasswordSchema>
>;
