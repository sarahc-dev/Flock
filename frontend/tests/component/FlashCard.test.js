import { fireEvent, render, screen } from "@testing-library/react-native";
import FlashCard from "../../components/FlashCard"

describe(FlashCard, () => {
  let card;
  let nextCard;
  let activities;
  let addChoice;

  beforeEach(() => {
    card = 1
    nextCard = jest.fn()
    activities = ['walk', 'cinema', 'park'];
    addChoice = jest.fn()

    render(
      <FlashCard
        card={card}
        nextCard={nextCard}
        activities={activities}
        addChoice={addChoice}
      />
    );
  })

  test("it displays the activity at the card index", () => {
    const flashCardComponent = screen.getByText("cinema");
    expect(flashCardComponent).toBeDefined();
  })

  test("when activity is accepted, nextCard is called", () => {
    fireEvent.press(screen.getByTestId("accept-activity"));
    expect(nextCard).toHaveBeenCalledTimes(1);
  })
  
  test("when activity is accepted, addChoice is called with the activity", () => {
    fireEvent.press(screen.getByTestId("accept-activity"));
    expect(addChoice).toHaveBeenCalledWith("cinema");
  })
  
  test("when activity is rejected, nextCard is called", () => {
    fireEvent.press(screen.getByTestId("reject-activity"));
    expect(nextCard).toHaveBeenCalledTimes(1);
  })
  
  test("when activity is rejected, addChoice is not called", () => {
    fireEvent.press(screen.getByTestId("reject-activity"));
    expect(addChoice).not.toHaveBeenCalled();
  })
})