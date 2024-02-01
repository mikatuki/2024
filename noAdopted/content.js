let Tmusic = ''; //採用
let Fmusic = ''; //不採用
let Adopted = 0; //判定用

// 嬉しい曲
var musicURL = chrome.runtime.getURL('music/vinculum.mp3');
Tmusic = new Audio(musicURL);

// 悲しい曲
var musicURL2 = chrome.runtime.getURL('music/hotaru-piano.mp3');
Fmusic = new Audio(musicURL2);

function f(n) {
  let cs = n.childNodes;
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];
    if (c.nodeType == Node.TEXT_NODE) {
      c.textContent = c.textContent.replace(/。/g, 'にゃん。');
      if (/添いかねる|残念|見送/.test(c.textContent)) {
        Adopted = 1;
      }
    } else {
      f(c);
    }
  }
  return Adopted;
}

let noAdopted = f(document.body); // document.body は HTML の文章全体を示す要素

if (window.confirm('音鳴らすにゃん？')) {
  if (noAdopted == 1) {
    Fmusic.play();
  } else {
    Tmusic.play();
  }
}
