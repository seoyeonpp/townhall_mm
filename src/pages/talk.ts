export default function Talk() {
  const questions = [
    {
      no: 1,
      question: '나만의 징크스가 있다면? (없으면 루틴 말하기)',
    },
    {
      no: 2,
      question: '아무하고나 밥을 먹을 수 있다면 누구랑? (죽은 사람 포함. 먹어본 사람 제외)',
    },
    {
      no: 3,
      question: '내 키가 1cm가 된다면?',
    },
    {
      no: 4,
      question: '나는 전생에 무엇이었을지?',
    },
    {
      no: 5,
      question: `아침에 눈떠보니 내 통장 잔고가 갑자기\n0원이 되어있다면, 가장 먼저 할 일은?\n1000억원이 되어 있다면, 가장 먼저 할 일은?`,
    },
    {
      no: 6,
      question: '내 회사의 대표가 된다면 가장 하고 싶은 일은?',
    },
    {
      no: 7,
      question: '내가 창업할 때, 공동 창업자를 고른다면 나랑 성향이 비슷한 사람 vs 반대인 사람?',
    },
    {
      no: 8,
      question: '주4일제 월급 80% vs 주6일제 월급 150%',
    },
  ]

  // URL 쿼리스트링 관리 함수
  function getQuestionNoFromURL() {
    const urlParams = new URLSearchParams(window.location.search)
    const no = parseInt(urlParams.get('no') || '1')
    return Math.max(1, Math.min(no, questions.length))
  }

  function updateURL(questionNo: number) {
    const url = new URL(window.location.href)
    url.searchParams.set('no', questionNo.toString())
    window.history.pushState({}, '', url)
  }

  // 질문 찾기 함수
  function getQuestionByNo(no: number) {
    return questions.find((q) => q.no === no) || questions[0]
  }

  // 카드 내용 업데이트 함수
  function updateCardContent(frontNo: number, backNo: number) {
    const frontQuestion = getQuestionByNo(frontNo)
    const backQuestion = getQuestionByNo(backNo)

    const cardFront = document.querySelector('.card-front .card-depth')
    const cardBack = document.querySelector('.card-back .card-depth')

    if (cardFront && frontQuestion) {
      cardFront.innerHTML = `
        <h2>질문 ${frontQuestion.no}</h2>
        <hr>
        <p style="white-space: pre-line;">${frontQuestion.question}</p>
      `
    }

    if (cardBack && backQuestion) {
      cardBack.innerHTML = `
        <h2>질문 ${backQuestion.no}</h2>
        <hr>
        <p style="white-space: pre-line;">${backQuestion.question}</p>
      `
    }
  }

  setTimeout(() => {
    const card = document.querySelector('.card')
    let currentNo = getQuestionNoFromURL()
    let isRotated = false
    let frontNo = currentNo
    let backNo = currentNo + 1 > questions.length ? 1 : currentNo + 1

    // 초기 카드 내용 설정
    updateCardContent(frontNo, backNo)

    function clickRotate() {
      card!.classList.toggle('rotated')
      isRotated = !isRotated

      if (isRotated) {
        // front → back으로 회전: 현재 back이 보이게 됨
        currentNo = backNo
        updateURL(currentNo)

        // transition 완료 후 숨겨진 front 업데이트
        setTimeout(() => {
          frontNo = backNo + 1 > questions.length ? 1 : backNo + 1
          updateCardContent(frontNo, backNo)
        }, 1000)
      } else {
        // back → front으로 회전: 현재 front가 보이게 됨
        currentNo = frontNo
        updateURL(currentNo)

        // transition 완료 후 숨겨진 back 업데이트
        setTimeout(() => {
          backNo = frontNo + 1 > questions.length ? 1 : frontNo + 1
          updateCardContent(frontNo, backNo)
        }, 1000)
      }
    }

    // 브라우저 뒤로가기/앞으로가기 처리
    window.addEventListener('popstate', () => {
      currentNo = getQuestionNoFromURL()
      updateCardContent(currentNo, currentNo + 1)
    })

    if (card) {
      card.addEventListener('click', clickRotate)
    }
  }, 0)

  return `
    <div class="cards-wrapper">
      <div class="card-container">
        <div class="card">
          <div class="card-contents card-front">
          <div class="card-bg"></div>
            <div class="card-depth">
              <h2>Click card</h2>
              <hr>
              <p>For 3D rotation</p>
            </div>
          </div>
          <div class="card-contents card-back">
          <div class="card-bg"></div>
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
        font-size: 2rem;
        margin: 0 auto;
      }
      hr {
        width: 50%;
        margin: 20px auto;
      }
      p {
        margin: 0 auto;
        font-size: 1rem;
        padding: 0 20px;
      }
    }
    .card-depth {
      transform: translateZ(100px) scale(0.98);
      perspective: inherit;

    }
    .card-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 0 200px rgba(255,255,255,0.1);
      filter: blur(10px);
      backface-visibility: hidden;
      background: rgba(255,255,2551);
    }
    .card-front {
      transform-style: preserve-3d;
    }
    .card-back {
      transform: rotateY(180deg);
      transform-style: preserve-3d;
    }
    </style>
  `
}
