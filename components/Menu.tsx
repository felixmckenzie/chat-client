'use client'
import { cn } from '@/utils'
import { Tooltip } from './ToolTip'

const Menu = ({ options, className }) => {
    return (
        <div className={cn('flex gap-6 md:gap-10 w-full h-16 items-center px-4 py-4 border-b border-b-headline-text', className)}>
            {options?.map((option) => {
                return (
                    <Tooltip key={option.key} content={option.key}>
                        <button
                            className={cn('text-headline-text overflow-hidde p-1', option.buttonStyle && option.buttonStyle)}
                            key={option.key}
                            onClick={option.onClick}
                        >
                            {option.display}
                        </button>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default Menu
