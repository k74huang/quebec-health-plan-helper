$(document).ready(function()
{

	console.log("document ready");

	$("#submit").click(function()
	{
		var resString;

		var arrivalDate = new Date($("#arrival").val());
		arrivalDate.setHours(arrivalDate.getHours() + 5);
		console.log(arrivalDate);

		var regDate = new Date($("#registration").val());
		regDate.setHours(regDate.getHours() + 5);
		console.log(regDate);

		if(arrivalDate == 'Invalid Date' || regDate == 'Invalid Date')
		{
			resString = "Please verify that the dates are entered correctly.<br>请保证日期输的没错。"
		}

		else
		{
			var eligibleDate = new Date(arrivalDate);

			if(regDate > arrivalDate && regDate.getMonth() != arrivalDate.getMonth())
			{
				eligibleDate.setMonth(regDate.getMonth() + 2);
				eligibleDate.setDate(1);

				console.log("Registration date: " + regDate);

				if(regDate.getDate() > 15)
				{
					eligibleDate.setMonth(eligibleDate.getMonth() + 1);
					eligibleDate.setDate(1);
				}
			}
			else
			{
				eligibleDate.setMonth(arrivalDate.getMonth() + 3);
				eligibleDate.setDate(1);
				// console.log(eligibleDate);
			}
			resString = "The health plan becomes valid on: " + eligibleDate.toLocaleDateString("en-CA") + "<br>太阳卡会在 " + eligibleDate.toLocaleDateString("zh-CN") + " 生效。";
		}

		$("#result").html(resString);

	});

});