$(document).ready(() => {
    console.log(123);
    getLink();
});

function callback() {
    console.log(222);
}

function getLink() {
    $.ajax({
        // url: "https://noblockme.ru/api/anonymize?url=http://tut.by",
        url: "http://tut.by",
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        success: function (data) {
            console.log(data);
        },
        error:function(){
            console.log("Error");
        }
    });
    // $.get('http://noblockme.ru/api/anonymize?url=http://tut.by', {}, (response) => {
    //     console.log(response);
    // }, 'jsonp');
}