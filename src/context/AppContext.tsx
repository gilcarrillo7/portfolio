import React, {
	Dispatch,
	SetStateAction,
	createContext,
	useState,
} from "react";

interface IContext {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IContext>({
	darkMode: true,
	setDarkMode: () => undefined,
});

const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
	const mode = localStorage.getItem("mode");
	const [darkMode, setDarkMode] = useState<boolean>(
		mode ? mode === "true" : true
	);

	return <Provider value={{ darkMode, setDarkMode }}>{children}</Provider>;
};

export default AppContext;
