import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the home page brand headline", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /başkent özpen pvc/i })
  ).toBeInTheDocument();
});
