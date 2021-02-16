const quiz = [
  {
    question:'ゲーム市場、最も売れたゲーム機は次のうちどれか？',
    answers: [
      'SFC',
      'PS2',
      'Switch',
      'Nintendo DS'      
    ],
    correct: 'Nintendo DS' 
  }, {
    question:'ニュージーランドにいる羊の数は人口の何倍？',
    answers: [
      '7倍',
      '10倍',
      '0.5倍',
      'ほぼ1倍'      
    ],
    correct: '7倍' 
  }, {
    question:'日本の英語圏と称される地域は？',
    answers: [
      '京都嵐山',
      '沖縄那覇',
      '東京福生',
      '北海道ニセコ'      
    ],
    correct: '北海道ニセコ' 
  }, {
    question:'日本とタイの時差は何時間？',
    answers: [
      '1時間',
      '5時間',
      '0時間',
      '2時間'      
    ],
    correct: '2時間' 
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//HTMLに定数文字列反映 選択肢定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;  
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！！');
    score++;
  } else {
    window.alert('不正解。。。');
  }  

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！！アナタの正解数は' + score + '/' + quizLength + 'です！！');
  }

};
// クリックで正解不正解判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

