import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "./Button";

describe("Button Component Test", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button />);

    const button = getByTestId("button");

    expect(button).toBeTruthy();
  });

  it("render 1 button before button click", () => {
    const { getAllByTestId } = render(<Button />);

    const buttonList = getAllByTestId("button");

    expect(buttonList).toHaveLength(1);
  });

  it("render 2 buttons after button click", async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);

      const buttonList = getAllByTestId("button");

      await fireEvent.click(buttonList[0]);

      expect(getAllByTestId("button")).toHaveLength(2);
    });
  });
});

// we use queryByTestId not getByTestId in the third test because we want to know if the element is there or not. Because if we are just saying getByTestId, then we already assume it is there and we are just getting the name of the id.

// by the way, TEST and IT ARE THE SAME!! PERIODT!

// we use the act functions because we are targeting a state that WILL CHANGE INSIDE A COMPONENT!
