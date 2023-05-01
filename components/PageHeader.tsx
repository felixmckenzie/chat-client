interface DashboardHeaderProps {
    heading: string
    text?: string
    children?: React.ReactNode
}

export function PageHeader({ heading, text, children }: DashboardHeaderProps) {
    return (
        <div className="flex items-center justify-between py-4 px-4">
            <div className="grid gap-1">
                <h1 className="font-heading text-3xl font-bold md:text-4xl">{heading}</h1>
                {text && <p className="text-lg text-muted-foreground">{text}</p>}
            </div>
            {children}
        </div>
    )
}
