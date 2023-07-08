import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import CreateEvent from "../../components/CreateEvent";

// needs to be created
describe(CreateEvent, () => {
  beforeEach(() => {
    const name = "testName1";
    const nameInput = jest.fn();
    const nameList = ["testName2", "testName3"];
    const eventName = "";
    const addName = jest.fn();
    const removeName = jest.fn();
    const eventNameInput = jest.fn();
    render(
      <CreateEvent
        name={name}
        nameInput={nameInput}
        nameList={nameList}
        eventName={eventName}
        addName={addName}
        removeName={removeName}
        eventNameInput={eventNameInput}
      />
    );
  });

  test("renders the correct title", () => {
    const textElement = screen.getByText("Create Event");
    expect(textElement).toBeDefined();
  });

  test("starts with an empty event name", () => {
    const textInputElement = screen.getByPlaceholderText("Enter event name");
    expect(textInputElement).toHaveTextContent("");
  });

  xtest("displays the event name when one is provided", () => {});

  xtest("eventNameInput is called with new event name when text changes", () => {});

  test("starts with an empty name", () => {
    const textInputElement = screen.getByPlaceholderText(
      "Enter name and press enter..."
    );
    expect(textInputElement).toHaveTextContent("");
  });

  xtest("displays your name when one is provided", () => {});

  xtest("nameInput is called with new name when text changes", () => {});

  xtest("addName is called when friend's name is submitted", () => {});

  xtest("there are no names displayed at first", () => {});

  xtest("diplays friend's names that have been added", () => {});

  xtest("if friend's names are passed in they are displayed", () => {});

  xtest("removeName is called with the name when name is deleted", () => {});
});
