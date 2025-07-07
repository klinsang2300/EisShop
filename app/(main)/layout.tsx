import Footer from "@/Component/Footer"
import MainContentWrapper from "@/Component/MainContentWrapper"
import NavBar from "@/Component/Navbar"


export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <MainContentWrapper> {children}</MainContentWrapper>
            <Footer />
        </>

    )
}