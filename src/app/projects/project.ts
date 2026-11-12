export type GalleryItem = { src: string; title: string };

type SectionContent = {
  id: string;
  title: string;
  paragraphs?: string[];
};

export type TwoColumnSection = SectionContent & {
  kind: "twoColumn";
  gallery: { items: GalleryItem[] };
  layout?: { rightWidth?: number };
};

export type RichTextSection = SectionContent & { kind: "richText" };

type MarginValue = `${number}px` | `${number}%`;
type ViewportMargin =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

export type GallerySection = {
  id: string;
  kind: "gallery";
  title?: string;
  items: GalleryItem[];
  motion?: { viewportMargin?: ViewportMargin };
};

export type Project = {
  themeClass: string;
  dotGridClass?: string;
  hero: { title: string; paragraphs: string[] };
  nav?: { externalUrl?: string };
  features: { icon: string; text: string; size?: number }[];
  concepts: { label: string; items: string[] }[];
  body: (TwoColumnSection | RichTextSection | GallerySection)[];
};
