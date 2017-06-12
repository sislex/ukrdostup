$(document).ready(() => {
    var params = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    var params = "width=1,height=1,resizable=no,scrollbars=no,status=no";
    var wind = window.open("https://ad.admitad.com/g/5351d3d56efbfe2254f5e6dcee139a/", "target", params);
    // document.focus();
    setTimeout(function () {
        // wind.document.close();
        wind.close();
    }, 1000);


    // getLink();
});

function getLink() {
    // $.ajax({
    //     url: "http://noblockme.ru/api/anonymize?url=http://tut.by",
    //     // url: "http://tut.by",
    //     dataType: 'JSONP',
    //     jsonpCallback: 'callback',
    //     type: 'GET',
    //     success: function (data) {
    //         console.log(data);
    //     },
    //     error:function(){
    //         console.log("Error");
    //     }
    // });
    $.get('/Api', {'url': 'vk.com'}, (response) => {
        // $('.container').remove();
        // $('iframe').attr('src', response.result);
        // // console.log(response.result);
        //
        // // location.href = response.result;
        // window.open(response.result);
    }, 'json');
}