// UNIT TESTS
describe("Calculate for man with weight of 70 and physical activity 3", function() {
	beforeEach(function(){ 
		weight = 70;
		physicalActivity = 3;
		val = weight * 0.0314 + physicalActivity * 0.63333;
	})

	it("should return", function() {
		expect(calculate_for_man()).toEqual(val);
	})


	it("will not equal wrong value", function() {
		val += 0.00001; // changed last number
		expect(calculate_for_man()).not.toEqual(val);
	})
})

describe("Calculate for woman with weight of 90 and physical activity 2", function() {
	beforeEach(function(){ 
		weight = 90;
		physicalActivity = 2;
		val = weight * 0.03 + physicalActivity * 0.6;
	})
	
	it("should return", function() {
		expect(calculate_for_woman()).toEqual(val);
	})


	it("will not equal wrong value", function() {
		val += 0.001; // changed last number
		expect(calculate_for_woman()).not.toEqual(val);
	})
})

describe("Calculate should work", function() {
	it("without any errors", function() {
		expect(function() { calculate() }).not.toThrow();
	})
})

describe("calculateHeight", function() {
	it("should return proper newHeight", function() {
		expect(calculateHeight()).toEqual((val / capacity) * bottleHeight);
	})
})

describe("Draw should work", function() {
	it("without any errors", function() {
		expect(function() { draw() }).not.toThrow();
	})
})

describe("detectGender should return", function() {
	it("calculate_for_man", function() {
		expect(detectGender()).toEqual(calculate_for_man());
	})

	it("calculate_for_woman", function() {
		gender = "woman";
		expect(detectGender()).toEqual(calculate_for_woman());
	})
})

describe("showNewResult should work", function() {
	it("without any errors", function() {
		expect(function() { showNewResult() }).not.toThrow();
	})
})