'use client'
import { useTheme } from 'next-themes';
import { Textarea } from "@nextui-org/input";
export default function SearchText() {
    const { theme, setTheme } = useTheme();

    return (
        <>
        {theme === 'light' ? (
                    <Textarea
                        minRows={1}
                        color="warning"
                        variant="bordered"
                        className="w-full flex flex-col justify-center items-center h-full"
                        size="lg"
                    />
                ) : (
                    <Textarea
                        minRows={1}
                        color="primary"
                        variant="bordered"
                        className="w-full flex flex-col justify-center items-center h-full"
                        size="lg"
                    />
                )}
            </>
    )
}