
  # Speech Practice Web App

  This is a code bundle for Speech Practice Web App. The original project is available at https://www.figma.com/design/pA06ziSU4RIgAPYhHIqYfr/Speech-Practice-Web-App.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Email setup

  This app sends submission emails through EmailJS. Create a local `.env.local` file in the project root with these values:

  - `VITE_FEEDBACK_EMAIL=devjaffarbusiness@gmail.com`
  - `VITE_EMAILJS_SERVICE_ID=...`
  - `VITE_EMAILJS_TEMPLATE_ID=...`
  - `VITE_EMAILJS_PUBLIC_KEY=...`

  You can copy the sample file from `.env.example` and fill in your EmailJS values from the EmailJS dashboard.

  After that, restart the dev server so Vite loads the new environment variables.
  