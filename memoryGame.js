
  const cards = [
    {id: 1, name : "HTML" , img: "img/html.png"  },
    {id: 2, name : "CSS" , img: "img/css.png"  },
    {id: 3, name : "Git" , img: "img/git.png"  },
    {id: 4, name : "JavaScript" , img: "img/javascript.png"  },
    {id: 5, name : "React" , img: "img/react.png"  },
    {id: 6, name : "Tailwind" , img: "img/tailwind.png"  },
    {id: 7, name : "NodeJS" , img: "img/nodejs.png"  },
    {id: 8, name : "GitHub" , img: "img/github.png"  },
    ];

    const duplicateAndShuffle = (arr) => { 
    let doubleArray = [...arr, ...arr];
    return doubleArray.sort(() =>Math.random() -0.5);
  };


  const container = document.getElementById("container");
  const menu = document.querySelector(".menu");

  let moveCounter = 0;
  let firstClicked = false;
  let startTime = 0;
  let timerInterval;
  let flippedCards = [];
  let lockBoard = false;




  const startTimer = () => {
    startTime = Date.now()
    timerInterval = setInterval(()=> {
      const elapsedTime = Math.floor ((Date.now() - startTime) / 1000);
      document.getElementById("timer").textContent = `Time: ${elapsedTime}s`;
    },1000);
  };
  
  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const updateMoveCounter = () => {
    moveCounter++;
    document.getElementById("move-counter").textContent = `Moves: ${moveCounter}`;
};

const checkForMatch = () => {
  lockBoard = true;
  updateMoveCounter();

  const [card1, card2] = flippedCards;
  if (card1.dataset.id === card2.dataset.id) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
    flippedCards = [];
    lockBoard = false;

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

   

    if (!firstClicked) {
      firstClicked = true;
      startTimer();
    }

    if (flippedCards.length ===2) {
      checkForMatch();

    }
  };
  const renderCards = () => {
    menu.style.display = "none";
    container.style.display = "grid";
    container.innerHTML = "";

    document.getElementById("move-counter").style.display = "block";
    document.getElementById("timer").style.display = "block";

    const shuffleCards = duplicateAndShuffle(cards);


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

  document.getElementById("quick-btn").addEventListener("click", renderCards);



const questBtn = document.getElementById("quest-btn");
const player2Btn = document.getElementById("player2-btn");
const shopBtn = document.getElementById("shop-btn");


questBtn.addEventListener("click", () => {
  alert("Under Constuction 🚧")
});

player2Btn.addEventListener("click", () => {
  alert("Under Constuction 🚧")
});

shopBtn.addEventListener("click", () => {
  alert("Under Constuction 🚧")
});

