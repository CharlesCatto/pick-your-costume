// import LazyImage from "../components/LazyImage/LaztImage";

// const CostumeTest = () => {
// 	return (
// 		<div style={{ width: "300px", border: "1px solid red" }}>
// 			<LazyImage
// 				src={`${import.meta.env.BASE_URL}images/costumes/vampire.jpg`}
// 				alt="Vampire costume"
// 			/>
// 		</div>
// 	);
// };

// export default CostumeTest;
import LazyImage from "./LazyImage/LazyImage";

const CostumeTest = () => {
	return (
		<div style={{ width: "300px", border: "1px solid red" }}>
			<LazyImage src="images/costumes/vampire.jpg" alt="Vampire costume" />
		</div>
	);
};

export default CostumeTest;
