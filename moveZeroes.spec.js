import moveZeroes from "./moveZeroes";

describe("Returns a sentence with words that are less than or equal to a given number", () => {
  it('Should return "is a" when given the sentence "This is a sentence" and number 2', () => {
    expect(moveZeroes("This is a sentence", 2)).toEqual("is a");
  });
});
