/* loading */
var bg = $('#loader-bg'),
loader = $('#loader');
/* ローディング画面の非表示を解除 */
bg.removeClass('is-hide');
loader.removeClass('is-hide');

/* 読み込み完了 */
$(window).on('load', stopload);

/* 10秒経ったら強制的にローディング画面を非表示にする */
setTimeout('stopload()',10000);

/* ローディング画面を非表示にする処理 */
function stopload(){
bg.delay(900).fadeOut(800);
loader.delay(900).fadeOut(300);
}