const RootLayout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4">
      {children}
    </main>
  );
};

export default RootLayout;
