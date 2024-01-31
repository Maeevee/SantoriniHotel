
// interface IProps{
//     children: React.ReactNode
// }

// export const Container = ({children}:IProps) => <div className="p-8">{children}</div>



interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: IProps) => (
    <div className={`p-8 ${className}`}>{children}</div>
);
