import Image from 'next/image'
import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import classNames from './Navbar.module.scss'
import whatsLogo from '../../../public/logovetorizada.png'

export default function Navbar() {
    const scrollBottomWelcome = () => {
        document.querySelector('#welcome').scrollIntoView({
            behavior: 'smooth'
        })
    }
    const scrollBottomGames = () => {
        document.querySelector('#jogos').scrollIntoView({
            behavior: 'smooth'
        })
    }
    const scrollBottomContact = () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        })
    }

    const scrollBottomVideo = () => {
        document.querySelector('#video').scrollIntoView({
            behavior: 'smooth'
        })
    }


    return (
        <div className={classNames.header}>
            <FlowbiteNavbar theme={{ root: { base: 'px-2 py-2.5 sm:px-4' } }}>
                <FlowbiteNavbar.Brand href="#">
                    <Image
                        alt="BrotherHood Logo"
                        src={whatsLogo}
                        height={80}
                    />
                </FlowbiteNavbar.Brand>

                <FlowbiteNavbar.Toggle />

                <FlowbiteNavbar.Collapse>
                    <FlowbiteNavbar.Link active href="#">
                        Home
                    </FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link  onClick={(e) => scrollBottomWelcome(e)}>
                        Sobre
                    </FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link onClick={(e) => scrollBottomGames(e)}>
                        Jogos
                    </FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link onClick={(e) => scrollBottomVideo(e)}>
                        chippix
                    </FlowbiteNavbar.Link>
                    <FlowbiteNavbar.Link onClick={(e) => scrollBottomContact(e)}>
                        Contato
                    </FlowbiteNavbar.Link>
                </FlowbiteNavbar.Collapse>
            </FlowbiteNavbar>
        </div>
    );
} 