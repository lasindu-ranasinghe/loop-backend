# Loop: University Social Media Platform Backend

Welcome to the backend repository of Loop, a social media platform designed exclusively for university students. Loop facilitates connections among undergraduates and enables societies to promote their events and activities within the university community.
![width-800](https://github.com/lasindu-ranasinghe/loop-backend/assets/116148700/a810420b-66bb-4b5b-9a51-4963a2aac675)

## Features

- **User Authentication**: Register, login, and connect with other university undergraduates.
- **Society and Event Promotion**: Societies can promote their events, enhanced by a recommendation engine.
- **Chatbot Assistance**: Ask questions about the university with the help of a Khear LLM-powered chatbot.
- **Payment Gateway**: Purchase tickets for events seamlessly through an integrated payment gateway.

## Project Highlights

- **Developed with Node.js and Next.js**: The backend is built using Node.js and Next.js, ensuring a robust and scalable architecture.
- **Database**: MongoDB is used for data storage, providing flexibility and performance.
- **Top 3 Project**: This project was selected as one of the top 3 projects out of 20 in our batch for the second-year group project.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (v14 or higher)
- MongoDB
- NPM or Yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/loop-backend.git
   cd loop-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   DATABASE_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PAYMENT_GATEWAY_API_KEY=<your-payment-gateway-api-key>
   PORT=<port-number>
   ```

4. **Run the development server**:

   ```bash
   nodemon index.js
   ```

   or

   ```bash
   yarn dev
   ```

   The backend server should now be running on `http://localhost:${PORT}`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project is developed as part of a second-year group project.
- Special thanks to the team members and the university for their support.
