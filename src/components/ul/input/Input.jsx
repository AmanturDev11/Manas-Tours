// import "./Input.scss";
import scss from "./Input.module.scss";

export const Input = ({ type, value, setData, placeholder }) => {
	return (
		<div className={scss.Input}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<input
							type={type}
							value={value}
							placeholder={placeholder}
							onChange={(e) => {
								setData(e.target.value);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
