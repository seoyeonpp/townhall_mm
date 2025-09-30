export default function HomeNeon() {
  // HTML을 먼저 반환하고, DOM에 추가된 후에 이벤트 리스너를 등록
  setTimeout(() => {
    const talkButton = document.getElementById('talk-button')
    if (talkButton) {
      talkButton.style.opacity = '1'
      talkButton.style.visibility = 'visible'
    }
  }, 2000)
  return `
    <h1>MADELEINE MEMORY RIVERSIDE TALK 2025</h1>
    <div id="talk-button" style="opacity: 0;  visibility: hidden; transition: opacity 0.5s ease-in-out;">
      <a href="/talk" >
        GO TO TALK
        <i></i>
      </a>
    </div>
    <style>
      @import url(https://fonts.googleapis.com/css?family=Exo+2:200i);
      :root {
        /* Base font size */
        font-size: 10px;   
        
        /* Set neon color */
        --neon-text-color: #f40;
        --neon-border-color: #08f;
      }

      body {
        font-family: 'Exo 2', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;  
        background: #000;
        min-height: 100svh;
      }

      h1 {
        font-size: 5rem;
        font-weight: 200;
        font-style: italic;
        color: #fff;
        border: 0.4rem solid #fff;
        border-radius: 2rem;
        text-transform: uppercase;
        animation: flicker 1.5s infinite alternate;     
      }

      h1::-moz-selection {
        background-color: var(--neon-border-color);
        color: var(--neon-text-color);
      }

      h1::selection {
        background-color: var(--neon-border-color);
        color: var(--neon-text-color);
      }

      h1:focus {
        outline: none;
      }

      /* Animate neon flicker */
      @keyframes flicker {
          
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            
              text-shadow:
                  -0.2rem -0.2rem 1rem #fff,
                  0.2rem 0.2rem 1rem #fff,
                  0 0 2rem var(--neon-text-color),
                  0 0 4rem var(--neon-text-color),
                  0 0 6rem var(--neon-text-color),
                  0 0 8rem var(--neon-text-color),
                  0 0 10rem var(--neon-text-color);
              
              box-shadow:
                  0 0 .5rem #fff,
                  inset 0 0 .5rem #fff,
                  0 0 2rem var(--neon-border-color),
                  inset 0 0 2rem var(--neon-border-color),
                  0 0 4rem var(--neon-border-color),
                  inset 0 0 4rem var(--neon-border-color);        
          }
          
          20%, 24%, 55% {        
              text-shadow: none;
              box-shadow: none;
          }    
      }
           a {
        position:relative;
        display: inline-block;
        font-size: 2rem;
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
