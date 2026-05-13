import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { FeedbackPage } from "./components/FeedbackPage";
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
    path: "/thank-you",
    Component: ThankYouPage,
  },
]);
