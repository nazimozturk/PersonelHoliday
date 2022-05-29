$(document).ready(function () {
    //$('#resim').addClass('d-none');
    $("#resim").hide();
    $("#personel").hide();
    $("#onayBekleyenL1").hide();
    $("#onayBekleyenMudur").hide();

    var jsonData = {};
    $.ajax({
        type: "GET",
        url: "api/Personel",
        dataType: "json",
        data: JSON.stringify(jsonData),
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#selectionPersonel").append('<option value="' + data[i]["id"] + '">' + data[i]["firstName"] + " " + data[i]["lastName"] + "</option>");
            }

            $("#selectionPersonel").change(function () {
                var selectedIndex = $("#selectionPersonel").val();

                $("#firstname").val(data[selectedIndex - 1]["firstName"]);
                $("#lastname").val(data[selectedIndex - 1]["lastName"]);
                $("#email").val(data[selectedIndex - 1]["email"]);
                $("#Status").val(data[selectedIndex - 1]["activeStatus"]);
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Hataa");
        }, // For Süslü
    }); //Ajax Süslü
}); // Document Süslü

function personelGoster() {
    $("#personel").show();
    $("#onayBekleyenL1").hide();
    $("#onayBekleyenMudur").hide();
    $("#resim").addClass("d-none");
}

function onayBekleyen() {
    $("#onayBekleyenL1").show();
    $("#personel").hide();
    $("#onayBekleyenMudur").show();
    $("#resim").addClass("d-none");
}
function onayBekleyenMudur() {
    $("#onayBekleyenMudur").show();
    $("#onayBekleyenL1").hide();
    $("#personel").hide();
    $("#resim").addClass("d-none");
}