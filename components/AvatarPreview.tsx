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
        <div>
            {avatarUrl ? (
                <div className="flex flex-col justify-center items-center">
                    <Image src={avatarUrl} alt={alt} width={80} height={80} quality={90} className="object-cover rounded-full" />
                </div>
            ) : (
                <div
                    className={classNames(
                        'bg-bg-light mx-auto mb-6 rounded-full flex flex-col items-center justify-center text-center text-body-text-light text-xs font-bold',
                        widthClass,
                        heightClass
                    )}
                >
                    'Upload Avatar'
                </div>
            )}
        </div>
    )
}
