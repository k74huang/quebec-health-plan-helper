$(document).ready(function()
{

	console.log("document ready");

	$("#submit").click(function()
	{
		var resString;

		var arrivalDate = new Date($("#arrival").val());
		arrivalDate.setHours(arrivalDate.getHours() + 4);

		var regDate = new Date($("#registration").val());
		regDate.setHours(regDate.getHours() + 4);

		if(arrivalDate == 'Invalid Date' || regDate == 'Invalid Date')
		{
			resString = "Please verify that the dates are entered correctly.<br>请保证日期输的没错。"
		}

		else
		{
			var eligibleDate = new Date(arrivalDate);
			eligibleDate.setMonth(arrivalDate.getMonth() + 3);
			eligibleDate.setDate(1);

			if(regDate > arrivalDate && regDate.getMonth() != arrivalDate.getMonth())
			{
				eligibleDate.setMonth(regDate.getMonth() + 2);
				if(regDate.getDate() > 15)
				{
					eligibleDate.setMonth(regDate.getMonth() + 3);
				}
				console.log(regDate.getMonth());
			}
			resString = "The health plan becomes valid on: " + eligibleDate.toLocaleDateString("en-CA") + "<br>健康计划会在 " + eligibleDate.toLocaleDateString("zh-CN") + " 生效。";
		}

		$("#result").html(resString);

	});

});