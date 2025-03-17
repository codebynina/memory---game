document.addEventListener("DOMContentLoaded", ()=> {
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
  

  const renderCards = () => {
    console.log("Game started!");
    menu.style.display = "none";
    container.style.display = "grid";
    container.innerHTML = "";

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

card.addEventListener("click", () => card.classList.toggle("flipped"));
container.appendChild(card);
    });
  

  setTimeout(() => {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.add("flipped");
    });
  }, 2000);
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
});
