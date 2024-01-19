
interface IProps{
    children: React.ReactNode
}

export const Container = ({children}:IProps) => <div className="p-8">{children}</div>