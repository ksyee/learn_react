import React from 'react';
import { createRoot } from 'react-dom';

const iconCircle = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
			fill="url(#paint0_linear_1202_8)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1202_8"
				x1="5"
				y1="-1.92473e-07"
				x2="19.5"
				y2="24"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#06FD10" />
				<stop offset="1" stopColor="#00E1CE" />
			</linearGradient>
		</defs>
	</svg>
);

const searchBar = (
	<form>
		<div>
			<label htmlFor="search">검색어</label>
			<input id="search" type="search" placeholder="검색어를 입력해주세요" />
		</div>
		<button type="submit" aria-label="검색">
			{iconCircle}
		</button>
	</form>
);

createRoot(document.querySelector('#root')).render(searchBar);
