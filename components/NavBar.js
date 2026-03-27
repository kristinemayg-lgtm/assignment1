//imports link from Next.js for client-side navigation
import Link from 'next/link';
//NavBar component displayes on all pages
export default function NavBar() {
    return (
        //Container styled with 'navbar' css class
        <nav className="navbar">
            {/* Link to Homepage*/}
            <Link href="/">Home</Link>
            {/* Link to Counter page*/}
            <Link href="/counter">Counter</Link>
            {/* Link to Form page*/}
            <Link href="/form">Form</Link>
        </nav>
    );
}
