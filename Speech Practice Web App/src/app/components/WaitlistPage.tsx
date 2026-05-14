import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail } from "lucide-react";
import { sendSubmissionEmail } from "../lib/email";

export function WaitlistPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    sendSubmissionEmail({
      kind: "waitlist",
      title: "New waitlist signup",
      message: `Waitlist signup email: ${email}`,
      replyTo: email,
    })
      .then(() => navigate("/thank-you"))
      .catch((error) => {
        console.error("Failed to send waitlist email:", error);
        alert("Email settings are not configured yet. Please add your EmailJS credentials.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Join the waitlist</h1>
            <p className="text-lg text-gray-600">
              Add your email and we’ll let you know when early access opens.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-3 text-gray-900">
                Email address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Join Waitlist"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/" className="text-cyan-600 hover:text-cyan-700 underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}