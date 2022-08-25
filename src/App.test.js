import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock("axios");

const hits = [
  {
    previewURL:
      "https://cdn.pixabay.com/photo/2016/09/18/14/21/swimmer-1678307_150.jpg",
  },
  {
    previewURL:
      "https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_150.jpg",
  },
];

describe("Fetching", () => {
  it("fetches items from API", async () => {
    axios.get.mockImplementationOnce(
      () =>
        Promise.resolve({
          data: { hits },
        })
    );
    const { fetchedImageArr } = render(
      <App />
    );
  });
});




describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/pics.io/i)).toBeInTheDocument();
  })
})
