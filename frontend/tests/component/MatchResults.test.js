import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import MatchResults from "../../components/MatchResults";

describe(MatchResults, () => {
  test("renders the correct title", () => {
    const choices = [];
    render(<MatchResults choices={choices} />);
    const textElement = screen.getByText("Your Matches");
    expect(textElement).toBeDefined();
  });

  test("Scrollview contains the choices passed in as props", () => {
    const choices = ["GravyBoat", "SalmonHat"];
    render(<MatchResults choices={choices} />);
    const item1 = screen.getByTestId("scroll-view-1");
    const textElements = item1.findAllByType(Text);

    expect(textElements[0]).toHaveTextContent("GravyBoat");
    expect(textElements[1]).toHaveTextContent("SalmonHat");
    expect(textElements.length).toBe(2);
  });
});
