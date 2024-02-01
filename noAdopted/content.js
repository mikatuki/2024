let Tmusic = '';
let Fmusic = '';

// 嬉しい曲
var musicURL = chrome.runtime.getURL('music/vinculum.mp3');
Tmusic = new Audio(musicURL);

// 悲しい曲
var musicURL2 = chrome.runtime.getURL('music/hotaru-piano.mp3');
Fmusic = new Audio(musicURL2);

function f(n) {
  let noAdopted = 0;
  let cs = n.childNodes;
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];
    if (c.nodeType == Node.TEXT_NODE) {
      c.textContent = c.textContent.replace(/。/g, 'にゃん。');
      if (/添いかねる|残念|見送/.test(c.textContent)) {
        noAdopted = 1;
      }
    } else {
      f(c);
    }
  }
  return noAdopted;
}

let noAdopted = f(document.body); // document.body は HTML の文章全体を示す要素

if (window.confirm('音鳴らすにゃん？')) {
  if (noAdopted) {
    Fmusic.play();
  } else {
    Tmusic.play();
  }
}
