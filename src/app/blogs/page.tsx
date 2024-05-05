import { Blogs } from "@/components/blogs";
import * as React from "react";

export default async function BlogsPage() {
  return (
    <section className="my-12 space-y-6">
      <h2 className="text-2xl lg:text-4xl font-bold text-center">
        ⚡️ Some stuff that i wrote about.
      </h2>

      <React.Suspense
        fallback={<div className="text-center mt-12">Loading articles...</div>}
      >
        <Blogs />
      </React.Suspense>
    </section>
  );
}
