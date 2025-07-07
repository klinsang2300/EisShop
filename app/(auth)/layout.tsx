export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="auth-main">
            {children}
        </section>

    )
}