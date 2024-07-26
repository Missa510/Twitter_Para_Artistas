// import Link from "next/link"
import Image from "next/image"

function MoreInfo() {
    const DIV_STYLE_DIV = "p-4 flex flex-col lg:flex-row items-center justify-center gap-16 backdrop-blur-md rounded-md my-14" as const

    return (
        <section className="grid">
            <div className={DIV_STYLE_DIV}>
                <Image className="rounded-md" src={"/images/imagen_home_1.webp"} width={450} height={225} quality={85} alt="Ejemplo1" />
                <div className="grid gap-3">
                    <span className="max-w-fit px-4 py-1 text-sm rounded-full bg-red-500 text-red-200 dark:bg-red-200 dark:text-red-500">¡Inicia ahora!</span>
                    <h1 className="text-2xl font-bold">¡Covierte en artista!</h1>
                    <p className="w-[50ch] font-light">
                        Creemos en el poder de la música para unir a las personas y transformar el mundo. Nuestra plataforma está diseñada específicamente para artistas musicales que buscan compartir su talento, conectar con otros músicos y descubrir nuevas oportunidades en la industria.
                    </p>
                </div>
            </div>
            <div className={DIV_STYLE_DIV}>
                <Image className="rounded-md order-last" src={"/images/imagen_home_2.webp"} width={450} height={225} quality={85} alt="Ejemplo2" />
                <div className="grid gap-3">
                    <span className="max-w-fit px-4 py-1 text-sm rounded-full bg-green-200 text-green-700 dark:bg-green-200 dark:text-green-600">¡Fácil de usar!</span>
                    <h1 className="text-2xl font-bold">¡Comparte tus fantásticas ideas!</h1>
                    <p className="w-[50ch] font-light">
                        Con ShareToGrow/eXpressive puede crear un perfil personalizado, subir tus canciones, álbumes y posts para que puedas poner al tanto a tus followers y concer sus opiniones, y seguir las últimas tendencias musicales.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MoreInfo