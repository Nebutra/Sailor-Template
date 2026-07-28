import { Combobox } from "@nebutra/ui/primitives";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
];

export function ComboboxDemo() {
  return <Combobox options={frameworks} placeholder="Select framework..." />;
}
