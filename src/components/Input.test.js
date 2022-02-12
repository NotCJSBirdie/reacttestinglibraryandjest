import { render } from "@testing-library/react";
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
});

// we use queryByTestId not getByTestId in the third test because we want to know if the element is there or not. Because if we are just saying getByTestId, then we already assume it is there and we are just getting the name of the id.

// by the way, TEST and IT ARE THE SAME!! PERIODT!
