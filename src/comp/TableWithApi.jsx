import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { fetchItems } from '../redux/slices/itemSlice';
import { ThreeDots } from 'react-loader-spinner'


function TableWithApi() {
	const [limit, setLimit] = useState(5);
	const [fetching, setFetching] = useState(true);
	const dispatch = useDispatch();
	const items = useSelector(state => state.itemSlice.items);
	const status = useSelector(state => state.itemSlice.status);



	async function fetchData() {
		dispatch(fetchItems({
			limit,
			setLimit,
			setFetching,
		}));
	}
	useEffect(() => {
		if (fetching) {
			fetchData();
		}
	}, [fetching]);
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		}
	}, [])

	const scrollHandler = (e) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			setFetching(true);
		}
	}
	return (
		<div>
			<table class="iksweb">
				<tbody>
					<tr>
						<td><b>First Name</b></td>
						<td><b>Last Name</b></td>
						<td><b>Email</b></td>
						<td><b>Age</b></td>
						<td><b>Developer?</b></td>
					</tr>

					{status === 'loading' ?
						<ThreeDots
							height="80"
							width="80"
							radius="9"
							color="black"
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
							visible={true}
						/>
						: items.map((obj) => (
							<tr>
								<td>{obj.firstName}</td>
								<td>{obj.lastName}</td>
								<td>{obj.email}</td>
								<td>{obj.age}</td>
								<td>{obj.developer}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default TableWithApi;