import { type FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {

  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [messageLength, setMessageLength] = useState(0);
  const MAX_LENGTH = 750;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus("idle");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setStatus("success");
        formRef.current?.reset();
      })
      .catch((err: any) => {
        console.error(err);
        setIsSending(false);
        setStatus("error");
      })
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact">
        <h2 className="text-secondary text-center mb-8">Me contacter</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto max-w-md space-y-4 px-4"
        >
          {/* Nom */}
          <div className="flex flex-col gap-1">
            <label htmlFor="from_name" className="text-sm text-secondary">
              Nom
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              maxLength={30}
              required
              className="rounded bg-primary border border-tertiary px-3 py-2 text-white focus:outline-none focus:border-secondary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="reply_to" className="text-sm text-secondary">
              Email
            </label>
            <input
              id="reply_to"
              name="reply_to"
              type="email"
              maxLength={70}
              required
              className="rounded bg-primary border border-tertiary px-3 py-2 text-white focus:outline-none focus:border-secondary"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={MAX_LENGTH}
              onChange={(e) => setMessageLength(e.target.value.length)}
              required
              className="rounded bg-primary border border-tertiary px-3 py-2 text-white resize-none focus:outline-none focus:border-secondary"
            />
            <p className="texte-right text-sm text-gray-400">{messageLength}/{MAX_LENGTH}</p>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={isSending}
            className="mt-2 w-full rounded bg-secondary px-4 py-2 text-primary font-semibold hover:bg-secondary/80 disabled:opacity-60 disabled:cursor-not-allowed transition cursor-pointer"
          >
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>

          {/* Message de statut */}
          {status === "success" && (
            <p className="mt-2 text-center text-sm text-green-400">
              Message envoyé, merci !
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-center text-sm text-red-400">
              Une erreur est survenue, réessaie plus tard.
            </p>
          )}
        </form>
        <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
      </section>
    </motion.section>
  );
}

export default Contact;