const p1Display = document.querySelector("#p1Display") as HTMLElement;
const p2Display = document.querySelector("#p2Display") as HTMLElement;
const p1Button = document.querySelector("#p1Button") as HTMLButtonElement;
const p2Button = document.querySelector("#p2Button") as HTMLButtonElement;
const reset = document.querySelector("#reset") as HTMLButtonElement;
const playto = document.querySelector("#playto") as HTMLInputElement;

let p1Score: number = 0;
let p2Score: number = 0;
let winScore: number = 5;
let isGameOver: boolean = false;

p1Button.addEventListener("click", (): void => {
  p1Score++;

  if (!isGameOver) {
    if (winScore === p1Score) {
      isGameOver = true;
      p1Display.classList.add("win");
      p2Display.classList.add("lose");
    }
    p1Display.textContent = p1Score.toString();
  }
});

p2Button.addEventListener("click", (): void => {
  p2Score++;

  if (!isGameOver) {
    if (winScore === p2Score) {
      isGameOver = true;
      p1Display.classList.add("lose");
      p2Display.classList.add("win");
    }
    p2Display.textContent = p2Score.toString();
  }
});

reset.addEventListener("click", resetGame);

playto.addEventListener("change", () => {
  resetGame();
  winScore = parseInt(playto.value);
});

function resetGame(): void {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = p1Score.toString();
  p2Display.textContent = p2Score.toString();
  p1Display.classList.remove("win", "lose");
  p2Display.classList.remove("win", "lose");
}
