interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: IProps) => (
    <div className={`p-6 ${className}`}>{children}</div>
);
