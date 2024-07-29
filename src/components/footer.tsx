import Link from "next/link";
import {
    FacebookLogo,
    InstagramLogo,
    RedditLogo,
    GithubLogo,
    MySpaceLogo,
    TwitterLogo
} from "@/components/svgs/Logos";
import ModeToggle from "./toggle_theme";
import { Heart } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


function Footer() {
    return (
        <footer className="relative bottom-0 z-50 grid place-items-center lg:flex lg:items-center lg:justify-between py-7 px-10 border-nigga dark:border-niggant border-t-2 backdrop-blur-md">
            <section className="grid gap-y-3">

                <Link className="flex gap-x-2 hover:underline hover:underline-offset-4 hover:decoration-2" href={`#`} target="_blank" rel="noopener noreferrer nofollow">
                    <MySpaceLogo clases={`text-nigga dark:text-niggant`} height={20} width={20} />
                    <span className="ml-1">
                        Blog de Missa
                    </span>
                </Link>

                <Link className="flex gap-x-2 hover:underline hover:underline-offset-4 hover:decoration-2" href={`#`} target="_blank" rel="noopener noreferrer nofollow">
                    <GithubLogo clases={`text-nigga dark:text-niggant`} height={20} width={20} />
                    <span className="ml-1">
                        Proyectos de Missa
                    </span>
                </Link>


            </section>

            <section className="grid gap-y-2 items-center justify-center">

                <div className="flex flex-col items-center justify-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href="#">
                                    <Heart className="text-nigga hover:text-red-500 dark:text-niggant dark:hover:text-red-700" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="dark:bg-nigga border-none">
                                <span>
                                    ¿Te gustó la página? ~ ¡Dónanos ahora!
                                    <br />
                                    Funcionamos gracias a tus donaciones
                                </span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <div className="items-center justify-center">
                    <ModeToggle />
                    <span>
                        2024 &copy; Hecho por el Lechero y el Eyaculador
                    </span>
                </div>

            </section>

            <section className="flex align-center gap-x-2">

                <TooltipProvider>

                    <Tooltip>
                        <TooltipTrigger>
                            <Link target="_blank" rel="noopener noreferrer nofollow" href="#">
                                <FacebookLogo clases={`text-nigga dark:text-niggant hover:text-blue-700 dark:hover:text-blue-700`} height={32} width={32} />
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent className="dark:bg-nigga border-none">
                            <p>Facebook oficial</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <Link target="_blank" rel="noopener noreferrer nofollow" href="#">
                                <InstagramLogo clases={`text-nigga dark:text-niggant hover:text-purple-700 dark:hover:text-purple-700`} height={32} width={32} />
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent className="dark:bg-nigga border-none">
                            <p>Instagram oficial</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <Link target="_blank" rel="noopener noreferrer nofollow" href="#">
                                <RedditLogo clases={`text-nigga dark:text-niggant hover:text-orange-700 dark:hover:text-orange-700`} height={32} width={32} />
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent className="dark:bg-nigga border-none">
                            <p>Sitio en Reddit</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <Link target="_blank" rel="noopener noreferrer nofollow" href="#">
                                <TwitterLogo clases={`text-nigga dark:text-niggant hover:text-sky-400 dark:hover:text-sky-400`} height={32} width={32} />
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent className="dark:bg-nigga border-none">
                            <p>Twitter oficial oficial</p>
                        </TooltipContent>
                    </Tooltip>

                </TooltipProvider>

            </section>
        </footer >
    )
}

export default Footer;
