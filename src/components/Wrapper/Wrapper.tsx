export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative flex w-full max-w-full flex-col items-center justify-center bg-background font-sans text-primary">
            {children}
        </main>
    );
};
