# VeriFact AI

## Project Description

VeriFact AI is an AI-powered application designed to analyze and verify the reliability of information sources. It aims to combat misinformation by providing users with tools to assess the credibility of content, offering insights into potential biases, factual accuracy, and overall trustworthiness.

## Features

- **Source Reliability Assessment**: Analyze various sources (e.g., articles, news, social media posts) for credibility.
- **Bias Detection**: Identify potential biases in content to provide a more balanced perspective.
- **Factual Verification**: Cross-reference information with known facts and reputable databases.
- **Interactive User Interface**: A user-friendly interface built with Next.js for seamless interaction.
- **AI-Powered Backend**: Utilizes Gemini AI for advanced analysis and data processing.

## Technologies Used

- **Frontend**: Next.js (React), Tailwind CSS, Radix UI
- **Language**: TypeScript
- **Package Manager**: npm
- **API Integration**: Gemini AI for AI-powered analysis.
## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up environment variables**:
    Create a `.env` file in the root directory (if it doesn't exist) and add your environment variables (e.g., Firebase credentials, API keys) for local development. **Do not commit this file to your version control system.**
    ```
    # Example .env content
    NEXT_PUBLIC_FIREBASE_API_KEY=your_local_api_key
    # ... other environment variables
    ```
    For deployment to platforms like Appwrite, you will configure these environment variables directly within the platform's settings.
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port specified in your `.env` or `next.config.js`) in your browser to see the application.

## Usage

(Details on how to use the application will go here once the core features are implemented and stable.)

## Deployment

This application can be deployed to platforms like Appwrite Sites, which supports Next.js applications with SSR and RSC. Ensure your project is pushed to a GitHub repository and configure the build settings in your chosen deployment platform.

## Contributing

We welcome contributions! Please see our `CONTRIBUTING.md` (if available) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.