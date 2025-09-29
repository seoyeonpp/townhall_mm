export default function Home() {
  // HTML을 먼저 반환하고, DOM에 추가된 후에 이벤트 리스너를 등록
  setTimeout(() => {
    const landingText = document.getElementById('landing-text')
    if (landingText) {
      landingText.addEventListener('click', () => {
        landingText.innerHTML = 'GO TO TALK'
        setTimeout(() => {
          window.location.href = '/talk'
        }, 500)
      })
    }
  }, 0)

  return `
    <main id="landing-text">
      <h1>
       MADELEINE MEMORY RIVERSIDE TALK 2025
      </h1>
      <aside class="water"></aside>
    </main>
    <svg color-interpolation-filters="sRGB">
      <filter id="waves">
        <feTurbulence id="turbo" type="fractalNoise" 
          numOctaves="2" result="warp" 
          baseFrequency="0.14" 
        />
        <feDisplacementMap 
          xChannelSelector="R" yChannelSelector="G" 
          scale="30" in="SourceGraphic" in2="warp" 
        />
      </filter>
    </svg>
    
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap");
      :root {
        font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);
        --clr-bg: #020617;
        --clr-text: #fff;
      }
      body {
        height: 100svh;
        display: grid;
        place-items: center;
        font-family: "Noto Serif", serif;
        // background: var(--clr-bg);
        color: var(--clr-text);
        overflow: hidden;
        padding: 1em;
        background: linear-gradient(-45deg, #FFE8DB, #739EC9, #000000, #5682B1);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      svg {
        position: absolute;
        pointer-events: none;
        height: 0;
        width: 0;
      }
      main {
        position: relative;
      }
      h1 {
        font-size: 1.2em;
        font-weight: normal;
        -webkit-box-reflect: below 0px linear-gradient(transparent, white);
        outline: none;
        display: inline-block;
      }
      @property --r {
        inherits: true;
        syntax: "<angle>";
        initial-value: 0deg;
      }
      @keyframes flow {
        to {
          --r: 1turn;
        }
      }
      .water {
        position: absolute;
        inset: 0;
        height: 100%;
        inset-block-start: 100%;
        z-index: 2;
        overflow: hidden;
      }
      .water::after {
        content: "";
        position: absolute;
        inset: -1000vh;
        transform-origin: 47% 50%;
        backdrop-filter: url(#waves);
        pointer-events: none;
        animation: 50s infinite linear flow;
        transform: scale(2.5, 1) rotate(var(--r));
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
    </style>
  `
}
