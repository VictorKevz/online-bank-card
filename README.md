# Interactive Card Details Form

![alt text](public/design/desktop-preview.jpg)
Welcome to my solution for the [Interactive Card Details Form challenge](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw) from Frontend Mentor.

## Overview

This project involves creating an interactive card details form that updates the card details in real time as the user fills out the form. The form also provides error messages for incorrect or empty inputs and adapts to different screen sizes.

Live site: [Interactive Card Details Form](https://victorkevz.github.io/online-bank-card/)

## Features

- Real-time card detail updates as the user types.
- Validation for:
  - Empty input fields.
  - Incorrectly formatted card number, expiry date, or CVC.
- Responsive design for optimal viewing on different screen sizes.
- Interactive elements with hover, active, and focus states.
- Implementation of the Luhn algorithm for actual credit card number verification.

## Technologies Used

- **HTML5**: Markup language used for structuring and presenting content.
- **CSS**: Styling the application, including responsive design and interactive states.
- **React.js**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool for a faster and leaner development experience.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VictorKevz/online-bank-card.git
   ```
2. Navigate to the project directory:
   ```bash
   cd online-bank-card
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to see the application in action.

## Project Structure

- **/public**: Static assets such as images.
- **/src**: Source code of the application.
  - **/components**: Reusable React components.
  - **/css**: Styling files.
  - **App.jsx**: Main application component.
  - **main.jsx**: Entry point for the application.

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

## License

This project is open source and available under the MIT License.

---

Thank you for checking out my solution. I hope you find it useful and informative! If you have any questions or feedback, please don't hesitate to reach out.

---

[GitHub Repository](https://github.com/VictorKevz/online-bank-card)
