# 🎲 Simple Snake and Ladders Game

A digital recreation of the classic board game — **Snake and Ladders** — built using HTML, CSS, JavaScript, and Python (Flask). This fun and interactive web application supports two-player gameplay, allowing users to roll dice, move pieces, and experience the joy of snakes pulling them down or ladders boosting them up. Fully responsive and playable directly in the browser.

---

## 🧩 Features

- 👥 **Two-Player Gameplay**: Take turns rolling the dice with a friend and race to the finish.
- 🐍 **Snakes & Ladders**: Classic mechanics where ladders advance your position and snakes bring you down.
- 💾 **Game State Persistence**: The game remembers your progress across refreshes and page reloads.
- 📱 **Responsive Design**: Smooth gameplay across all screen sizes — mobile, tablet, or desktop.
- 🎨 **Custom Board**: A visually engaging layout with background imagery and styled pieces.

---

## 🛠️ Technologies Used

| Purpose       | Stack        |
|---------------|--------------|
| Structure     | HTML         |
| Styling       | CSS          |
| Game Logic    | JavaScript   |
| Backend       | Python (Flask) |
| Versioning    | Git          |

---

## ▶️ Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/snake-and-ladders-game.git
   cd snake-and-ladders-game
   ```

2. (Optional) Set up a virtual environment and install Flask:
   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install flask
   ```

3. Run the app:
   ```bash
   python app.py
   ```

4. Open your browser and visit:
   ```
   http://localhost:5000
   ```

---

## 📁 Project Structure

```
SNAKE-AND-LADDERS/
├── static/
│   ├── board.jpg
│   ├── index.css
│   └── index.js
├── template/
│   └── index.html
├── app.py
└── README.md
```

---

## 📜 How to Play

- Open the game in your browser.
- Two players take turns rolling the dice.
- The game piece moves according to the dice value.
- If a player lands on a ladder, they climb up.
- If a player lands on a snake, they slide down.
- First to reach the final square wins!

---



## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- Inspired by the classic board game we all love.
- Python Flask Docs
- MDN Web Docs for JavaScript and CSS references
