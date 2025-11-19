import Image from "next/image"

export const LogoAbsolute =  () => {
    return <div className="absolute pt-8 px-5 sm:pt-10! md:px-10! z-100 ">
        <Image className="dark:hidden w-22 md:w-30! lg:w-35!" src="/images/light-lq.png" alt="logo" width={150} height={200} />
        <Image className="not-dark:hidden w-22 md:w-30! lg:w-35!" src="/images/dark-lq.png" alt="logo" width={150} height={200} />
    </div>
} 