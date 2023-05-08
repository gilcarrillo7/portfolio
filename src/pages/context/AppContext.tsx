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
	setDarkMode: () => {},
});

const { Provider } = AppContext;

const AppProvider = ({ children }) => {
	const mode = localStorage.getItem("mode");
	const [darkMode, setDarkMode] = useState<boolean>(mode === "true");

	return <Provider value={{ darkMode, setDarkMode }}>{children}</Provider>;
};

export { AppContext, AppProvider };
