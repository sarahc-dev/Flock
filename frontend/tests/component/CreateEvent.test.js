import { fireEvent, render, screen } from "@testing-library/react-native";
import CreateEvent from "../../components/CreateEvent";

describe(CreateEvent, () => {
  let eventNameInput;
  let nameInput;
  let addName;
  let removeName;
  let locationNameInput;

  beforeEach(() => {
    const name = "testName1";
    nameInput = jest.fn();
    const nameList = ["testName2", "testName3"];
    const eventName = "testEventName";
    addName = jest.fn();
    removeName = jest.fn();
    eventNameInput = jest.fn();
    const locationName = "testLocation"
    locationNameInput = jest.fn()

    render(
      <CreateEvent
        name={name}
        nameInput={nameInput}
        nameList={nameList}
        eventName={eventName}
        addName={addName}
        removeName={removeName}
        eventNameInput={eventNameInput}
        locationName={locationName}
        locationNameInput={locationNameInput}
      />
    );
  });

  test("renders the correct title", () => {
    const textElement = screen.getByText("Create Event");
    expect(textElement).toBeDefined();
  });

  test("shows the event name provided by props", () => {
    const textInputElement = screen.getByTestId("event-name-text-input");
    expect(textInputElement.props.value).toBe("testEventName");
  });
    
  test("eventNameInput is called with new event name when text changes", () => {
    const textInputElement = screen.getByTestId("event-name-text-input");
    fireEvent.changeText(textInputElement, "Test Name");
    expect(eventNameInput).toHaveBeenCalledWith("Test Name");
  });
  
  test("shows a person's name provided by props", () => {
    const textInputElement = screen.getByTestId("name-text-input");
    expect(textInputElement.props.value).toBe("testName1");
  });
    
  test("nameInput is called with new name when text changes", () => {
    fireEvent.changeText(screen.getByTestId("name-text-input"), "T")
    expect(nameInput).toHaveBeenCalledWith("T");
  });
  
  test("addName is called when name is submitted", () => {
    const textInputElement = screen.getByTestId("name-text-input");
    fireEvent(textInputElement, "submitEditing");
    expect(addName).toHaveBeenCalledTimes(1);
  });

  test("diplays names that have been added", () => {
    const names = screen.getAllByTestId("name-text");
    expect(names[0].props.children).toBe("testName2")
    expect(names[1].props.children).toBe("testName3")
    expect(names.length).toBe(2);
  });
  
  test("removeName is called with the name when name is deleted", () => {
    const deleteButton = screen.getAllByTestId("remove-name")[0];
    fireEvent(deleteButton, "press");
    expect(removeName).toHaveBeenCalledWith("testName2")
  });

  test("shows the location name provided by props", () => {
    const textInputElement = screen.getByTestId("location-name-text-input");
    expect(textInputElement.props.value).toBe("testLocation");
  });
    
  test("locationNameInput is called with new location name when text changes", () => {
    const textInputElement = screen.getByTestId("location-name-text-input");
    fireEvent.changeText(textInputElement, "locationName");
    expect(locationNameInput).toHaveBeenCalledWith("locationName");
  });});
