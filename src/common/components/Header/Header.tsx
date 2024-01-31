interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const Header = ({ children, className }: IProps) => (
    <div className={`text-[50px] uppercase ${className}`}>{children}</div>
);