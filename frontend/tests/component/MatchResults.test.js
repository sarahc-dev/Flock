import { render } from '@testing-library/react-native';
import { Text } from "react-native"
import MatchResults from '../../components/MatchResults';

describe(MatchResults, () => {
  test('renders the correct title', () => {
    const { getByText } = render(<MatchResults />);
    const textElement = getByText('Your Matches');
    expect(textElement).toBeDefined();
  });

  test('Scrollview contains the correct amount of text elements', () => {
    const { getByTestId } = render(<MatchResults />);
    const item1 = getByTestId("scroll-view-1");
    const textElements = item1.findAllByType(Text);
    expect(textElements.length).toBe(4);
  })
});
