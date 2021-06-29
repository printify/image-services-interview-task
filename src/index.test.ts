import { foo } from "./index";

describe("foobar", () => {
	it("should return `true`", () => {
		expect.assertions(1);
		expect(foo()).toBe("true");
	});
});
