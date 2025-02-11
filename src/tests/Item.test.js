import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Item from "../Item";

/** Tests that Item shows correct details */
test("Item shows item detail if found", () => {
  const items = [
    {
      id: "test-item",
      name: "Test Item",
      description: "Test Desc",
      recipe: "Test Recipe",
      serve: "Test Serve"
    }
  ];

  render(
    <MemoryRouter initialEntries={["/items/test-item"]}>
      <Routes>
        <Route
          path="/items/:id"
          element={<Item items={items} cantFind="/items" />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Test Item")).toBeInTheDocument();
  expect(screen.getByText("Test Desc")).toBeInTheDocument();
  expect(screen.getByText("Test Recipe")).toBeInTheDocument();
  expect(screen.getByText("Test Serve")).toBeInTheDocument();
});

test("Item redirects if not found", () => {
  const items = [{ id: "test-item", name: "Test Item" }];

  render(
    <MemoryRouter initialEntries={["/items/not-there"]}>
      <Routes>
        <Route
          path="/items/:id"
          element={<Item items={items} cantFind="/items" />}
        />
        <Route path="/items" element={<p>Redirected to items listing</p>} />
      </Routes>
    </MemoryRouter>
  );

  // If redirect is successful, we see the fallback message
  expect(screen.getByText("Redirected to items listing")).toBeInTheDocument();
});
