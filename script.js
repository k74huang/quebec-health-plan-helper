$(document).ready(function()
{

	console.log("document ready");

	$("#submit").click(function()
	{
		var arrivalDate = new Date($("#arrival").val());
		arrivalDate.setHours(arrivalDate.getHours() + 4);

		var regDate = new Date($("#registration").val());
		regDate.setHours(regDate.getHours() + 4);

		console.log("Arrival: " + arrivalDate + "\nRegistration: " + regDate);

		var eligibleDate = new Date(arrivalDate);
		eligibleDate.setMonth(arrivalDate.getMonth() + 3);
		eligibleDate.setDate(1);

		if(regDate.getMonth() > arrivalDate.getMonth() && regDate.getDate() > 15)
		{
			eligibleDate.setMonth(eligibleDate.getMonth() + 1);
		}

		var resString = "The health plan becomes valid on: " + eligibleDate.toLocaleDateString("en-CA");

		$("#result").html(resString);

	});

});