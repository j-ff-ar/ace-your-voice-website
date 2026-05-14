import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Star } from "lucide-react";
import { sendSubmissionEmail } from "../lib/email";

export function RateIdeaPage() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    sendSubmissionEmail({
      kind: "rating",
      title: "New idea rating",
      message: `User rated this idea ${rating} out of 5 stars.`,
    })
      .then(() => navigate("/thank-you"))
      .catch((error) => {
        console.error("Failed to send rating email:", error);
        alert("Email settings are not configured yet. Please add your EmailJS credentials.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Rate this idea</h1>
          <p className="text-lg text-gray-600 mb-10">
            Tell us how much you like the concept by choosing a star rating.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="p-2 rounded-full transition-transform hover:scale-110"
                  aria-label={`Rate ${value} out of 5`}
                >
                  <Star
                    className={
                      value <= rating
                        ? "w-12 h-12 fill-yellow-400 text-yellow-400"
                        : "w-12 h-12 text-gray-300"
                    }
                  />
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              {rating === 0 ? "Select a rating to continue." : `You selected ${rating} out of 5.`}
            </p>

            <button
              type="submit"
              disabled={rating === 0 || isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Submit Rating"}
            </button>
          </form>

          <div className="mt-8">
            <Link to="/" className="text-cyan-600 hover:text-cyan-700 underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}