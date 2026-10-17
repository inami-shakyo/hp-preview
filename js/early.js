// ページの表示より先に読む小さな処理：前に選んだ文字の大きさを戻す（その人のブラウザにだけ覚えている）
try { if (localStorage.getItem('fontsize') === 'large') document.documentElement.classList.add('large'); } catch (e) {}
