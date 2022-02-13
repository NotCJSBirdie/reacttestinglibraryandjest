import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Input from "./Input";

describe("Input Component Test", () => {
  it("rendered input", () => {
    const { getByTestId } = render(<Input showDiv={false} />);

    const input = getByTestId("searchBar");

    expect(input).toBeTruthy();
  });

  test("rendered div", () => {
    const { getByTestId } = render(<Input showDiv={true} />);

    const div = getByTestId("divWeWantedToShow");

    expect(div).toBeTruthy();
  });

  test("do not render div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);

    const div = queryByTestId("divWeWantedToShow");

    expect(div).toBeFalsy();
  });

  it("change on input causes change on output", async () => {
    await act(async () => {
      const { getByTestId } = render(<Input showDiv={true} />);

      const input = getByTestId("searchBar");
      const header = getByTestId("displaySearch");

      const inputWord = "Pedro";

      await fireEvent.change(input, {
        target: {
          value: inputWord,
        },
      });

      expect(header.innerHTML).toBe(inputWord);
    });
  });
});

// we use queryByTestId not getByTestId in the third test because we want to know if the element is there or not. Because if we are just saying getByTestId, then we already assume it is there and we are just getting the name of the id.

// by the way, TEST and IT ARE THE SAME!! PERIODT!

// we use the act functions because we are targeting a state that WILL CHANGE INSIDE A COMPONENT!
