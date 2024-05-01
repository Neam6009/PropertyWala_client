import React, { useEffect, useState } from "react";
import classes from "../assets/Styles/AdminControlPropertyCard.module.css";
import { backendUrl } from '../App';
const AdminControlPropertyCard = ({ property }) => {
	const [deleted, setDeleted] = useState(false);
	const [csrfToken, setCsrfToken] = useState();

	useEffect(() => {


	}, []);

	const removePropertyHandler = async () => {
		fetch(backendUrl + `/properties/remove/${property._id}`, {
			method: "POST",
			credentials: 'include',
			headers: {

			},
		}).then(() => setDeleted(true));
	};

	return (
		<div>
			{!deleted && (
				<div className={classes.propertyCardAdminControl}>
					<div className={classes.propertyCardAdminControlChild}>
						<div>
							<p className={classes.icon}>{property.name[0]}</p>
						</div>
						<div>
							<h2>{property.name}</h2>
							<div className={classes.card__handle}>
								<span className={classes.handle}>
									{property.location}
								</span>
							</div>
						</div>
					</div>
					<div className={classes.propertyCardAdminControlButtons}>
						<button onClick={removePropertyHandler}>
							Remove Property
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminControlPropertyCard;
