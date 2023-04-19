import Image from 'next/image'
import { classNames } from '@/utils'
type avatarProps = {
    avatarUrl?: string | null
    alt: string
    width: number
    height: number
}

export const AvatarPreview = ({ avatarUrl, alt, width, height }: avatarProps) => {
    return (
        <div
            className={classNames(
                'bg-bg-light mx-auto mb-6 rounded-full flex items-center justify-center text-center text-body-text-light text-xs font-bold',
                String('w-' + width),
                String('h-' + height)
            )}
        >
            {avatarUrl ? (
                <Image src={avatarUrl} alt={alt} width={width} height={height} className="w-full h-full object-cover rounded-full" />
            ) : (
                'Upload Avatar'
            )}
        </div>
    )
}
