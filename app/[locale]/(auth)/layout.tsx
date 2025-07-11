import NavbarLogin from "@/Component/(auth)/Navbar/Navbar"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="authpage">
            <NavbarLogin />
            <section className="auth-main">
                {children}
            </section>
        </div>
    )
}