import { render, screen } from "@testing-library/react-native";
import FlashCardContainer from "../../components/FlashCardContainer"; 

describe(FlashCardContainer, () => {
  test("renders a FlashCard element with activity at index card", () => {
    const card = 1
    const nextCard = jest.fn();
    const activities = ['walk', 'cinema', 'park'];
    const addChoice = jest.fn();
  
    render(
      <FlashCardContainer
        card={card}
        nextCard={nextCard}
        activities={activities}
        addChoice={addChoice}
      />
    );
  
    const flashCardComponent = screen.getByText("cinema")
    expect(flashCardComponent).toBeDefined();
  })
})