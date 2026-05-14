import { Link } from "react-router";
import { CheckCircle } from "lucide-react";

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Thank You for Helping Us!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your feedback will shape the platform. We'll notify you when early access opens.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
