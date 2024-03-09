import { sum } from "../sum";

test("sum", () => {
    expect(sum(2,5)).toBe(7);
    expect(sum(2,-5)).toBe(-3);
})