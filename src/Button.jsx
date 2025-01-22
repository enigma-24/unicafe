const Button = ({ children, onGetFeedback }) => {
	return (
		<>
			<button onClick={() => onGetFeedback((current) => current + 1)}>
				{children}
			</button>
		</>
	);
};

export default Button;
