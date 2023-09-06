# SummA Article Summary Web Application

This is a simple React application for summarizing articles. Users can input a URL, and the application fetches and displays a summary of the article. Additionally, users can copy both the article URL and the summary to their clipboard.

## Getting Started

1. Clone this repository to your local machine:
   git clone <repository-url>

2. Navigate to the project directory:
   cd article-summary-app

3. Install the required dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open your browser and visit http://localhost:3000 to use the application.

## Features

- Summarize Articles: Enter the URL of an article, and the application will fetch and display a summary for you.

- Copy URL: Click the clipboard icon next to each article to copy its URL to your clipboard. A checkmark icon will appear briefly to indicate a successful copy.

- Copy Summary: After summarizing an article, you can click the "Copy Article" button to copy the summary to your clipboard. Again, a checkmark icon will appear briefly to indicate a successful copy.

- Error Handling: If there are any errors during the summarization process, they will be displayed to the user.

- LocalStorage: The application stores articles locally, so you can revisit them later without having to re-enter the URL.

## Usage

- Enter the URL of the article you want to summarize in the input field and press "Enter" or click the "Submit" button.

- The application will display the summary of the article, or any errors encountered during the summarization process.

- Click the clipboard icon next to an article to copy its URL to your clipboard.

- After summarizing an article, click the "Copy Article" button to copy the summary to your clipboard.

## Technologies Used

- React
- Redux Toolkit (RTK)
- Tailwind CSS
