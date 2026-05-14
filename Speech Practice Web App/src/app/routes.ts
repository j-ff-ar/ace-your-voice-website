import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { FeedbackPage } from "./components/FeedbackPage";
import { RateIdeaPage } from "./components/RateIdeaPage";
import { WaitlistPage } from "./components/WaitlistPage";
import { ThankYouPage } from "./components/ThankYouPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/feedback",
    Component: FeedbackPage,
  },
  {
    path: "/rate-idea",
    Component: RateIdeaPage,
  },
  {
    path: "/waitlist",
    Component: WaitlistPage,
  },
  {
    path: "/thank-you",
    Component: ThankYouPage,
  },
]);
