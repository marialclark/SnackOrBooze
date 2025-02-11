import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "../Menu";

/** Tests that Menu renders a list of items with links */
test("Menu displays the correct items", () => {
  const items = [
    { id: "s1", name: "Snack1" },
    { id: "s2", name: "Snack2" }
  ];

  render(
    <MemoryRouter>
      <Menu items={items} title="Snacks" />
    </MemoryRouter>
  );

  expect(screen.getByText("Snack1")).toBeInTheDocument();
  expect(screen.getByText("Snack2")).toBeInTheDocument();
});
