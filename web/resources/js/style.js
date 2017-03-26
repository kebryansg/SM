

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


$("#cboProvincia").change(function () {
    $.ajax({
        type: 'Post',
        url: 'pruebaCombo',
        data: {
            id: $("#cboProvincia").val(),
            op: 'cantones'
        },
        success:function(response){
            $("#cboCanton").html(response);
        }

    });
});
$("#cboCanton").change(function () {
    $.ajax({
        type: 'Post',
        url: 'pruebaCombo',
        data: {
            id: $("#cboCanton").val(),
            op: 'parroquias'
        },
        success:function(response){
            $("#cboParroquia").html(response);
        }

    });
});