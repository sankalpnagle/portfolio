"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Compose the email fields for your API
    const payload = {
      to: process.env.GMAIL_USER || "nagle.sankalp@gmail.com",
      subject: `Contact from ${name} (${email})`,
      message: `<b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b><br/>${message}`,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setResult("success");
        form.reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "border-0 border-b border-gray-300 dark:border-gray-700 rounded-none bg-transparent focus-visible:ring-0 focus:border-sky-400 focus-visible:border-sky-400 outline-none shadow-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400";

  return (
    <div className="w-full mx-auto bg-white border dark:bg-gray-900/90 rounded-3xl dark:shadow p-8 transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        Contact
      </h2>
      <div className="w-20 h-1 bg-sky-400 rounded mb-6" />
      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl sm:p-8 p-3  mb-4">
        <p className="text-lg font-semibold text-gray-500 dark:text-gray-100 mb-1">
          Have a project in mind or just want to say hello?
        </p>
        <form className="space-y-6 mt-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-600 dark:text-gray-100 mb-1"
              htmlFor="name"
            >
              Name *
            </label>
            <Input id="name" name="name" required className={inputClass} />
          </div>
          <div>
            <label
              className="block text-gray-600 dark:text-gray-100 mb-1"
              htmlFor="email"
            >
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label
              className="block text-gray-600 dark:text-gray-100 mb-1"
              htmlFor="message"
            >
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className={inputClass}
            />
          </div>
          <Button
            type="submit"
            className="mt-2 w-32 bg-[#0892e2] dark:text-white hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-700 hover:cursor-pointer"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
        {result === "success" && (
          <div className="text-green-600 dark:text-green-400 mt-4">
            Message sent successfully!
          </div>
        )}
        {result === "error" && (
          <div className="text-red-600 dark:text-red-400 mt-4">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}
