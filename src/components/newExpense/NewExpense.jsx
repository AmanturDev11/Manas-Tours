import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "../ul/input/Input";
import Button from "../ul/button/Button";
import scss from "./NewExpense.module.scss";

const NewExpense = () => {
	const [state, setState] = useState([]);
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");
	const [value4, setValue4] = useState("");
	const url =
		"https://api.elchocrud.pro/api/v1/3bb2205716d3a0324728b55f68691142/egz";
	const getUsers = async () => {
		try {
			const response = await axios.get(url);
			setState([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};
	const postUsers = async () => {
		const newData = {
			inputValue: value1,
			inputValue2: value2,
			inputValue3: value3,
			inputValue4: value4,
		};
		setValue1("");
		setValue2("");
		setValue3("");
		setValue4("");
		try {
			const response = await axios.post(url, newData);
			setState([...response.data]);
			getUsers();
		} catch (error) {
			console.error(error);
		}
	};
	const deleteUsers = async (id) => {
		try {
			const response = await axios.delete(`${url}/${id}`);
			getUsers();
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div className={scss.NewExpense}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.card}>
							<h3>Создать тур</h3>
							<Input
								value={value1}
								setData={setValue1}
								type="text"
								placeholder="название тура"
							/>
							<Input
								value={value2}
								setData={setValue2}
								type="url"
								placeholder="ссылка на картинку"
							/>
							<Input
								value={value3}
								setData={setValue3}
								type="text"
								placeholder="описание тура"
							/>
							<Input
								value={value4}
								setData={setValue4}
								type="number"
								placeholder="стоимость"
							/>
							<Button onClick={postUsers}>Создать</Button>
						</div>
					</div>
					<hr />
					{state.map((item, index) => (
						<div className={scss.car} key={index}>
							<div className={scss.car2}>
								<div className={scss.car3}>
									<img src={item.inputValue2} alt="logo" />
									<h3>{item.inputValue}</h3>
									<p>{item.inputValue3}</p>
									<p>{item.inputValue4}</p>
									<div className={scss.divbutton}>
										<Button
											className={scss.buttonDelete}
											onClick={() => deleteUsers(item._id)}>
											Удалить
										</Button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NewExpense;
