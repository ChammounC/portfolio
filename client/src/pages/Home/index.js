import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Intro from 'pages/Home/Intro'
import ProjectSummary from 'pages/Home/ProjectSummary'
import Profile from 'pages/Home/Profile'
import Footer from 'components/Footer'
import { usePrefersReducedMotion, useRouteTransition } from 'hooks'
import { useLocation } from 'react-router-dom'
import iphone11 from 'assets/iphone-11.glb'
import macbookPro from 'assets/macbook-pro.glb'
import mmojo1 from 'assets/mmojo1.png';
import mmojo2 from 'assets/mmojo2.png';
import mmojo1ph from 'assets/mmojo1ph.jpg';
import mmojo2ph from 'assets/mmojo2ph.jpg';
import ts3js from 'assets/ts3js.png';
import ts3jsph from 'assets/ts3jsph.jpg';
import bijou from 'assets/bijou.png';
import blue1 from 'assets/blue1.png';
import blue1ph from 'assets/blue1ph.jpg';
import blue2 from 'assets/blue2.png';
import blue2ph from 'assets/blue2ph.jpg';
import blue3 from 'assets/blue3.png';
import blue3ph from 'assets/blue3ph.jpg';

import './index.css'

const disciplines = ['Frontend', 'Mobile App']

const Home = () => {
    const { status } = useRouteTransition()
    const { hash, state } = useLocation()
    const initHash = useRef(true)
    const [visibleSections, setVisibleSections] = useState([])
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false)
    const intro = useRef()
    const projectOne = useRef()
    const projectTwo = useRef()
    const projectThree = useRef()
    const projectFour = useRef()
    const details = useRef()
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const revealSections = [
            intro,
            projectOne,
            projectTwo,
            projectThree,
            projectFour,
            details,
        ]

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target
                        observer.unobserve(section)
                        if (visibleSections.includes(section)) return
                        setVisibleSections(prevSections => [...prevSections, section])
                    }
                })
            },
            { rootMargin: '0px 0px -10% 0px' }
        )

        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting)
            },
            { rootMargin: '-100% 0px 0px 0px' }
        )

        revealSections.forEach(section => {
            sectionObserver.observe(section.current)
        })

        indicatorObserver.observe(intro.current)

        return () => {
            sectionObserver.disconnect()
            indicatorObserver.disconnect()
        }
    }, [visibleSections])

    useEffect(() => {
        const hasEntered = status === 'entered'
        const supportsNativeSmoothScroll =
            'scrollBehavior' in document.documentElement.style
        let scrollObserver
        let scrollTimeout

        const handleHashchange = (hash, scroll) => {
            clearTimeout(scrollTimeout)
            const hashSections = [intro, projectOne, details]
            const hashString = hash.replace('#', '')
            const element = hashSections.filter(item => item.current.id === hashString)[0]
            if (!element) return
            const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant'
            const top = element.current.offsetTop

            scrollObserver = new IntersectionObserver(
                (entries, observer) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        scrollTimeout = setTimeout(
                            () => {
                                element.current.focus()
                            },
                            prefersReducedMotion ? 0 : 400
                        )
                        observer.unobserve(entry.target)
                    }
                },
                { rootMargin: '-20% 0px -20% 0px' }
            )

            scrollObserver.observe(element.current)

            if (supportsNativeSmoothScroll) {
                window.scroll({
                    top,
                    left: 0,
                    behavior,
                })
            } else {
                window.scrollTo(0, top)
            }
        }

        if (hash && initHash.current && hasEntered) {
            handleHashchange(hash, false)
            initHash.current = false
        } else if (!hash && initHash.current && hasEntered) {
            window.scrollTo(0, 0)
            initHash.current = false
        } else if (hasEntered) {
            handleHashchange(hash, true)
        }

        return () => {
            clearTimeout(scrollTimeout)
            if (scrollObserver) {
                scrollObserver.disconnect()
            }
        }
    }, [hash, state, prefersReducedMotion, status])

    return (
        <div className="home">
            <Helmet>
                <title>Portfolio </title>
                <meta
                    name="description"
                    content="Portfolio of Chammoun Chakhap – a backend devloper working on node apps"
                />
                <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
                <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
            </Helmet>
            <Intro
                id="intro"
                sectionRef={intro}
                disciplines={disciplines}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />
            <ProjectSummary
                id="project-1"
                sectionRef={projectOne}
                visible={visibleSections.includes(projectOne.current)}
                index={1}
                title="tShirt3JS"
                description="T-Shirt Designing with ThreeJS and OpenAI's DALLE 2"
                buttonText="View Project"
                buttonLink="https://dalle-ai-threejs.netlify.app/"
                model={{
                    type: 'laptop',
                    alt: 'tShirt3JS',
                    textures: [
                        {
                            src: ts3js,
                            srcSet: `${ts3js} 980w, ${ts3js} 1376w`,
                            placeholder: ts3jsph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-2"
                alternate
                sectionRef={projectFour}
                visible={visibleSections.includes(projectFour.current)}
                index={2}
                title="Blue"
                description="Find my device app for Android"
                buttonText="View Project"
                buttonLink="https://github.com/ChammounC/blue"
                model={{
                    type: '3phones',
                    alt: 'Blue',
                    textures: [
                        {
                            src: blue1,
                            srcSet: `${blue1} 254w, ${blue1} 508w`,
                            placeholder: blue1ph,
                        },
                        {
                            src: blue2,
                            srcSet: `${blue2} 254w, ${blue2} 508w`,
                            placeholder: blue2ph,
                        },
                        {
                            src: blue3,
                            srcSet: `${blue3} 254w, ${blue3} 508w`,
                            placeholder: blue3ph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-3"
                sectionRef={projectThree}
                visible={visibleSections.includes(projectThree.current)}
                index={3}
                title="Bijou"
                description="A French Inspired Restaurant Website"
                buttonText="View Project"
                buttonLink="https://bijou.netlify.app/"
                model={{
                    type: 'laptop',
                    alt: 'bijou',
                    textures: [
                        {
                            src: bijou,
                            srcSet: `${bijou} 980w, ${bijou} 1376w`,
                            placeholder: bijou,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-4"
                alternate
                sectionRef={projectTwo}
                visible={visibleSections.includes(projectTwo.current)}
                index={4}
                title="Manga Mojo"
                description="Flutter App to fetch Anime and Manga Details"
                buttonText="View Project"
                buttonLink="https://github.com/ChammounC/manga_mojo"
                model={{
                    type: 'phone',
                    alt: 'Manga Mojo',
                    textures: [
                        {
                            src: mmojo2,
                            srcSet: `${mmojo2} 254w, ${mmojo2} 508w`,
                            placeholder: mmojo2ph,
                        },
                        {
                            src: mmojo1,
                            srcSet: `${mmojo1} 254w, ${mmojo1} 508w`,
                            placeholder: mmojo1ph,
                        },
                    ],
                }}
            />

            <Profile
                sectionRef={details}
                visible={visibleSections.includes(details.current)}
                id="details"
            />
            <Footer />
        </div>
    )
}

export default Home
