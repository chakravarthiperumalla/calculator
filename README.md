📱 Big Sur Inspired Calculator

A sleek, modern calculator web application inspired by macOS Big Sur aesthetics. Built using HTML, CSS, and JavaScript, it includes light/dark themes, a responsive design, and an intuitive user interface.

✨ Features
🧮 Basic Arithmetic Operations ( +, -, ×, ÷, % )

💡 Light and Dark Mode Toggle

⌨️ Keyboard Input Compatible (Optional enhancement)

🎨 Beautiful Frosted Glass UI with Gradient Background

🖋️ Calculator heading styled in Times New Roman

📐 Responsive two-panel layout (left heading, right calculator)

🚀 Technologies Used
HTML5

CSS3

JavaScript (Vanilla)

📁 Folder Structure
pgsql
Copy
Edit
calculator-app/
├── index.html
├── style.css
├── script.js
└── README.md
🛠️ How It Works
🔹 1. UI Layout (HTML)
Created a responsive <div class="container"> with two children:

left-panel: Displays the heading "Calculator" in Times New Roman.

right-panel: Holds the actual calculator.

Buttons are defined inside a .buttons grid.

A display section (#display) shows the current input or result.

🔹 2. Styling (CSS)
Used backdrop-filter and rgba() for frosted glass effects.

Gradient background added with abstract circles for creativity.

Calculator styled with rounded corners and box shadows for elevation.

Created a dark mode using CSS variables (:root) and body.dark.

🔹 3. Functionality (JavaScript)
appendValue(val): Adds digits/operators to the display.

clearDisplay(): Clears the screen.

deleteLast(): Deletes the last character.

calculate(): Evaluates the math expression using eval().

toggleTheme(): Switches between light and dark modes by toggling a class.

🖼️ Preview
<!-- Replace with your screenshot file -->

📦 How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/calculator-app.git
cd calculator-app
Open index.html in any modern browser:

bash
Copy
Edit
start index.html   # For Windows
open index.html    # For macOS
🧠 Future Enhancements
⏱️ Add Scientific Functions (sin, cos, log)

🔢 Keyboard Shortcuts

🔊 Button Click Sound Effects

📱 Mobile Responsive Optimization

🧑‍💻 Author
P.V.R.K. Chakravarthi
Final Year B.Tech CSE Student | Web & Cloud Enthusiast

📄 License
This project is licensed under the MIT License.
