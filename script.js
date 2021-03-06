$(function() {
	/**
		* This program is calculating daily amount of water for man and woman
		* depending on the weight(kg) and physical activy(h).
		* It displays calculated data and shows filled bottle
		* @constructor
		* @see https://jquery.com/
		* @name WaterCalculatorSystem
	*/

	/** 
		* Initializing default values and calling function for default data 
	**/
	capacity = 9 // litrov
	bottleHeight = 450; // PX
	weight = 20;
	physicalActivity = 0;
	gender = "man";
	newHeight = 0;
	val = calculate();
	draw();

	/**
		* Changing gender function 
	**/
	$(".gender span").click(function() {
		$(".selected-gender").removeClass("selected-gender");
		$(this).addClass("selected-gender");
		gender = $(this).data("param");
		calculate();
	});

	/**
	  * Event for Weight slider 
	*/
	$( ".weight .slider" ).slider({
		min: 20,
	  	max: 140,
	  	step: 5,
	  	change: function(event, ui) {
			weight = ui.value;
			calculate();
		}
	});

	/**
	  * Event for Physical Activity slider 
	*/
	$( ".physical-activity .slider" ).slider({
		min: 0,
	  	max: 6,
	  	step: 0.5,
	  	change: function(event, ui) {
			physicalActivity = ui.value;
			calculate();
		}
	});

	/**
	  * Main function for calculating and displaying data  
	*/
	function calculate() {
		val = detectGender();
		newHeight = calculateHeight();

		showNewResult();
		draw();
	}

	/**
	  * Calculations for man 
	  * @memberOf WaterCalculatorSystem
	  * @name calculate_for_man
	*/
	function calculate_for_man() {
		return weight * 0.0314 + physicalActivity * 0.63333;
	}

	/**
	  * Calculations for woman 
	  * @memberOf WaterCalculatorSystem
	  * @name calculate_for_woman
	*/
	function calculate_for_woman() {
		return weight * 0.03 + physicalActivity * 0.6;
	}

	/**
	  * Drawing filled bottle 
	  * @memberOf WaterCalculatorSystem
	  * @name draw
	*/
	function draw() {
		$(".bottle-cals-bg").css("height", newHeight);
	}

	/**
	  * Checking the gender 
	  * @memberOf WaterCalculatorSystem
	  * @name detectGender
	*/
	function detectGender() {
		if(gender == "man")
			return calculate_for_man();
		else
			return calculate_for_woman();
	}

	/**
	  * Changing all labels 
	  * @memberOf WaterCalculatorSystem
	  * @name showNewResult
	*/
	function showNewResult() {
		$(".weight-label span").text(weight + "кг");
		$(".physical-label span").text(physicalActivity + "ч");
		$(".total span").text(val.toFixed(1) + "л");
	}

	/**
	  * Calculating new height of bottle 
	  * @memberOf WaterCalculatorSystem
	  * @name calculateHeight
	*/
	function calculateHeight() {
		return (val / capacity) * bottleHeight;
	}
})