import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import Home from '.';

describe("Index page", (): void => {
	afterEach(() => {
		cleanup();
	});

	it("renders page", (): void => {
		const headings = render(<Home/>).getAllByRole('heading');
		expect(headings.length > 0).toBe(true);
	});
});