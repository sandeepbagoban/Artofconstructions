import Header from "./components/Navbar";
import Footer from "./components/Footer";

export default function LocaleLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
