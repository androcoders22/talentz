export type Brand = {
  name: string;
  logo: string;
  invert?: boolean;
  zoom?: number;
  tags: string[];
  description: string;
  intro: string;
};

type BaseBrand = {
  name: string;
  logo: string;
  invert?: boolean;
  zoom?: number;
  tags: string[];
  description: string;
};

const placeholderLogo = (label: string) =>
  `https://placehold.co/480x180/EFEFEF/111827?text=${encodeURIComponent(
    label.toUpperCase(),
  )}`;

const baseBrands: BaseBrand[] = [
  {
    name: "Roland",
    logo: "https://static.roland.com/global/css/fonts/roland.svg",
    invert: true,
    tags: ["Keys", "Drums", "DJ", "Synthesizers", "Electronic", "MIDI"],
    description:
      "Founded in 1972 in Japan, Roland is a world-renowned manufacturer of electronic musical instruments, including synthesizers, digital pianos, electronic drum kits, and DJ gear. Their V-Drums, JUNO synths, and TR drum machines have shaped modern music production and performance across genres.",
  },
  {
    name: "Shure",
    logo: "/shure-logo.webp",
    tags: ["Mics", "Wireless", "Live", "Studio", "In-Ear", "Broadcast"],
    description:
      "Founded in 1925 in Chicago, Shure is a leading American audio manufacturer celebrated for its legendary microphones and wireless systems. The SM58 and SM7B have become industry benchmarks for live vocal performance and broadcast recording trusted by artists worldwide.",
  },
  {
    name: "Sennheiser",
    logo: "/Sennheiser-logo-new.png",
    tags: ["Mics", "Headphones", "Broadcast", "Wireless", "IEM", "Studio"],
    description:
      "German audio company founded in 1945, Sennheiser is globally respected for its professional microphones, premium headphones, and wireless transmission systems. Their products are staples in broadcast studios, concert stages, and production facilities across the world.",
  },
  {
    name: "Taylor Guitars",
    logo: "https://www.taylorguitars.com/themes/custom/tg_theme/images/desktop-logo.svg?v1",
    invert: true,
    tags: [
      "Guitars",
      "Acoustic",
      "Premium",
      "Electric",
      "Tonewoods",
      "USA Made",
    ],
    description:
      "Founded in 1974 in El Cajon, California, Taylor Guitars is celebrated for premium acoustic guitars built with innovative construction techniques and meticulous attention to playability. Their instruments are known for a bright, balanced tone and exceptional build consistency loved by touring and studio artists alike.",
  },
  {
    name: "Ibanez",
    logo: "https://www.ibanez.com/images/logo.png",
    invert: true,
    tags: ["Guitars", "Amps", "Effects", "Bass", "Metal", "Jazz"],
    description:
      "Japanese guitar brand with roots dating to 1957, Ibanez is renowned for producing versatile electric guitars, amplifiers, and effects pedals favored across rock, metal, jazz, and progressive genres. Their RG and S series have become iconic instruments for technically demanding players worldwide.",
  },
  {
    name: "Kawai",
    logo: "https://www.kawaipianoshouston.com/wp-content/uploads/2025/08/Kawai-Logo-1024x262.png",
    tags: ["Pianos", "Digital", "Acoustic", "Grand", "Upright", "Education"],
    description:
      "Japanese piano manufacturer founded in 1927, Kawai blends traditional craftsmanship with cutting-edge technology to produce acoustic and digital pianos trusted by performers, educators, and conservatories. Their Millennium III action and Harmonic Imaging technology are recognized as some of the finest in the industry.",
  },
  {
    name: "Boss",
    logo: "/boos-logo.png",
    tags: ["Pedals", "Guitar", "Amplifiers", "Effects", "Looper", "Multi-FX"],
    description:
      "A subsidiary of Roland since 1973, Boss is the world's leading manufacturer of guitar effects pedals and compact amplifiers. Their rugged, road-tested stompboxes, from the iconic DS-1 Distortion to the GT multi-effects series, are a fixture on pedalboards across every genre and skill level.",
  },
  {
    name: "D'Addario Strings",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Daddario_logo.png",
    tags: ["Strings", "Accessories", "Guitar", "Bass", "Ukulele", "Winding"],
    description:
      "Family-owned American string manufacturer with roots going back to 17th-century Italy, D'Addario is the world's most popular maker of guitar, bass, and orchestral strings. Their EXL and NYXL series are trusted by professionals and students alike for consistent tone, longevity, and playability.",
  },
  {
    name: "Yamaha",
    logo: "https://in.yamaha.com/assets/common/images/logo/logo-yamaha-purple-01.svg",
    tags: ["Instruments", "Audio", "Education", "Pianos", "Brass", "Mixers"],
    description:
      "Founded in Japan in 1887, Yamaha is one of the world's largest and most diversified musical instrument manufacturers, producing everything from concert grand pianos and acoustic guitars to professional PA systems and audio interfaces. Their commitment to music education and innovation spans over 135 years.",
  },
  {
    name: "Adamson",
    logo: "https://adamson.ai/logo.svg",
    tags: [
      "PA",
      "Touring",
      "Live Sound",
      "Line Array",
      "Subwoofers",
      "Install",
    ],
    description:
      "Canadian professional audio manufacturer founded in 1983, Adamson Systems Engineering designs and builds advanced loudspeaker systems trusted by some of the world's highest-grossing concert tours and large-scale venue installations. Every product is engineered and manufactured in-house at their Port Perry, Ontario headquarters.",
  },
  {
    name: "Presonus",
    logo: "https://intl.presonus.com/cdn/shop/files/presonus_logo.svg?v=1723628827&width=145",
    tags: ["Interfaces", "Monitors", "Studio", "DAW", "Mixers", "Recording"],
    description:
      "American audio equipment company founded in 1995, PreSonus specializes in audio interfaces, studio monitors, digital mixers, and the Studio One DAW software. Their affordable Revelator and Studio series have made professional-quality home and studio recording accessible to producers and engineers at every level.",
  },
  {
    name: "Tama",
    logo: "https://www.tama.com/images/logo.png",
    invert: true,
    tags: ["Drums", "Percussion", "Hardware", "Snares", "Cymbals", "Stands"],
    description:
      "Japanese drum brand established in 1974 under Hoshino Gakki, Tama produces professional drum kits, hardware, and percussion equipment favored by world-class drummers on stage and in the studio. Their Starclassic and Imperialstar series cover both pro-level performance and beginner practice needs.",
  },
  {
    name: "Rode",
    logo: "https://logos-world.net/wp-content/uploads/2023/03/Rode-Logo.png",
    tags: ["Mics", "Podcast", "Content", "Condenser", "Wireless", "Broadcast"],
    description:
      "Australian microphone manufacturer founded in 1967, Rode is celebrated for high-quality condenser and dynamic microphones that deliver professional sound at accessible price points. Their NT1, VideoMic, and PodMic series have made them a top choice for podcasters, content creators, and recording engineers worldwide.",
  },
  {
    name: "Behringer",
    logo: "https://images.seeklogo.com/logo-png/22/2/behringer-logo-png_seeklogo-220338.png",
    zoom: 2,
    tags: ["Mixers", "PA", "Effects", "Interfaces", "Budget", "Synths"],
    description:
      "German audio equipment brand founded in 1989 by Uli Behringer, the company offers one of the widest catalogs of mixers, PA systems, signal processors, and effects units at budget-friendly prices. Behringer gear is widely used by schools, houses of worship, small venues, and entry-level producers worldwide.",
  },
  {
    name: "Focusrite",
    logo: "/logo/focustine.png",
    tags: [
      "Interfaces",
      "Recording",
      "Studio",
      "Preamps",
      "USB",
      "Thunderbolt",
    ],
    description:
      "British audio equipment company founded in 1985, Focusrite is best known for its iconic Scarlett series of USB audio interfaces, which have become the best-selling recording interfaces in the world. Their products are trusted by home studios and professional recording engineers for their clean preamps and reliable performance.",
  },
  {
    name: "ABRSM",
    logo: "https://clipground.com/images/abrsm-logo-png-4.png",
    zoom: 2,
    tags: ["Books", "Certification", "Learning", "Theory", "Exams", "Grades"],
    description:
      "The Associated Board of the Royal Schools of Music, founded in 1889 in London, is the world's leading music education and examination body. ABRSM offers internationally recognized graded exams, diplomas, and a comprehensive catalog of official sheet music and theory publications used by millions of students globally.",
  },
  {
    name: "M-Audio",
    logo: "https://vectorseek.com/wp-content/uploads/2023/06/m-audio-Logo-Vector.svg-.png",
    tags: [
      "MIDI",
      "Interfaces",
      "Production",
      "Keyboards",
      "Controllers",
      "USB",
    ],
    description:
      "American MIDI controller and audio interface brand founded in 1988, M-Audio creates affordable and versatile gear for music producers and performers. Their Keystation and Oxygen MIDI keyboard series, along with the Air audio interface lineup, have long been popular entry points for home studio production.",
  },
  {
    name: "sE Electronics",
    logo: placeholderLogo("sE Electronics"),
    tags: [
      "Mics",
      "Vocal Booth",
      "Studio",
      "Condenser",
      "Ribbon",
      "Reflection Filter",
    ],
    description:
      "British microphone brand with manufacturing roots in Shanghai, founded in 2000, sE Electronics designs studio condenser microphones and vocal reflection filters renowned for transparency and professional performance. Their Reflexion Filter and X1 series have become staple tools in home and professional recording studios worldwide.",
  },
  {
    name: "Cort",
    logo: "https://vectorseek.com/wp-content/uploads/2023/10/Cort-Guitar-Logo-Vector.svg-.png",
    tags: ["Guitars", "Acoustic", "Electric", "Bass", "OEM", "Value"],
    description:
      "South Korean guitar manufacturer founded in 1960, Cort produces a wide range of acoustic and electric guitars known for exceptional quality-to-price ratio and precise craftsmanship. They are also one of the world's largest OEM guitar manufacturers, building instruments for numerous globally recognized brands.",
  },
  {
    name: "Washburn",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2022/08/wu-washburn-university-logo-freelogovectors.net_.png",
    tags: ["Guitars", "Electric", "Acoustic", "Bass", "Heritage", "Stage"],
    description:
      "American guitar brand with origins dating to 1883 in Chicago, Washburn has a rich heritage of building stage-ready acoustic and electric guitars. Their instruments have been played by artists including Nuno Bettencourt and Paul Stanley, and the brand remains respected for its blend of tradition and performance.",
  },
  {
    name: "D'Addario Orchestral",
    logo: "https://www.pngkey.com/png/full/544-5442302_d-addario-logo-vector.png",
    tags: ["Strings", "Violin", "Orchestral", "Cello", "Viola", "Bass"],
    description:
      "The orchestral division of D'Addario, dedicated to producing premium strings and accessories for bowed instruments including violin, viola, cello, and double bass. Their Helicore and Kaplan series are trusted by students and professional orchestral musicians alike for consistency, warmth, and projection.",
  },
  {
    name: "Evans Drumheads",
    logo: "https://vectorseek.com/wp-content/uploads/2023/11/Evans-Drumheads-Logo-Vector.svg-.png",
    tags: ["Drums", "Heads", "Percussion", "Bass Drum", "Snare", "Tom"],
    description:
      "American drumhead manufacturer founded in 1956 by Chick Evans, Evans pioneered the synthetic Mylar drumhead and continues to produce innovative heads known for durability and tonal versatility. Their EMAD, EC2, and UV series are widely used across recording studios and touring stages at every professional level.",
  },
  {
    name: "Vandoren",
    logo: "/logo/vandoren-logo.png",
    tags: [
      "Reeds",
      "Woodwind",
      "Accessories",
      "Clarinet",
      "Saxophone",
      "Mouthpieces",
    ],
    description:
      "French woodwind accessory manufacturer founded in 1905 by Eugene Van Doren, Vandoren is considered the global standard for clarinet and saxophone reeds, mouthpieces, and ligatures. Their V12 and ZZ reed series are used by conservatory students and leading soloists in orchestras and jazz ensembles worldwide.",
  },
  {
    name: "Neutrik",
    logo: "https://vectorseek.com/wp-content/uploads/2023/12/Neutrik-Wordmark-Logo-Vector.svg-.png",
    tags: ["Connectors", "Cables", "Stage", "XLR", "Speakon", "TRS"],
    description:
      "Professional connector manufacturer founded in 1975 in Liechtenstein, Neutrik is the undisputed industry leader in XLR, TRS, Speakon, and powerCON audio connectors. Their rugged, field-proven connectors are the standard for touring live sound rigs, broadcast infrastructure, and studio patchbays worldwide.",
  },
  {
    name: "Promark",
    logo: "https://stickypng.com/wp-content/uploads/2023/07/60119c3d1b7ff00004506af1.png",
    tags: [
      "Drumsticks",
      "Percussion",
      "Performance",
      "Mallets",
      "Brushes",
      "Rods",
    ],
    description:
      "American drumstick manufacturer and part of the D'Addario family of brands, ProMark produces a wide variety of drumsticks, mallets, brushes, and rods for percussionists of all styles. Their Select Balance and ActiveGrip sticks are popular choices among professionals and working drummers for their feel and balance.",
  },
  {
    name: "Planet Waves",
    logo: "https://www.seekpng.com/png/full/304-3042277_thank-you-for-empowering-us-to-do-what.png",
    tags: ["Guitar", "Accessories", "Cables", "Tuners", "Capos", "Straps"],
    description:
      "Part of the D'Addario family of brands, Planet Waves offers a comprehensive range of guitar accessories including instrument cables, tuners, capos, straps, string winders, and care products. Trusted by gigging and studio musicians, their accessories are known for reliability, practicality, and consistent quality.",
  },
  {
    name: "Christie",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2021/07/christie-logo-freelogovectors.net_.png",
    tags: ["Projectors", "AV", "Installation", "LED", "Video Walls", "Cinema"],
    description:
      "Canadian display technology company founded in 1929, Christie manufactures professional projectors, LED video walls, and advanced visual display solutions for theaters, live events, control rooms, and large-scale installations. Their products are found in major planetariums, simulation centers, and entertainment venues worldwide.",
  },
  {
    name: "Ahuja",
    logo: "https://vectorseek.com/wp-content/uploads/2023/09/AHUJA-Logo-Vector.svg-.png",
    tags: [
      "PA",
      "Installed Audio",
      "Conferencing",
      "Amplifiers",
      "Speakers",
      "India",
    ],
    description:
      "India's most iconic public address equipment manufacturer, founded in 1940 by Amar Nath Ahuja in New Delhi. Ahuja Radios has shaped India's professional audio landscape for over eight decades, providing reliable PA systems, amplifiers, and speakers installed across metro stations, institutions, houses of worship, and government facilities throughout the country.",
  },
  {
    name: "Ortega",
    logo: "https://ortega.com/wp-content/uploads/ortega-logo@2x.png",
    tags: [
      "Ukulele",
      "Guitars",
      "Accessories",
      "Classical",
      "Banjo",
      "Beginner",
    ],
    description:
      "German instrument brand specializing in classical guitars, ukuleles, and a broad range of related accessories, Ortega offers well-crafted instruments for beginners through advanced players. Their focus on accessible pricing and genuine playability has made them a popular choice in music schools and retail stores worldwide.",
  },
  {
    name: "Valencia",
    logo: "https://logosmarcas.net/wp-content/uploads/2020/11/Valencia-Logo.png",
    zoom: 1.5,
    tags: [
      "Classical",
      "Violins",
      "Student Line",
      "Guitar",
      "Cello",
      "Beginner",
    ],
    description:
      "Valencia is a student-oriented instrument brand offering affordable classical guitars, violins, and other orchestral string instruments designed specifically for beginners and music education programs. Their instruments are widely used in school orchestras and introductory music courses for providing reliable quality at accessible entry-level prices.",
  },
  {
    name: "Aria",
    logo: "https://www.freepngdesign.com/content/uploads/images/p-408-8-aria-logo-png-transparent-logo-606093326138.png",
    zoom: 2,
    tags: ["Guitars", "Classic", "Stage", "Bass", "Acoustic", "Vintage"],
    description:
      "Japanese instrument brand founded in 1956 by Shiro Arai, Aria (Aria Pro II) produces classic-style electric and acoustic guitars, basses, and instruments with a heritage rooted in craftsmanship and stage performance. Their vintage-inspired designs and quality construction have earned them a loyal following among discerning players.",
  },
  {
    name: "SX",
    logo: "https://png.pngtree.com/png-vector/20220221/ourmid/pngtree-black-white-and-red-alphabet-letter-combination-logo-icon-designsx-s-x-vector-png-image_27873466.png",
    zoom: 1.75,
    tags: ["Guitars", "Entry Level", "Electric", "Bass", "Vintage", "Budget"],
    description:
      "Budget guitar brand born in 1998 from Team International's decades of OEM manufacturing experience, SX (originally named Essex) offers vintage-inspired electric and bass guitars widely celebrated for exceptional quality at unbeatable price points. Today the brand is sold in over 70 countries and appeals to both beginners and modding enthusiasts.",
  },
  {
    name: "Proel",
    logo: "https://www.prelectronics.com/media/0xdjazyt/proel-logo.png",
    tags: ["Cables", "Connectivity", "Stage", "PA", "Stands", "Accessories"],
    description:
      "Italian pro audio and accessories manufacturer founded in 1991, Proel designs and distributes professional cables, connectors, PA systems, and stage hardware across global markets. With over 30 years of experience, their products are trusted by touring professionals and installers for durability and value-driven performance.",
  },
  {
    name: "Mahalo",
    logo: "https://cdn-icons-png.flaticon.com/512/7984/7984994.png",
    tags: [
      "Ukulele",
      "Beginner",
      "Education",
      "Soprano",
      "Concert",
      "Colorful",
    ],
    description:
      "Mahalo is a beginner-focused ukulele brand known for producing colorful, playable ukuleles at entry-level price points, making them a top choice for first-time players and music educators. Their soprano and concert models are widely used in school music programs and introductory ukulele workshops worldwide.",
    zoom: 2,
  },
  {
    name: "Maxtone",
    logo: "https://musicalesconcertina.com/assets/media/maxtone-logo.png",
    tags: ["Drums", "Percussion", "Student", "Cajon", "Accessories", "Budget"],
    description:
      "Taiwanese musical instrument manufacturer established in 1970, Maxtone produces an extensive range of percussion instruments, student drum kits, and related accessories supplied to music retailers in over 100 countries. Their consistent quality and competitive pricing make them a reliable choice for music schools and beginner drummers.",
  },
  {
    name: "Platinum Stands",
    logo: "https://vectorseek.com/wp-content/uploads/2023/10/Platinum-Logo-Vector.svg-.png",
    tags: ["Stands", "Hardware", "Musicians", "Guitar", "Keyboard", "Speaker"],
    description:
      "Platinum Stands is an accessories brand offering a practical range of instrument stands and support hardware for musicians, including guitar stands, keyboard stands, speaker stands, and music notation stands. Designed with affordability and reliability in mind, their products provide solid everyday support solutions for rehearsals, lessons, and live performance.",
  },
];

export const brands: Brand[] = baseBrands.map((brand) => ({
  ...brand,
  intro: brand.description,
}));
