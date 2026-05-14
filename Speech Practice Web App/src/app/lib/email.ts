import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const destinationEmail = import.meta.env.VITE_FEEDBACK_EMAIL;

export type EmailSubmissionKind = "suggestion" | "rating" | "waitlist";

export type EmailSubmissionInput = {
  kind: EmailSubmissionKind;
  title: string;
  message: string;
  replyTo?: string;
};

export async function sendSubmissionEmail(input: EmailSubmissionInput) {
  if (!serviceId || !templateId || !publicKey || !destinationEmail) {
    throw new Error("Email settings are not configured.");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: destinationEmail,
      subject: input.title,
      message: input.message,
      form_type: input.kind,
      reply_to: input.replyTo ?? destinationEmail,
    },
    {
      publicKey,
    },
  );
}