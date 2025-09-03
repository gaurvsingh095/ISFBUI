// import { useState, useEffect } from "react";
// import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";
// import { ISettings } from "../Playground";
// import SettingsModal from "@/components/Modals/SettingsModal";

// type PreferenceNavProps = {
// 	settings: ISettings;
// 	setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
// };

// const PreferenceNav: React.FC<PreferenceNavProps> = ({ setSettings, settings }) => {
// 	const [isFullScreen, setIsFullScreen] = useState(false);

// 	const handleFullScreen = () => {
// 		if (isFullScreen) {
// 			document.exitFullscreen();
// 		} else {
// 			document.documentElement.requestFullscreen();
// 		}
// 		setIsFullScreen(!isFullScreen);
// 	};

// 	useEffect(() => {
// 		function exitHandler(e: any) {
// 			if (!document.fullscreenElement) {
// 				setIsFullScreen(false);
// 				return;
// 			}
// 			setIsFullScreen(true);
// 		}

// 		if (document.addEventListener) {
// 			document.addEventListener("fullscreenchange", exitHandler);
// 			document.addEventListener("webkitfullscreenchange", exitHandler);
// 			document.addEventListener("mozfullscreenchange", exitHandler);
// 			document.addEventListener("MSFullscreenChange", exitHandler);
// 		}
// 	}, [isFullScreen]);

// 	return (
// 		<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full '>
// 			<div className='flex items-center text-white'>
// 				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
// 					<div className='flex items-center px-1'>
// 						<div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
// 					</div>
// 				</button>
// 			</div>

// 			<div className='flex items-center m-2'>
// 				<button
// 					className='preferenceBtn group'
// 					onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
// 				>
// 					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
// 						<AiOutlineSetting />
// 					</div>
// 					<div className='preferenceBtn-tooltip'>Settings</div>
// 				</button>

// 				<button className='preferenceBtn group' onClick={handleFullScreen}>
// 					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
// 						{!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
// 					</div>
// 					<div className='preferenceBtn-tooltip'>Full Screen</div>
// 				</button>
// 			</div>
// 			{settings.settingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />}
// 		</div>
// 	);
// };
// export default PreferenceNav;
// import { useState, useEffect } from "react";
// import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";
// import { ISettings } from "../Playground";
// import SettingsModal from "@/components/Modals/SettingsModal";

// type PreferenceNavProps = {
// 	settings: ISettings;
// 	setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
// 	language: string;
// };

// const PreferenceNav: React.FC<PreferenceNavProps> = ({ setSettings, settings, language }) => {
// 	const [isFullScreen, setIsFullScreen] = useState(false);

// 	const handleFullScreen = () => {
// 		if (isFullScreen) {
// 			document.exitFullscreen();
// 		} else {
// 			document.documentElement.requestFullscreen();
// 		}
// 		setIsFullScreen(!isFullScreen);
// 	};

// 	useEffect(() => {
// 		const exitHandler = () => {
// 			setIsFullScreen(!!document.fullscreenElement);
// 		};

// 		document.addEventListener("fullscreenchange", exitHandler);
// 		document.addEventListener("webkitfullscreenchange", exitHandler);
// 		document.addEventListener("mozfullscreenchange", exitHandler);
// 		document.addEventListener("MSFullscreenChange", exitHandler);

// 		return () => {
// 			document.removeEventListener("fullscreenchange", exitHandler);
// 			document.removeEventListener("webkitfullscreenchange", exitHandler);
// 			document.removeEventListener("mozfullscreenchange", exitHandler);
// 			document.removeEventListener("MSFullscreenChange", exitHandler);
// 		};
// 	}, []);

// 	return (
// 		<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
// 			<div className='flex items-center text-white'>
// 				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-medium'>
// 					<div className='flex items-center px-1'>
// 						<div className='text-xs text-label-2 dark:text-dark-label-2'>
// 							{language.charAt(0).toUpperCase() + language.slice(1)}
// 						</div>
// 					</div>
// 				</button>
// 			</div>

// 			<div className='flex items-center m-2'>
// 				<button
// 					className='preferenceBtn group'
// 					onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
// 				>
// 					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
// 						<AiOutlineSetting />
// 					</div>
// 					<div className='preferenceBtn-tooltip'>Settings</div>
// 				</button>

// 				<button className='preferenceBtn group' onClick={handleFullScreen}>
// 					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
// 						{!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
// 					</div>
// 					<div className='preferenceBtn-tooltip'>Full Screen</div>
// 				</button>
// 			</div>

// 			{settings.settingsModalIsOpen && (
// 				<SettingsModal settings={settings} setSettings={setSettings} />
// 			)}
// 		</div>
// 	);
// };

// export default PreferenceNav;
import { useState, useEffect } from "react";
import {
	AiOutlineFullscreen,
	AiOutlineFullscreenExit,
	AiOutlineSetting,
} from "react-icons/ai";
import { ISettings } from "../Playground";
import SettingsModal from "@/components/Modals/SettingsModal";

type PreferenceNavProps = {
	settings: ISettings;
	setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({ setSettings, settings }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const handleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
		setIsFullScreen(!isFullScreen);
	};

	useEffect(() => {
		const exitHandler = () => {
			setIsFullScreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", exitHandler);
		document.addEventListener("webkitfullscreenchange", exitHandler);
		document.addEventListener("mozfullscreenchange", exitHandler);
		document.addEventListener("MSFullscreenChange", exitHandler);

		return () => {
			document.removeEventListener("fullscreenchange", exitHandler);
			document.removeEventListener("webkitfullscreenchange", exitHandler);
			document.removeEventListener("mozfullscreenchange", exitHandler);
			document.removeEventListener("MSFullscreenChange", exitHandler);
		};
	}, []);

	return (
		<div className='flex items-center justify-end bg-dark-layer-2 h-11 w-full'>
			<div className='flex items-center m-2'>
				<button
					className='preferenceBtn group'
					onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
				>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>

				<button className='preferenceBtn group' onClick={handleFullScreen}>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						{!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
			</div>

			{settings.settingsModalIsOpen && (
				<SettingsModal settings={settings} setSettings={setSettings} />
			)}
		</div>
	);
};

export default PreferenceNav;
