$(document).ready(() => {
    getLink();
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