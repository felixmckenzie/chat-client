const List = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col h-full p-2 overflow-y-auto space-y-2 divide-body-text-light divide-y">{children}</div>
}

export default List
