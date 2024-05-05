import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Wrapper } from "@/components/wrapper";
import * as React from "react";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />

      <>{children}</>

      <Footer />
    </Wrapper>
  );
};
