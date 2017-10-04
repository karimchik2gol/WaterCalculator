$(function() {
	capacity = 9 // litrov
	bottleHeight = 450; // PX
	weight = 20;
	physicalActivity = 0;
	gender = "man";
	newHeight = 0;
	val = calculate();
	draw();

	$(".gender span").click(function() {
		$(".selected-gender").removeClass("selected-gender");
		$(this).addClass("selected-gender");
		gender = $(this).data("param");
		calculate();
	});

	$( ".weight .slider" ).slider({
		min: 20,
	  	max: 140,
	  	step: 5,
	  	change: function(event, ui) {
			weight = ui.value;
			calculate();
		}
	});

	$( ".physical-activity .slider" ).slider({
		min: 0,
	  	max: 6,
	  	step: 0.5,
	  	change: function(event, ui) {
			physicalActivity = ui.value;
			calculate();
		}
	});


	function calculate() {
		val = detectGender();
		newHeight = (val / capacity) * bottleHeight;
		console.log(val);

		showNewResult();
		draw();
	}

	function calculate_for_man() {
		return weight * 0.0314 + physicalActivity * 0.63333;
	}

	function calculate_for_woman() {
		return weight * 0.03 + physicalActivity * 0.6;
	}

	function draw() {
		$(".bottle-cals-bg").css("height", newHeight);
	}

	function detectGender() {
		if(gender == "man")
			return calculate_for_man();
		else
			return calculate_for_woman();
	}

	function showNewResult() {
		$(".weight-label span").text(weight + "кг");
		$(".physical-label span").text(physicalActivity + "ч");
		$(".total span").text(val.toFixed(1) + "л");
	}
})