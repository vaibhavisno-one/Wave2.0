// "use client";

// import { useTheme } from "next-themes";

// export default function Home() {
// 	const { setTheme } = useTheme();

// 	return (
// 		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
// 			<button onClick={() => setTheme("light")}>Light</button>
// 			<button onClick={() => setTheme("dark")}>dark</button>
// 			<button onClick={() => setTheme("system")}>System</button>
// 		</main>
// 	);
// }
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: any) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// i have coppied this because theme provider in layout.tsx was not working /responding