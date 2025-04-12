
  const API_URL ="https://raw.githubusercontent.com/codebynina/codebynina.github.io/refs/heads/main/data/cards.json";
 
  async function fetchCards() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      
      renderCards(data);
    } catch (error) {
         console.error("Error fetching cards:", error);
    }
    
  }

  

    const duplicateAndShuffle = (arr) => { 
      return [...arr, ...arr].sort(() =>Math.random() -0.5);
  };


  const container = document.getElementById("container");
  const menu = document.querySelector(".menu");

  let moveCounter = 0;
  let firstClick = false;
  let startTime = 0;
  let timerInterval;
  let flippedCards = [];
  let lockBoard = false;
  let totalPairs = 0;
  const MOVE_LIMIT = 30; 
  const TIME_LIMIT = 60; 




  const startTimer = () => {
    startTime = Date.now()
    timerInterval = setInterval(()=> {
      const elapsedTime = Math.floor ((Date.now() - startTime) / 1000);
      document.getElementById("timer").textContent = `Time: ${elapsedTime}s`;
      if (elapsedTime >= TIME_LIMIT) endGame(false);
    },1000);
  };
  
  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const updateMoveCounter = () => {
    moveCounter++;
    document.getElementById("move-counter").textContent = `Moves: ${moveCounter}`;
    if (moveCounter >= TIME_LIMIT) endGame(false);
};

const checkForMatch = () => {
  lockBoard = true;
  updateMoveCounter();
  const [card1, card2] = flippedCards;
  
  if (card1.dataset.id === card2.dataset.id) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    setTimeout(() => {
      card1.remove();
      card2.remove();
    flippedCards = [];
    totalPairs--;

  if(totalPairs === 0) endGame(true);
  lockBoard = false; 
  }, 500);
} else {
  setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
      lockBoard = false;
    }, 1000)
  }
};

const flipCard = (event) => {
  if (lockBoard) return;
const clickedCard = event.currentTarget;

if (clickedCard.classList.contains("flipped") || clickedCard.classList.contains("matched")) return;
    clickedCard.classList.add("flipped");
    flippedCards.push(clickedCard);

   if (!firstClick) {
      firstClick = true;
      startTimer();
    }

    if (flippedCards.length ===2) checkForMatch();
    
};

  const renderCards = (data) => {
    document.querySelector(".game-title").style.display = "none";
    menu.style.display = "none";
    container.style.display = "grid";
    container.innerHTML = "";

    document.getElementById("move-counter").style.display = "block";
    document.getElementById("timer").style.display = "block";

    const shuffleCards = duplicateAndShuffle(data);
    totalPairs = shuffleCards.length / 2;


    shuffleCards.forEach((pic) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.id = pic.id;
      card.innerHTML = ` 
      <div class ="card-inner">
      <div class="card-front">
        <img src="${pic.img}" alt= "${pic.name}"/>
        </div>
        <div class ="card-back">
        <img src="img/back.png" alt= "Card Back"  />
        </div>
      </div>
`;

card.addEventListener("click", flipCard);
container.appendChild(card);
    });
    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
          card.classList.add("flipped");
      });

      setTimeout(() => {
          document.querySelectorAll(".card").forEach((card) => {
              card.classList.remove("flipped");
          });
      }, 2000);
  }, 500);
};

const endGame =(won) => {
  stopTimer();
  setTimeout(() => {
    alert(won ? "🎉 You won! Game restarting..." : "⏳ Game over! Try again.");
    location.reload();
  }, 500);
};

document.getElementById("quick-btn").addEventListener("click", fetchCards);

document.getElementById("quest-btn").addEventListener("click", () => {
  alert("Under Constuction 🚧")
});

document.getElementById("player2-btn").addEventListener("click", () => {
  alert("Under Constuction 🚧")
});

document.getElementById("shop-btn").addEventListener("click", () => {
  alert("Under Constuction 🚧")
});

