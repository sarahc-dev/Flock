// TODO: Once jest is set up to work with typescript

import { fireEvent, render, screen } from "@testing-library/react-native";
// import DropdownMenu from "../../components/DropdownMenu";
const DropdownMenu = () => {}

describe(DropdownMenu, () => {
  xtest("setSelectedName is called with value when value changes", () => {
      const selectedName = "Test Name";
      const setSelectedName = jest.fn();
      const dropdownOptions = [
        { label: "Sarah", value: "Sarah" },
        { label: "Verity", value: "Verity" },
        { label: "Evan", value: "Evan" }
      ];
    
      render(<DropdownMenu 
        selectedName={selectedName}
        setSelectedName={setSelectedName}
        dropdownOptions={dropdownOptions}
      />)

      const selectorElement = screen.getByTestId("name-selector");
      fireEvent.valueChange(selectorElement, "Verity")
  })
})