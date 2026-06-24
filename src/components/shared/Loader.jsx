"use client";

export default function Loader({ fullScreen = true }) {
  const loader = (
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        {loader}
      </div>
    );
  }

  return <div className="flex justify-center p-8">{loader}</div>;
}
