import Link from "next/link";
import MySpacesLogo from "@/components/svgs/MySpaceLogo";

function Footer() {
    return (
        <footer className="grid place-items-center lg:flex lg:items-center lg:justify-between py-7 px-10 border-nigga dark:border-niggant border-t-2 backdrop-blur-md">
            <section>
                <Link className="flex bg-nigga text-niggant px-3 py-2 rounded-md" href={`https://spacehey.com/missa510uwu`} target="_blank" rel="noopener noreferrer nofollow">
                    <span>
                        <MySpacesLogo fill="#fff" height={15} width={15}/>
                    </span>
                    Blog de Missa
                </Link>
                <Link href={`https://github.com/Missa510`}>
                    Proyectos de Missa
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
