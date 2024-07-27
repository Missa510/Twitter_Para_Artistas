import Link from "next/link";
import MySpacesLogo from "@/components/svgs/MySpaceLogo";
import GithubLogo from "./svgs/GitHubLogo"; "@/components/svgs/GitHubLogo";

function Footer() {
    return (
        <footer className="grid place-items-center lg:flex lg:items-center lg:justify-between py-7 px-10 border-nigga dark:border-niggant border-t-2 backdrop-blur-md">
            <section className="grid place-items-center gap-y-2">

                <Link className="w-full align-center justify-center flex bg-nigga text-niggant hover:animate-scale dark:bg-niggant dark:text-nigga px-3 py-2 rounded-md" href={`#`} target="_blank" rel="noopener noreferrer nofollow">
                    <MySpacesLogo clases={`text-niggant dark:text-nigga`} height={20} width={20} />
                    <span className="ml-1">
                        Blog de Missa
                    </span>
                </Link>

                <Link className="w-full align-center justify-center flex bg-nigga text-niggant hover:animate-scale dark:bg-niggant dark:text-nigga px-3 py-2 rounded-md" href={`#`} target="_blank" rel="noopener noreferrer nofollow">
                    <GithubLogo clases={`text-niggant dark:text-nigga`} height={20} width={20} />
                    <span className="ml-1">
                        Proyectos de Missa
                    </span>
                </Link>

            </section>
            <section>
                <div>
                    <span>¿Te gustó la página?</span>
                    <Link href="#">¡Dónanos ahora!</Link>
                    <span>Funcionamos gracias a tus donaciones</span>
                </div>
                <span>
                    2024 &copy; Hecho por el Lechero y el Eyaculador
                </span>
            </section>
            <section>
                <Link target="_blank" rel="noopener noreferrer nofollow" href={`https://www.facebook.com/santiago.quintero.123276`}></Link>
                <Link target="_blank" rel="noopener noreferrer nofollow" href={`https://x.com/MakingWhole510`}></Link>
                <Link target="_blank" rel="noopener noreferrer nofollow" href={`https://www.instagram.com/imaginate_un_nombre_tuxd012/`}></Link>
                <Link target="_blank" rel="noopener noreferrer nofollow" href={`https://old.reddit.com/user/xXx_SanQuin_xXx/`}></Link>
            </section>
        </footer>
    )
}

export default Footer;
