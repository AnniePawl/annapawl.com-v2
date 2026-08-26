import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google Books cover art (fetched by src/lib/googleBooks.ts for the
      // /books page). URLs vary by volume — most look like:
      //   https://books.google.com/books/content?id=...
      // but some (e.g. publisher-provided previews) use:
      //   https://books.google.com/books/publisher/content?id=...
      // so we allow anything under /books/ rather than pinning one exact
      // path. Covers come back over http from the API; we upgrade to
      // https before handing the URL to next/image, so only https needs
      // to be allowed here.
      {
        protocol: "https",
        hostname: "books.google.com",
        pathname: "/books/**",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
