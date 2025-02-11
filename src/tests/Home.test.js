import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

/** Tests that Home renders snack/drink counts */
test("Home shows correct snack/drink counts", () => {
  const snacks = [{ id: "s1" }, { id: "s2" }];
  const drinks = [{ id: "d1" }];
  render(<Home snacks={snacks} drinks={drinks} />);

  expect(screen.getByText("We have 2 snacks and 1 drink available.")).toBeInTheDocument();
});
