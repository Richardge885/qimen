document.getElementById('home-paipanfangshi').addEventListener('change', () => {
  choosePaiPanScript();
});

function choosePaiPanScript() {
  const paipanIpc = document.createElement('script');
  paipanIpc.type = 'module';
  if (document.getElementById('home-paipanfangshi').value == '飞盘') {
    document.getElementById('jushu').checked = true;
    document.getElementById('shichen').checked = false;
  } else if (document.getElementById('home-paipanfangshi').value == '转盘') {
    document.getElementById('jushu').checked = false;
    document.getElementById('shichen').checked = true;
  }
}

choosePaiPanScript();
