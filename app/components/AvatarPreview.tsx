'use client'
import Image from 'next/image';

type avatarProps = {
    avatar?: string
    alt: string
}

export const AvatarPreview = ({avatar, alt}: avatarProps) => {

    return (
        <div className=" bg-bg-light w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center text-center text-body-text-light text-xl font-bold">
            {avatar ? (
              <Image src={avatar} alt={alt} className="w-full h-full object-cover rounded-full" />
            ) : (
              'Upload Avatar'
            )}
            </div>
    )
}