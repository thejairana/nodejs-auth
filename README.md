# Node.js & Express.js Authentication API

This is a simple Node.js and Express.js application that provides authentication APIs for user signup and login. It uses MongoDB for data storage and JWT (JSON Web Tokens) for authentication and authorization.

## Features

- User signup API
- User login API
- MongoDB connection and operations
- JWT for authentication and token-based authorization

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (v12 or higher)
- MongoDB

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/your_username/your_repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your_repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=your_jwt_secret
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Access the APIs at `http://localhost:3000/api/v1/auth/signup` and `http://localhost:3000/api/v1/auth/login`.

## API Endpoints

- `POST /api/v1/auth/signup`: Create a new user account.
- `POST /api/v1/auth/login`: Log in with an existing user account.

## Folder Structure

```
- src
  - controllers
    - authController.js
  - models
    - user.js
  - routes
    - authRoutes.js
  - config
    - db.js
    - jwt.js
  - middleware
    - authMiddleware.js
  - index.js
```

## Dependencies

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- jsonwebtoken: JWT implementation for Node.js
- bcryptjs: Password hashing library
- dotenv: Load environment variables from a .env file
- body-parser: Parse incoming request bodies

## Contributing

Contributions are welcome! If you find any issues or want to contribute enhancements, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
