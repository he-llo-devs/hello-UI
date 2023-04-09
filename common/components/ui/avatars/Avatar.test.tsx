import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen } from '@testing-library/react';
import ExamplePicture from "@/public/images/example-picture.png";

import Avatar from './Avatar';

describe("Index page", (): void => {
	afterEach(() => {
		cleanup();
	});

	it("renders the avatar component", (): void => {
		const avatar = render(<Avatar avatarFallback=''/>);
		expect(avatar.container.firstChild).toBeInTheDocument();
	});

	it("renders the avatar component with an imported picture", (): void => {
		const avatar = render(<Avatar src={ExamplePicture} avatarFallback=''/>);
		expect(avatar.container.firstChild).toBeInTheDocument();
	});

	it("renders the avatar component withouth a picture", (): void => {
		const avatar = render(<Avatar avatarFallback='JB'/>);
		const fallBackText = avatar.getByText("JB");
		expect(fallBackText).toBeInTheDocument();
	});
});