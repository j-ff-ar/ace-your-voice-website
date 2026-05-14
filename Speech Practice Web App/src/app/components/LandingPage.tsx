import { Link } from "react-router";
import { Mic, MessageSquare, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import pstaImage from "../../imports/psta.png";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm mb-6">
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-6xl mb-6 text-gray-900">
            Speak Clearly. Sound Confident.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Practice speech, pronunciation, and interview skills online. Build confidence and communicate with clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/rate-idea"
              className="inline-flex px-8 py-4 bg-white border border-cyan-200 text-cyan-700 rounded-full hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Rate this idea
            </Link>
            <Link
              to="/feedback"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Provide Your Suggestions
            </Link>
            <Link
              to="/waitlist"
              className="inline-flex px-8 py-4 bg-white border border-teal-200 text-teal-700 rounded-full hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <img
            src={pstaImage}
            alt="Speech practice platform interface"
            className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">
            Why This Matters
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're overcoming stuttering, improving pronunciation, or preparing for interviews, we're here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Build Confidence</h3>
              <p className="text-gray-600">
                Practice in a safe, judgment-free environment. Gain the confidence to speak up in any situation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Improve Clarity</h3>
              <p className="text-gray-600">
                Get personalized feedback on pronunciation, pacing, and articulation to communicate more effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Advance Your Career</h3>
              <p className="text-gray-600">
                Nail interviews, presentations, and professional conversations with targeted practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Features Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-gray-900">
            Planned Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here's what we're building to help you succeed.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h4 className="mb-2 text-gray-900">Record & Analyze Voice</h4>
                <p className="text-sm text-gray-600">
                  Record your speech and get instant playback to hear how you sound.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="mb-2 text-gray-900">AI-Powered Feedback</h4>
                <p className="text-sm text-gray-600">
                  Get detailed insights on clarity, pronunciation, pacing, and filler words.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="mb-2 text-gray-900">Mock Interviews</h4>
                <p className="text-sm text-gray-600">
                  Practice common interview questions with AI-guided sessions.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="mb-2 text-gray-900">Daily Exercises</h4>
                <p className="text-sm text-gray-600">
                  Build speaking skills with personalized daily practice routines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Help Us Build This Platform
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Your feedback will shape the features we build. Tell us what you need most.
          </p>
          <Link
            to="/feedback"
            className="inline-block px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Give Feedback
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2026 Speech & Interview Practice. Coming Soon.</p>
      </footer>
    </div>
  );
}
