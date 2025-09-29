export default function Talk() {
  setTimeout(() => {
    const card = document.querySelector('.card')
    function clickRotate() {
      card!.classList.toggle('rotated')
    }
    if (card) {
      card.addEventListener('click', clickRotate)
    }
  }, 0)
  return `
    <div class="cards-wrapper">
      <div class="card-container">
        <div class="card">
          <div class="card-contents card-front">
            <div class="card-depth">
              <h2>Click card</h2>
              <hr>
              <p>For 3D rotation</p>
            </div>
          </div>
          <div class="card-contents card-back">
            <div class="card-depth">
              <h2>Click card again</h2>
              <hr>
              <p>To turn back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
    body{
      background: linear-gradient(-45deg, #FFE8DB, #739EC9, #000000, #5682B1);
      background-size: 400% 400%;
      animation: gradient 10s ease infinite;
    }
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    // CARD
    .cards-wrapper {
      margin-top: 50px;
    }
    .card-container {
      perspective: 1200px;
    }
    .card {
      margin: 0 auto;
      height: 500px;
      width: 100%;
      max-width: 80%;
      position: relative;
      border-radius: 25px;
      transition: all 1s ease;
      transform-style: preserve-3d;
      box-shadow: 1px 3px 3px rgba(0,0,0,0.2)
    }

    .rotated {
      transform: rotateY(-180deg);
    }
    .card-contents {
      width: 100%;
      height: 100%;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
      h2, p {
        text-shadow: 1px 2px 2px rgba(0,0,0,0.2);
      }
      h2 {
        font-size: 3em;
        margin: 0 auto;
      }
      hr {
        width: 50%;
        margin: 20px auto;
      }
      p {
        margin: 0 auto;
      }
    }
    .card-depth {
      transform: translateZ(100px) scale(0.98);
      perspective: inherit;

    }
    .card-front {
      background: linear-gradient(to top left, #3a6186, #89253e);           
      transform-style: preserve-3d;
    }
    .card-back {
      transform: rotateY(180deg);
      background: linear-gradient(to top left, #ffa17f, #00223e);
      transform-style: preserve-3d;
    }
    </style>
  `
}
