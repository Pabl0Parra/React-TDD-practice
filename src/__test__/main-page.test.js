import React from "react";
import { screen, render } from "@testing-library/react";

import { MainPage } from "../components/main-page";

// --- Test Driven Dev -----
// 1. RED (failed) --> create a test that fails
// 2. GREEN (passed) --> write minimun code in order to pass the test
// 3. Refactor --> apply clean code & other good practices (like code smells..)

//1st commit - This will fail since the component is not being created yet (MainPage) & the component does'nt contain the simpsons quotes
// describe("Main Page mount", () => {
//   it("must display the main page title", () => {
//     render(<MainPage />);
//     expect(screen.getByText(/simpsons quotes/i)).toBeInTheDocument();
//   });
// });

// 3rd commit -> Refactor
describe("Main Page mount", () => {
  it("must display the main page title", () => {
    render(<MainPage />);
    // change the query to a role one, so even if I change the <h1> tag to any other tag, the test will pass
    expect(
      screen.getByRole("heading", { name: /simpsons quotes/i })
    ).toBeInTheDocument();
  });
});

// --- Test para verificar listado (RED) ---
// Es un nuevo bloque de describe donde valido que al hacer render, exista un listado. Para ello uso la query de findAllByRole que retorna una promesa. Esta promesa es resuelta con el await.
// Al ser resuelta la promesa, retorna un array donde cada índice contiene un nodo por cada coincidencia del role “listitem”.
describe("Quotes List", () => {
  it("must display 3 quotes", async () => {
    render(<MainPage />);

    expect(await screen.findAllByRole("listitem")).toHaveLength(3);
  });
});
