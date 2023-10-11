import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("renders a heading", () => {
    render(<Home />);

    const learn = screen.getByText("Learn");

    expect(learn).toBeInTheDocument();
  });
});
