export default function Home() {
  // HTML을 먼저 반환하고, DOM에 추가된 후에 이벤트 리스너를 등록
  setTimeout(() => {
    const landingText = document.getElementById('landing-text')
    if (landingText) {
      landingText.addEventListener('click', () => {
        landingText.style.opacity = '0'
        const talkButton = document.getElementById('talk-button')
        if (talkButton) {
          talkButton.style.opacity = '1'
          talkButton.style.height = 'auto'
          talkButton.style.visibility = 'visible'
        }
      })
    }
  }, 0)

  return `
    <main>
      <h1 id="landing-text">
       MADELEINE MEMORY RIVERSIDE TALK 2025
      </h1>
      <div id="talk-button" style="opacity: 0; height: 0; visibility: hidden; transition: opacity 0.5s ease-in-out;">
         <a href="/talk" >
            GO TO TALK
            <i></i>
          </a>
       </div>
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
        height: 100%;
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
      @keyframes flow {
        0% {
          transform: scale(2.5, 1) rotate(0deg);
        }
        100% {
          transform: scale(2.5, 1) rotate(360deg);
        }
      }
      @-webkit-keyframes flow {
        0% {
          -webkit-transform: scale(2.5, 1) rotate(0deg);
        }
        100% {
          -webkit-transform: scale(2.5, 1) rotate(360deg);
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
        -webkit-backdrop-filter: url(#waves);
        pointer-events: none;
        animation: 50s infinite linear flow;
        -webkit-animation: 50s infinite linear flow;
        transform: scale(2.5, 1) rotate(0deg);
        -webkit-transform: scale(2.5, 1) rotate(0deg);
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
      
      a {
        position:relative;
        display: inline-block;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 5px;
        color: #FAFAFA;
        border: 3px solid #FAFAFA;
        padding: 25px;
        
      /*  centering */
        text-align: center;
        background: rgba(0,0,0,0.5);
        @include fade-transition(background);

        &:hover {
          background: rgba(8,97,76,0.6);
        }
      }


    i {
    /*   positioning */
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
      
    /*   gradient   */
        background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 1%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,0.85) 71%, rgba(255,255,255,0) 100%); /* FF3.6+ */
        background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(1%,rgba(255,255,255,0.03)), color-stop(30%,rgba(255,255,255,0.85)), color-stop(50%,rgba(255,255,255,0.85)), color-stop(70%,rgba(255,255,255,0.85)), color-stop(71%,rgba(255,255,255,0.85)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.03) 1%,rgba(255,255,255,0.6) 30%,rgba(255,255,255,0.85) 50%,rgba(255,255,255,0.85) 70%,rgba(255,255,255,0.85) 71%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.03) 1%,rgba(255,255,255,0.6) 30%,rgba(255,255,255,0.85) 50%,rgba(255,255,255,0.85) 70%,rgba(255,255,255,0.85) 71%,rgba(255,255,255,0) 100%); /* Opera 11.10+ */
        background: -ms-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.03) 1%,rgba(255,255,255,0.6) 30%,rgba(255,255,255,0.85) 50%,rgba(255,255,255,0.85) 70%,rgba(255,255,255,0.85) 71%,rgba(255,255,255,0) 100%); /* IE10+ */
        background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.03) 1%,rgba(255,255,255,0.6) 30%,rgba(255,255,255,0.85) 50%,rgba(255,255,255,0.85) 70%,rgba(255,255,255,0.85) 71%,rgba(255,255,255,0) 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
        
    /*  forming the shine element
        play around with the width, skew and gradient to get different effects
      */
        width: 15%;
        height: 100%;
        transform: skew(-10deg,0deg);
        -webkit-transform: skew(-10deg,0deg);
        -moz-transform: skew(-10deg,0deg);
        -ms-transform: skew(-10deg,0deg);
        -o-transform: skew(-10deg,0deg);
      
    /*  animating it  */
        animation: move 2s;
        animation-iteration-count: infinite;
        animation-delay: 1s;
        -webkit-animation: move 2s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-delay: 1s;
        -moz-transform: skew(-10deg,0deg);
        -moz-animation: move 2s;
        -moz-animation-iteration-count: infinite;
        -moz-animation-delay: 1s;
        -ms-transform: skew(-10deg,0deg);
        -ms-animation: move 2s;
        -ms-animation-iteration-count: infinite;
        -ms-animation-delay: 1s;
        -o-transform: skew(-10deg,0deg);
        -o-animation: move 2s;
        -o-animation-iteration-count: infinite;
        -o-animation-delay: 1s;
      }


    @keyframes move {
      0%  { left: 0; opacity: 0; }
      5% {opacity: 0.0}
      48% {opacity: 0.2}
      80% {opacity: 0.0}
      100% { left: 82%}
    }

    @-webkit-keyframes move {
      0%  { left: 0; opacity: 0; }
      5% {opacity: 0.0}
      48% {opacity: 0.2}
      80% {opacity: 0.0}
      100% { left: 82%}
    }

    @-moz-keyframes move {
      0%  { left: 0; opacity: 0; }
      5% {opacity: 0.0}
      48% {opacity: 0.2}
      80% {opacity: 0.0}
      100% { left: 88%}
    }

    @-ms-keyframes move {
      0%  { left: 0; opacity: 0; }
      5% {opacity: 0.0}
      48% {opacity: 0.2}
      80% {opacity: 0.0}
      100% { left: 82%}
    }

    @-o-keyframes move {
      0%  { left: 0; opacity: 0; }
      5% {opacity: 0.0}
      48% {opacity: 0.2}
      80% {opacity: 0.0}
      100% { left: 82%}
    }
    </style>
  `
}
