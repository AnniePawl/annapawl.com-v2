import { redirect } from "next/navigation";

// Embroidery now lives on the combined Fiber arts page.
export default function EmbroideryPage() {
  redirect("/fiber-arts");
}
