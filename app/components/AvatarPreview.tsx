
import Image from 'next/image';

type avatarProps = {
    avatarUrl?: string | null
    alt: string
}

export const AvatarPreview = ({avatarUrl, alt}: avatarProps) => {

    return (
        <div className=" bg-bg-light w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-center text-body-text-light text-xl font-bold">
            {avatarUrl ? (
              <Image src={avatarUrl} alt={alt} width={32} height={32} className="w-full h-full object-cover rounded-full" />
            ) : (
              'Upload Avatar'
            )}
            </div>
    )
}