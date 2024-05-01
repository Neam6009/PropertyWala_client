import React, { useEffect, useState } from "react";
import classes from "../assets/Styles/AdminControlUserCard.module.css";
import { useSelector } from "react-redux";
import { backendUrl } from '../App';

const AdminControlUserCard = ({ user }) => {
	const [isCertified, setIsCetified] = useState(user.isCertified);
	const [isAdmin, setIsAdmin] = useState(user.isAdmin);
	const [csrfToken, setCsrfToken] = useState();
	const CurrentUser = useSelector((state) => state.auth.user);


	useEffect(() => {


	}, []);

	const certifiedHandler = async (change) => {
		await fetch(backendUrl + `/certified/${user._id}/${change}`, {
			method: "POST",
			credentials: 'include',
			headers: {

			},
		});
		setIsCetified(change);
	};
	const adminHandler = async (change) => {
		await fetch(backendUrl + `/admin/${user._id}/${change}`, {
			method: "POST",
			credentials: 'include',
			headers: {

			},

		});
		setIsAdmin(change);
	};

	const removeUserHandler = async (CurrentUser, deleteUser) => {
		const currentUserId = CurrentUser._id
		const deleteUserId = deleteUser._id
		if (currentUserId == deleteUserId) {
			alert("you can't delete your own account here!");
			return;
		} else {
			const response = await fetch(backendUrl + `/admin/deleteUserByAdmin`, {
				method: "POST",
				credentials: 'include',
				headers: {
					"Content-Type": "application/json",

				},
				body: JSON.stringify({ deleteUserId: deleteUserId }),

			});

			const data = await response.json();
			if (response.status !== 200) {
				alert(data.error);
			} else if (response.status == 200) {
				alert(data.success);
			}

		}

	};


	return (
		<div>
			<div className={classes.userCard}>
				<div className={classes.userCardChild}>
					<div>
						<p className={classes.icon}>{user.name[0]}</p>
					</div>
					<div>
						<h2>{user.name}</h2>
						<div className={classes.card__handle}>
							<span className={classes.handle}>{user.email}</span>
						</div>
					</div>
				</div>
				<div className={classes.userCardButtons}>
					{isCertified && (
						<button onClick={() => certifiedHandler(false)}>
							Remove Certified
						</button>
					)}
					{!isCertified && (
						<button onClick={() => certifiedHandler(true)}>
							Make Certified
						</button>
					)}
					{isAdmin && (
						<button onClick={() => adminHandler(false)}>
							Remove Admin
						</button>
					)}
					{!isAdmin && (
						<button onClick={() => adminHandler(true)}>
							Make Admin
						</button>
					)}
					{
						<button onClick={() => removeUserHandler(CurrentUser, user)}>
							Remove user
						</button>
					}
				</div>
			</div>
		</div>
	);
};

export default AdminControlUserCard;
