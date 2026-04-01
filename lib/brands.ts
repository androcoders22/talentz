export type Brand = {
  name: string;
  logo: string;
  invert?: boolean;
  tags: string[];
  intro: string;
};

type BaseBrand = {
  name: string;
  logo: string;
  invert?: boolean;
};

const placeholderLogo = (label: string) =>
  `https://placehold.co/480x180/EFEFEF/111827?text=${encodeURIComponent(label.toUpperCase())}`;

const baseBrands: BaseBrand[] = [
  {
    name: "Roland",
    logo: "https://static.roland.com/global/css/fonts/roland.svg",
    invert: true,
  },
  {
    name: "Shure",
    logo: "/shure-logo.webp",
  },
  {
    name: "Sennheiser",
    logo: "/Sennheiser-logo-new.png",
  },
  {
    name: "Taylor Guitars",
    logo: "https://www.taylorguitars.com/themes/custom/tg_theme/images/desktop-logo.svg?v1",
    invert: true,
  },
  {
    name: "Ibanez",
    logo: "https://www.ibanez.com/images/logo.png",
    invert: true,
  },
  {
    name: "Kawai",
    logo: "https://www.kawaipianoshouston.com/wp-content/uploads/2025/08/Kawai-Logo-1024x262.png",
  },
  {
    name: "Boss",
    logo: "/boos-logo.png",
  },
  {
    name: "D'Addario Strings",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Daddario_logo.png",
  },
  {
    name: "Yamaha",
    logo: "https://in.yamaha.com/assets/common/images/logo/logo-yamaha-purple-01.svg",
  },
  {
    name: "Adamson",
    logo: "https://adamson.ai/logo.svg",
  },
  {
    name: "Presonus",
    logo: "https://intl.presonus.com/cdn/shop/files/presonus_logo.svg?v=1723628827&width=145",
  },
  {
    name: "Tama",
    logo: "https://www.tama.com/images/logo.png",
    invert: true,
  },
  {
    name: "Rode",
    logo: placeholderLogo("Rode"),
  },
  {
    name: "Behringer",
    logo: placeholderLogo("Behringer"),
  },
  {
    name: "Focusrite",
    logo: placeholderLogo("Focusrite"),
  },
  {
    name: "ABRSM",
    logo: placeholderLogo("ABRSM"),
  },
  {
    name: "M-Audio",
    logo: placeholderLogo("M-Audio"),
  },
  {
    name: "sE Electronics",
    logo: placeholderLogo("sE Electronics"),
  },
  {
    name: "Cort",
    logo: placeholderLogo("Cort"),
  },
  {
    name: "Washburn",
    logo: placeholderLogo("Washburn"),
  },
  {
    name: "D'Addario Orchestral",
    logo: placeholderLogo("D'Addario Orchestral"),
  },
  {
    name: "Evans Drumheads",
    logo: placeholderLogo("Evans Drumheads"),
  },
  {
    name: "Vandoren",
    logo: placeholderLogo("Vandoren"),
  },
  {
    name: "Neutrik",
    logo: placeholderLogo("Neutrik"),
  },
  {
    name: "Promark",
    logo: placeholderLogo("Promark"),
  },
  {
    name: "Planet Waves",
    logo: placeholderLogo("Planet Waves"),
  },
  {
    name: "Christie",
    logo: placeholderLogo("Christie"),
  },
  {
    name: "Ahuja",
    logo: placeholderLogo("Ahuja"),
  },
  {
    name: "Ortega",
    logo: placeholderLogo("Ortega"),
  },
  {
    name: "Valencia",
    logo: placeholderLogo("Valencia"),
  },
  {
    name: "Aria",
    logo: placeholderLogo("Aria"),
  },
  {
    name: "SX",
    logo: placeholderLogo("SX"),
  },
  {
    name: "Proel",
    logo: placeholderLogo("Proel"),
  },
  {
    name: "Mahalo",
    logo: placeholderLogo("Mahalo"),
  },
  {
    name: "Maxtone",
    logo: placeholderLogo("Maxtone"),
  },
  {
    name: "Platinum Stands",
    logo: placeholderLogo("Platinum Stands"),
  },
];

const brandTags: Record<string, string[]> = {
  Roland: ["Keys", "Drums", "DJ"],
  Shure: ["Mics", "Wireless", "Live"],
  Sennheiser: ["Mics", "Headphones", "Broadcast"],
  "Taylor Guitars": ["Guitars", "Acoustic", "Premium"],
  Ibanez: ["Guitars", "Amps", "Effects"],
  Kawai: ["Pianos", "Digital", "Acoustic"],
  Boss: ["Pedals", "Guitar", "Amplifiers"],
  "D'Addario Strings": ["Strings", "Accessories", "Guitar"],
  Yamaha: ["Instruments", "Audio", "Education"],
  Adamson: ["PA", "Touring", "Live Sound"],
  Presonus: ["Interfaces", "Monitors", "Studio"],
  Tama: ["Drums", "Percussion", "Hardware"],
  Rode: ["Mics", "Podcast", "Content"],
  Behringer: ["Mixers", "PA", "Effects"],
  Focusrite: ["Interfaces", "Recording", "Studio"],
  ABRSM: ["Books", "Certification", "Learning"],
  "M-Audio": ["MIDI", "Interfaces", "Production"],
  "sE Electronics": ["Mics", "Vocal Booth", "Studio"],
  Cort: ["Guitars", "Acoustic", "Electric"],
  Washburn: ["Guitars", "Electric", "Acoustic"],
  "D'Addario Orchestral": ["Strings", "Violin", "Orchestral"],
  "Evans Drumheads": ["Drums", "Heads", "Percussion"],
  Vandoren: ["Reeds", "Woodwind", "Accessories"],
  Neutrik: ["Connectors", "Cables", "Stage"],
  Promark: ["Drumsticks", "Percussion", "Performance"],
  "Planet Waves": ["Guitar", "Accessories", "Cables"],
  Christie: ["Projectors", "AV", "Installation"],
  Ahuja: ["PA", "Installed Audio", "Conferencing"],
  Ortega: ["Ukulele", "Guitars", "Accessories"],
  Valencia: ["Classical", "Violins", "Student Line"],
  Aria: ["Guitars", "Classic", "Stage"],
  SX: ["Guitars", "Entry Level", "Electric"],
  Proel: ["Cables", "Connectivity", "Stage"],
  Mahalo: ["Ukulele", "Beginner", "Education"],
  Maxtone: ["Drums", "Percussion", "Student"],
  "Platinum Stands": ["Stands", "Hardware", "Musicians"],
};

const fallbackTags = ["Pro Audio", "Music Gear", "Oman"];

const buildIntro = (name: string, tags: string[]) => {
  const focus = tags.map((tag) => tag.toLowerCase()).join(", ");
  return `${name} is a trusted brand distributed by Talentz Oman, delivering quality ${focus} solutions with genuine warranty coverage and dependable after-sales support.`;
};

export const brands: Brand[] = baseBrands.map((brand) => {
  const tags = brandTags[brand.name] ?? fallbackTags;

  return {
    ...brand,
    tags,
    intro: buildIntro(brand.name, tags),
  };
});
