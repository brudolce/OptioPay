import { render } from "@testing-library/react";
import Home from "./index";

describe("Top tests", () => {
  it("Top renders without craching", () => {
    const page = render(
        <Home />
 
    );
    expect(page).toMatchSnapshot();
  });
});
