import { useState } from "react";
import { useNavigate } from "react-router";
import { Send } from "lucide-react";

export function FeedbackPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    helpWith: [] as string[],
    features: [] as string[],
    challenge: "",
    suggestions: "",
    email: "",
  });

  const handleCheckboxChange = (field: "helpWith" | "features", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    navigate("/thank-you");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Help Us Transform Speech Therapy
          </h1>
          <p className="text-lg text-gray-600">
            We are co-designing KinTherapy with speech therapists and families. Share your experience below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Question 1: What do you want help with? */}
          <div className="mb-8">
            <label className="block mb-4 text-gray-900">
              Who are you and what is your primary focus?
            </label>
            <div className="space-y-3">
              {[
                "Parent of a child with speech delay / stammering",
                "Adult managing stammering (stuttering)",
                "Adult with articulation or post-stroke speech recovery",
                "Licensed Speech-Language Pathologist / Clinic Owner",
              ].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.helpWith.includes(option)}
                    onChange={() => handleCheckboxChange("helpWith", option)}
                    className="w-5 h-5 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2: Which features would you use? */}
          <div className="mb-8">
            <label className="block mb-4 text-gray-900">
              Which features are most needed?
            </label>
            <div className="space-y-3">
              {[
                "Daily guided phone practice with live voice feedback",
                "Visual breathing and pacing cues (for stammering & rhythm)",
                "Automatic progress reports sent to my speech therapist",
                "Clinician dashboard to track patient homework compliance",
                "Online directory to find and book certified speech therapists",
              ].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.features.includes(option)}
                    onChange={() => handleCheckboxChange("features", option)}
                    className="w-5 h-5 rounded border-gray-300 text-teal-500 focus:ring-teal-500 cursor-pointer"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3: Biggest speaking challenge */}
          <div className="mb-8">
            <label htmlFor="challenge" className="block mb-4 text-gray-900">
              What is your biggest challenge with current speech therapy or home practice?
            </label>
            <input
              type="text"
              id="challenge"
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              placeholder="e.g., Hard to stay consistent at home, Paper worksheets are boring, No way to know if I'm practicing correctly, Long clinic waiting lists"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Question 4: Suggestions */}
          <div className="mb-8">
            <label htmlFor="suggestions" className="block mb-4 text-gray-900">
              What features would make you or your therapist trust this platform most?
            </label>
            <textarea
              id="suggestions"
              value={formData.suggestions}
              onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
              placeholder="Tell us your ideas..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Email (optional) */}
          <div className="mb-8">
            <label htmlFor="email" className="block mb-4 text-gray-900">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-2">
              Leave your email to receive early access to the patient app or clinical pilot dashboard.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Sending..." : "Send Your Feedback"}
          </button>
        </form>

        {/* Back Link */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-cyan-600 hover:text-cyan-700 underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
