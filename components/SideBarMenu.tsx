'use client'
const SideBarMenu = ({ options }) => {
    return (
        <div className="flex w-full h-auto justify-between px-6 py-4 border-b border-b-headline-text ">
            {options?.map((option) => {
                return (
                    <button className="text-headline-text p-0" key={option.key} onClick={option.onClick}>
                        {option.icon}
                    </button>
                )
            })}
        </div>
    )
}

export default SideBarMenu
