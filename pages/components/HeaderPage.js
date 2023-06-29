import whatsLogo from '../../public/logovetorizada.png'
import Image from 'next/image'
import { Navbar } from 'flowbite-react';
import classNames from '../../styles/Header.module.scss'

export default function HeaderPage() {
    const scrollBottom = () => {
        window.scrollBy({
            top: 700,
            behavior: 'smooth'
        })
    }

    return (
        <div className={classNames.header}>
            <Navbar theme={{ root: { base: 'px-2 py-2.5 sm:px-4' } }}>
                <Navbar.Brand href="#">
                    <Image
                        alt="BrotherHood Logo"
                        src={whatsLogo}
                        height={80}
                    />
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Navbar.Link active href="#">
                        Home
                    </Navbar.Link>
                    <Navbar.Link id='aboutButton' onClick={(e) => scrollBottom(e)}>
                        Sobre
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
} 