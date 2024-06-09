//----] ターゲットの img 要素
const target = document.getElementById('target');
//----] クリックイベント
target.onclick = (evt) => {
  console.log(`( ${evt.offsetX}, ${evt.offsetY} )`);
};
