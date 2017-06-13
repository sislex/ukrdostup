$(document).ready(() => {
    event();
    // getLink();
});

function event() {
    $('button').bind('click', function () {
        var url = $(this).attr('url');
        getLink(url);
        console.log(url);
    });
}

function getLink(url) {
    $.get('/Api', {'url': url}, (response) => {
        var params = "width=1,height=1,resizable=no,scrollbars=no,status=no";
        var wind = window.open("https://ad.admitad.com/g/5351d3d56efbfe2254f5e6dcee139a/", "target", params);
        setTimeout(function () {
            wind.close();
            location.href = response.result;
        }, 3000 );
    }, 'json');
}