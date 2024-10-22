"use client"

import Link from "next/link"

const links = [
    {
        "link": "/users",
        "mensaje": "Ver usuarios"
    }, {
        "link": "/api/user",
        "mensaje": " Ver API usuarios"
    }, {
        "link": "/api/tipo",
        "mensaje": " Ver API tipos"
    }, {
        "link": "/api/estado",
        "mensaje": " Ver API estado"
    },
]

function NavBar() {
    return (
        <nav className="border-nigga dark:border-niggant border-b-2 sticky top-0 z-50 backdrop-blur-md">
            <div className="grid place-items-center lg:flex lg:items-center lg:justify-between py-7 px-10 ">
                <section className="lg:text-center">
                    <Link className="text-2xl hover:text-dotted" href="/">
                        <h1> ShareToGrow/eXpressive </h1>
                    </Link>
                </section>
                <section className="grid gap-y-3 my-5 lg:flex lg:gap-x-5 lg:my-0">
                    {
                        links.map((link, index) => (
                            <Link key={index} className="hover:underline hover:underline-offset-4 hover:decoration-2" href={link.link}>
                                {link.mensaje}
                            </Link>
                        ))
                    }
                </section>
                <section className="flex gap-x-2">
                    <Link className="px-9 py-3 lg:py-2 rounded-full border-2 bg-nigga border-nigga text-niggant hover:bg-nigga-secondary hover:border-nigga-sencondary dark:bg-niggant dark:text-nigga dark:border-niggant dark:hover:bg-niggant-secondary dark:hover:border-niggant-secondary" href={`#`}>Sign in</Link>
                    <Link className="px-9 py-3 lg:py-2 rounded-full border-2 border-nigga dark:border-niggant" href={`#`}>Login</Link>
                </section>
            </div>
            <div className="flex lg:hidden">
                <button className="flex lg:hidden">
                    con
                </button>
                hidden w-full md:block md:w-auto
            </div>
        </nav>
    )

}

export default NavBar