barba.init({
    transitions: [{
        name: 'default-transition',
        leave() {
            // create your stunning leave animation here
            $("a").click(function () {
                $("#menu-cb").prop('checked', false);
            });
        },
        enter() {
            // create your stunning leave animation here
        }
    }]
});

function replaceHeadTags(target) {
    const $newPageHead = $('<head />').html(
        $.parseHTML(
            target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],
            document,
            true
        )
    );
    const headTags = [
        "meta[name='robots']",
        "meta[name='keywords']",
        "meta[name='description']",
        "meta[property^='og']",
        "meta[name^='twitter']",
        "meta[itemprop]",
        "link[rel='next']",
        "link[rel='prev']",
        "link[rel='alternate']",
        "link[rel='canonical']",
        "script[type='application/ld+json']"
    ].join(',');
    // タグを削除
    $('head').find(headTags).remove();
    // タグを追加
    $newPageHead.find(headTags).appendTo('head');

    //Googleアナリティクスに送信
    if (typeof ga === 'function') {
        ga('send', 'pageview', location.pathname);
    }
}