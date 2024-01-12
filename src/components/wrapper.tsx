import * as React from "react";

export function Wrapper(props: React.PropsWithChildren) {
  return (
    <main className="min-h-screen w-full max-w-4xl flex flex-col gap-4 py-6 lg:py-10 mx-auto">
      {props.children}
    </main>
  );
}
