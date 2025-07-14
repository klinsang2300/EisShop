import Footer from "@/Component/Footer"
import MainContentWrapper from "@/Component/MainContentWrapper"
import NavBar from "@/Component/Navbar"
import PreOrderModal from "@/Component/PreOrderModal/PreOrderModal"


export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="Pagemain">
            <NavBar />
            <MainContentWrapper> 
                {children}
                </MainContentWrapper>
            <Footer />
            <PreOrderModal/>
        </div>

    )
}