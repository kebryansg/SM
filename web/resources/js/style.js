$("#cerrarMenu").click(function () {
    $(".menu-lateral").toggleClass("close-menu");
    $(".contenedor").toggleClass("open-contenedor");
    $("#cerrarMenu i").toggleClass("fa-chevron-circle-left");
    $("#cerrarMenu i").toggleClass("fa-chevron-circle-right");
});

$("#pruebaTab").click(function () {
    //alert(); 
    $(".nav").append('<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>');
});


$(".close-all-tab").click(function (e) {
    $('.nav-tabs li').remove();
    $('.tab-content').html("");
});

function openModal(id){
    $("#"+id).modal('show');
    $.each($("#"+id+" input"), function (){
        $(this).val("");
    }); 
}

function closeModal(id){
     $("#"+id).modal('toggle');
}



function loadScript(url, callback) {
    var script = document.createElement('script');

    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}