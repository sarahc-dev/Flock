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
    const items = screen.getAllByTestId("match");
    expect(items.length).toBe(2);
    expect(items[0].props.children).toBe("GravyBoat");
    expect(items[1].props.children).toBe("SalmonHat");
  });
});