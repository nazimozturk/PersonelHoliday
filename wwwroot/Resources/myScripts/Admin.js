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


    // off ve on click işlemleri arasındaki fark, off önceki işlemi silmektedir. önce off sonra on yazılır ki bu mükerrer kaydı önlemektedir.
    $(document).off("click", "#PersonelDelete").on("click", "#PersonelDelete", function () {
        $.ajax({
            type: "DELETE",
            url: "api/DeletePersonel?id=" + $("#selectionPersonel").val(),
            dataType: "json",
            //data: JSON.stringify([{ id: $("#selectionPersonel").val() }]),
            success: function (data) {
                alert("ok");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Hataa");
            },
        });
    });

    //User Update
    $(document).off("click", "#PersonelUpdate").on("click", "#PersonelUpdate", function () {
        $.ajax({
            type: "PUT",
            url: "api/Update?id=" + $("#selectionPersonel").val() + "&FirstName=" + $("#firstname").val() + "&LastName=" + $("#lastname").val() + "&Email=" + $("#email").val(),
            dataType: "json",
            //data: JSON.stringify([{ id: $("#selectionPersonel").val() }]),
            success: function (data) {
                alert("ok");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Hataa");
            },
        });
    });

    //Departman Listeleme
    var jsonData = {};
    $.ajax({
        type: "GET",
        url: "api/Departman",
        dataType: "json",
        data: JSON.stringify(jsonData),
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#departant").append('<option value="' + data[i]["id"] + '">' + data[i]["departmentName"] + "</option>");

                $("#selectionPersonel").change(function () {
                    var selectedIndex = $("#selectionPersonel").val();

                    $("#departant").val(data[selectedIndex - 1]["firstName"]);
                });
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Hataa");
        }, // For Süslü
    }); //Ajax Süslü

    //PersonelInsert bakılacak !
    $(document).off("click", "#PersonelAdd").on("click", "#PersonelAdd", function () {
        $.ajax({
            type: "POST",
            url: "api/PersonelInsert?id=" + "&FirstName=" + $("#firstname").val() + "&LastName=" + $("#lastname").val() + "&Password=" + $("#password").val() + "&Email=" + $("#email").val(),
            dataType: "json",
            //data: JSON.stringify([{ id: $("#selectionPersonel").val() }]),
            success: function (data) {
                alert("ok");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Hataa");
            },
        });
    });


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