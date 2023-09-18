import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback, useState } from "react"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { LoginModal } from "features/AuthByUsername"
import { useDispatch, useSelector } from "react-redux"
import { getUserAuthData, userActions } from "entities/User"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} title="Astra blog" theme={TextTheme.INVERTED} />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                >
                    Create an article
                </AppLink>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
                    {t("Выйти")}
                </Button>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t("Войти")}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    )
})
