
$(document).ready(function () {
	$("#table").bootstrapTable({
		url: "api/Personel",
		pagination: true,
		search: true,
		columns: [
			{
				field: "id",
				title: "Personel ID",
			},
			{
				field: "firstName",
				title: "Personel Adı",
			},
			{
				field: "lastName",
				title: "Personel Soyadı",
			},
			{
				field: "email",
				title: "E-Posta",
			},
			{
				field: "allowedPermitCount",
				title: "Kullanılan İzin",
			},
			{
				field: "activeStatus",
				title: "Durum",
			},
			{
				field: "totalPermitCount",
				title: "Toplam İzin",
			},
		]
	});
})