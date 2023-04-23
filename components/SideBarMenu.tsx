'use client'

const SideBarMenu = ({ options }) => {
    return (
        <div className="flex w-full h-auto justify-between items-center mt-4 px-6 py-4 border-b border-b-headline-text ">
            {options?.map((option) => {
                return (
                    <button className="text-headline-text p-0 overflow-hidden" key={option.key} onClick={option.onClick}>
                        {option.icon}
                    </button>
                )
            })}
        </div>
    )
}

export default SideBarMenu
