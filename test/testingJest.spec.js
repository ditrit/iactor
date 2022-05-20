import sum from "../testingJest.js";

test("Function: sum", () => {
	expect(sum(3, 4)).toEqual(7);
});
