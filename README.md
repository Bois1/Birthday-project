# Altschools Birthday Reminder Project

A Node.js application designed to automatically send birthday reminders and wishes via email. This project uses a cron job to check for birthdays daily and sends out personalized emails.

## Features

- **Automated Birthday Checks**: Runs a daily cron job to identify users with birthdays.
- **Email Notifications**: Sends birthday wishes using Nodemailer.
- **Secure Configuration**: Uses `dotenvx` for encrypted environment variable management.
- **MVC Architecture**: Structured with Express.js, Mongoose, and EJS.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd altschools-birthday-reminder-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   This project uses `@dotenvx/dotenvx` for securing environment variables.

   - **Local Development**:
     Ensure you have the `.env.keys` file in your root directory (this should be provided securely and NOT committed to Git). The application will automatically decrypt `.env` at runtime.

   - **Heroku / Production**:
     Set the `DOTENV_PRIVATE_KEY` environment variable on your server to the value found in your local `.env.keys`.

4. **Variables in `.env` (Encrypted):**
   - `PORT`: Server port
   - `MONGODB_URI`: Database connection string
   - `GMAIL_USER`: Email service username
   - `GMAIL_PASS`: Email service password

## Usage

### Development Mode
Runs the server with `nodemon` for hot-reloading.
```bash
npm run dev
```

### Production Mode
Starts the server normally.
```bash
npm start
```

## Project Structure

- `server.js`: Entry point of the application.
- `app.js`: Express app setup and middleware.
- `jobs/`: Contains background jobs (e.g., `birthdayJob.js`).
- `models/`: Mongoose database models.
- `routes/`: API routes.
- `views/`: EJS templates.

## License

ISC
