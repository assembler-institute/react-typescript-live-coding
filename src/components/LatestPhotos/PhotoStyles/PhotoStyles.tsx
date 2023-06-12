import { FC, PropsWithChildren } from "react";
import "./photostyles.css";

const PhotoStyles: FC<PropsWithChildren> = ({ children }) => {
	return <div className="background">{children}</div>;
};

export default PhotoStyles;
