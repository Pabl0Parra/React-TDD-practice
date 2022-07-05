import React from "react";

//2nd commit - This will help past first part of test but still fails since it doesn´t show the simpsons quotes
// export const MainPage = () => <div />;

// Here I implement minimun code for the test to pass (GREEN)
// export const MainPage = () => <h1>Simpsons quotes</h1>;

// Change the <h1> tag to show that my test passes
// export const MainPage = () => (
//   <div aria-level="1" role="heading">
//     Simpsons quotes
//   </div>
// );

// Minimum for Listing test to pass (GREEN)
export const MainPage = () => (
  <>
    <h1>Simpsons quotes</h1>

    <ul>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
  </>
);
