interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const Header = ({ children, className }: IProps) => (
    <h2 className={`text-[50px] uppercase ${className}`}>{children}</h2>
);