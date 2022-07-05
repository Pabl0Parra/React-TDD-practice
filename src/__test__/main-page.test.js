import React from "react";
import { screen, render } from "@testing-library/react";

import { MainPage } from "../components/main-page";

// --- Test Driven Dev -----
// 1. RED (failed) --> create a test that fails
// 2. GREEN (passed) --> write minimun code in order to pass the test
// 3. Refactor --> apply clean code & other good practices (like code smells..)

//1st commit - This will fail since the component is not being created yet (MainPage)
describe("Main Page mount", () => {
  it("must display the main page title", () => {
    render(<MainPage />);
    expect(screen.getByText(/simpsons quotes/i)).toBeInTheDocument();
  });
});
