import ContentLoader from "react-content-loader";

const MyLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={400}
		height={460}
		viewBox="0 0 400 460"
		backgroundColor="#8a8a8a"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="30" cy="36" r="26" />
		<rect x="85" y="17" rx="2" ry="2" width="140" height="14" />
		<rect x="85" y="44" rx="2" ry="2" width="290" height="21" />
		<rect x="1" y="80" rx="2" ry="2" width="380" height="380" />
	</ContentLoader>
);

export default MyLoader;
