import { SVGProps } from 'react';

type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const LawIcon = ({
	size = 36,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		fill="#000000"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		height={size || height}
		width={size || width}
		stroke="#000000"
		{...props}
	>
		<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			<path
				fill-rule="evenodd"
				d="M12.75 2.75a.75.75 0 00-1.5 0V4.5H9.276a1.75 1.75 0 00-.985.303L6.596 5.957A.25.25 0 016.455 6H2.353a.75.75 0 100 1.5H3.93L.563 15.18a.762.762 0 00.21.88c.08.064.161.125.309.221.186.121.452.278.792.433.68.311 1.662.62 2.876.62a6.919 6.919 0 002.876-.62c.34-.155.606-.312.792-.433.15-.097.23-.158.31-.223a.75.75 0 00.209-.878L5.569 7.5h.886c.351 0 .694-.106.984-.303l1.696-1.154A.25.25 0 019.275 6h1.975v14.5H6.763a.75.75 0 000 1.5h10.474a.75.75 0 000-1.5H12.75V6h1.974c.05 0 .1.015.14.043l1.697 1.154c.29.197.633.303.984.303h.886l-3.368 7.68a.75.75 0 00.23.896c.012.009 0 0 .002 0a3.154 3.154 0 00.31.206c.185.112.45.256.79.4a7.343 7.343 0 002.855.568 7.343 7.343 0 002.856-.569c.338-.143.604-.287.79-.399a3.5 3.5 0 00.31-.206.75.75 0 00.23-.896L20.07 7.5h1.578a.75.75 0 000-1.5h-4.102a.25.25 0 01-.14-.043l-1.697-1.154a1.75 1.75 0 00-.984-.303H12.75V2.75zM2.193 15.198a5.418 5.418 0 002.557.635 5.418 5.418 0 002.557-.635L4.75 9.368l-2.557 5.83zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.846 5.846 0 002.547-.576L19.25 9.367l-2.547 5.807z"
			></path>
		</g>
	</svg>
);

export const AcmeLogo = () => (
	<svg fill="none" height="36" viewBox="0 0 32 32" width="36">
		<path
			clipRule="evenodd"
			d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const RedUserIcon: React.FC<IconSvgProps> = (props) => (
	<svg
		width="256px"
		height="256px"
		viewBox="-2.4 -2.4 28.80 28.80"
		xmlns="http://www.w3.org/2000/svg"
		fill="#000000"
		stroke="#000000"
	>
		<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke="#CCCCCC"
			stroke-width="0.288"
		></g>
		<g id="SVGRepo_iconCarrier">
			{' '}
			<title></title>{' '}
			<g id="Complete">
				{' '}
				<g id="user">
					{' '}
					<g>
						{' '}
						<path
							d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
							fill="none"
							stroke="#f31260"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></path>{' '}
						<circle
							cx="12"
							cy="7"
							fill="none"
							r="4"
							stroke="#f31260"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></circle>{' '}
					</g>{' '}
				</g>{' '}
			</g>{' '}
		</g>
	</svg>
);

export const GreenUserIcon: React.FC<IconSvgProps> = (props) => (
	<svg
		width="256px"
		height="256px"
		viewBox="-2.4 -2.4 28.80 28.80"
		xmlns="http://www.w3.org/2000/svg"
		fill="#000000"
		stroke="#000000"
	>
		<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
		<g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke="#CCCCCC"
			stroke-width="0.288"
		></g>
		<g id="SVGRepo_iconCarrier">
			{' '}
			<title></title>{' '}
			<g id="Complete">
				{' '}
				<g id="user">
					{' '}
					<g>
						{' '}
						<path
							d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
							fill="none"
							stroke="#17c964"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></path>{' '}
						<circle
							cx="12"
							cy="7"
							fill="none"
							r="4"
							stroke="#17c964"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						></circle>{' '}
					</g>{' '}
				</g>{' '}
			</g>{' '}
		</g>
	</svg>
);

export const IconArrowRight: React.FC<IconSvgProps> = (props) => {
	return (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		height={24}
		width={24}
		fill="currentColor"
		{...props}
	  >
		<path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
	  </svg>
	)
  }
