/* import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss" */
import { Theme, useTheme } from "app/providers/ThemeProvider"
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Button, ThemeButton } from "shared/ui/Button/Button"

interface IThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher({ className }: IThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            //className={classNames(cls.btn, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
