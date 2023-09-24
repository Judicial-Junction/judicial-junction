'use client';
import { useEffect, useState } from 'react';
export default function Map() {
	const [iframeHeight, setIframeHeight] = useState(800);

	useEffect(() => {
		const updateIframeHeight = () => {
			const windowHeight =
				window.innerHeight || document.documentElement.clientHeight;
			setIframeHeight(windowHeight);
		};

		window.addEventListener('resize', updateIframeHeight);

		updateIframeHeight();

		return () => {
			window.removeEventListener('resize', updateIframeHeight);
		};
	}, []);

	return (
		<iframe
			src="https://delhi-plot-kh6ujptkyvimoj3tjzrs2t.streamlit.app/?embed=true&embed_options=dark_theme&embed_options=disable_scrolling&"
			height={iframeHeight}
			style={{ width: '100%', border: 'none' }}
		/>
	);
}
