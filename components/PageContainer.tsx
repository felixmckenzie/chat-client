import { cn } from '@/utils'

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PageContainer({ children, className }: PageContainerProps) {
    return <div className={cn('flex justify-center w-full', className)}>{children}</div>
}
