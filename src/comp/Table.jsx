import { useEffect, useRef, useState } from 'react';
import '../App.css';


function Table({ data, rowHeight, visibleRows }) {
	const rootRef = useRef();
	const [start, setStart] = useState(0);

	function getTopHeight() {
		return rowHeight * start;
	}
	function getBottomHeight() {
		return rowHeight * (data.length - (start + visibleRows + 1));
	}

	function onScroll(e) {
		setStart(Math.min(
			data.length - visibleRows - 1,
			Math.floor(e.target.scrollTop / rowHeight)
		));
	}

	useEffect(() => {
		rootRef.current.addEventListener('scroll', onScroll);
		return () => {
			rootRef.current.removeEventListener('scroll', onScroll);
		}
	},)
	return (
		<div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
			<div style={{ height: getTopHeight() }} />
			<table class="iksweb">
				<tbody>
					{data.slice(start, start + visibleRows + 1).map((row, rowIndex) => (
						<tr
							style={{ height: rowHeight }}
							key={start + rowIndex}
						>{row.map((text, colIndex) => (
							<td key={start + '' + rowIndex + colIndex}>{text}</td>
						))}</tr>
					))}
				</tbody>
			</table>
			<div style={{ height: getBottomHeight() }} />
		</div>
	);
}

export default Table;