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
    logo: "https://logos-world.net/wp-content/uploads/2023/03/Rode-Logo.png",
  },
  {
    name: "Behringer",
    logo: "https://images.seeklogo.com/logo-png/22/2/behringer-logo-png_seeklogo-220338.png",
  },
  {
    name: "Focusrite",
    logo: "https://www.logo800.cn/uploads/logoxinshang/38/logo800_16491601289693748.png",
  },
  {
    name: "ABRSM",
    logo: "https://clipground.com/images/abrsm-logo-png-4.png",
  },
  {
    name: "M-Audio",
    logo: "https://vectorseek.com/wp-content/uploads/2023/06/m-audio-Logo-Vector.svg-.png",
  },
  {
    name: "sE Electronics",
    logo: placeholderLogo("sE Electronics"),
  },
  {
    name: "Cort",
    logo: "https://vectorseek.com/wp-content/uploads/2023/10/Cort-Guitar-Logo-Vector.svg-.png",
  },
  {
    name: "Washburn",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2022/08/wu-washburn-university-logo-freelogovectors.net_.png",
  },
  {
    name: "D'Addario Orchestral",
    logo: "https://www.pngkey.com/png/full/544-5442302_d-addario-logo-vector.png",
  },
  {
    name: "Evans Drumheads",
    logo: "https://vectorseek.com/wp-content/uploads/2023/11/Evans-Drumheads-Logo-Vector.svg-.png",
  },
  {
    name: "Vandoren",
    logo: placeholderLogo("Vandroen"),
  },
  {
    name: "Neutrik",
    logo: "https://vectorseek.com/wp-content/uploads/2023/12/Neutrik-Wordmark-Logo-Vector.svg-.png",
  },
  {
    name: "Promark",
    logo: "https://stickypng.com/wp-content/uploads/2023/07/60119c3d1b7ff00004506af1.png",
  },
  {
    name: "Planet Waves",
    logo: "https://www.seekpng.com/png/full/304-3042277_thank-you-for-empowering-us-to-do-what.png",
  },
  {
    name: "Christie",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2021/07/christie-logo-freelogovectors.net_.png",
  },
  {
    name: "Ahuja",
    logo: "https://vectorseek.com/wp-content/uploads/2023/09/AHUJA-Logo-Vector.svg-.png",
  },
  {
    name: "Ortega",
    logo: "https://ortega.com/wp-content/uploads/ortega-logo@2x.png",
  },
  {
    name: "Valencia",
    logo: "https://logosmarcas.net/wp-content/uploads/2020/11/Valencia-Logo.png",
  },
  {
    name: "Aria",
    logo: "https://www.freepngdesign.com/content/uploads/images/p-408-8-aria-logo-png-transparent-logo-606093326138.png",
  },
  {
    name: "SX",
    logo: "https://png.pngtree.com/png-vector/20220221/ourmid/pngtree-black-white-and-red-alphabet-letter-combination-logo-icon-designsx-s-x-vector-png-image_27873466.png",
  },
  {
    name: "Proel",
    logo: "https://www.prelectronics.com/media/0xdjazyt/proel-logo.png",
  },
  {
    name: "Mahalo",
    logo: "https://cdn-icons-png.flaticon.com/512/7984/7984994.png",
  },
  {
    name: "Maxtone",
    logo: "https://musicalesconcertina.com/assets/media/maxtone-logo.png",
  },
  {
    name: "Platinum Stands",
    logo: "https://vectorseek.com/wp-content/uploads/2023/10/Platinum-Logo-Vector.svg-.png",
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
