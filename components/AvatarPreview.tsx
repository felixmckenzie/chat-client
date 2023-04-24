import Image from 'next/image'
import { classNames } from '@/utils'

type AvatarProps = {
    avatarUrl?: string | null
    alt: string
    width: number
    height: number
}

export const AvatarPreview = ({ avatarUrl, alt, width, height }: AvatarProps) => {
    const widthClass = `w-${width}`
    const heightClass = `h-${height}`

    return (
        <>
            {avatarUrl ? (
                <div className="flex flex-col justify-center items-center">
                    <Image src={avatarUrl} alt={alt} width={50} height={50} quality={90} className="object-cover rounded-full" />
                </div>
            ) : (
                <div
                    className={classNames(
                        'flex flex-col items-center justify-center text-center bg-bg-light rounded-full text-body-text-light text-xs font-bold',
                        widthClass,
                        heightClass
                    )}
                >
                    Upload Avatar
                </div>
            )}
        </>
    )
}
