import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const FormatDate = (date: string, showTime = true): string => {
    if (!date) return ''
    let options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    }

    const currentDate = new Date()
    const offset = currentDate.getTimezoneOffset()

    const dateObj = new Date(date)
    dateObj.setTime(dateObj.getTime() - offset)

    if (showTime) options = { ...options, hour: 'numeric', hour12: true, minute: '2-digit' }
    return dateObj.toLocaleString(undefined, options)
}

export const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ')
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
