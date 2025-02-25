import { useState } from 'react';

export default function Popup() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="popup-container">
			<div className="popup-title">
				<img
					src="./icon.png"
					width={64}
					alt="ccex ugly logo"
				/>
				<h1>Create Chrome ExtensionZ</h1>
			</div>
			<div className="popup-content">
				<b>React 19 - TypeScript</b>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>Increment</button>
			</div>
		</div>
	);
}
