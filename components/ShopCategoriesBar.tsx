"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    name: "Keys & Synths",
    subcategories: [
      {
        title: "Digital Pianos",
        description:
          "Standard-size keyboards with weighted keys for an authentic feel.",
      },
      {
        title: "Synthesizers",
        description:
          "Electronic instruments that generate a wide range of sounds.",
      },
      {
        title: "MIDI Keyboards",
        description:
          "Controllers for digital music production and software instruments.",
      },
      {
        title: "Organs",
        description: "Classic and modern organ sounds for church and stage.",
      },
      {
        title: "Workstations",
        description:
          "Complete music production environments in a single keyboard.",
      },
    ],
  },
  {
    name: "Guitars",
    subcategories: [
      {
        title: "Electric Guitars",
        description: "Solid and hollow-body guitars for rock, jazz, and more.",
      },
      {
        title: "Acoustic Guitars",
        description:
          "Steel and nylon string guitars for natural, resonant tone.",
      },
      {
        title: "Bass Guitars",
        description:
          "Four, five, and six-string basses for deep, rhythmic foundations.",
      },
      {
        title: "Guitar Amps",
        description:
          "Tube and solid-state amplifiers to shape your signature sound.",
      },
      {
        title: "Pedals",
        description:
          "Stompboxes for distortion, delay, and experimental effects.",
      },
    ],
  },
  {
    name: "Drums",
    subcategories: [
      {
        title: "Acoustic Drums",
        description:
          "Traditional drum kits with rich, natural acoustic resonance.",
      },
      {
        title: "Electronic Drums",
        description: "Quiet, versatile kits for practice and studio recording.",
      },
      {
        title: "Cymbals",
        description: "High-quality crashes, rides, and hi-hats for any style.",
      },
      {
        title: "Percussion",
        description: "Congas, bongos, and world instruments for added texture.",
      },
      {
        title: "Hardware",
        description: "Durable stands, pedals, and thrones for your setup.",
      },
    ],
  },
  {
    name: "Pro Audio",
    subcategories: [
      {
        title: "Studio Monitors",
        description: "Accurate speakers for critical listening and mixing.",
      },
      {
        title: "Audio Interfaces",
        description: "Connect your instruments and mics to your computer.",
      },
      {
        title: "Microphones",
        description: "Condenser and dynamic mics for vocals and instruments.",
      },
      {
        title: "Mixers",
        description: "Analog and digital boards to blend and process audio.",
      },
      {
        title: "Headphones",
        description:
          "Professional monitoring for recording and personal listening.",
      },
    ],
  },
];

export function ShopCategoriesBar() {
  return (
    <div className="w-full sticky top-[72px] z-40 mt-2">
      <div className="container mx-auto px-4">
        <div className="bg-white/60 backdrop-blur-xl border border-[#EBECE9] rounded-full h-11 flex items-center px-3">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {categories.map((cat) => (
                <NavigationMenuItem key={cat.name}>
                  <NavigationMenuTrigger className="bg-transparent uppercase text-[10px] font-bold tracking-widest text-black/60 hover:text-black">
                    {cat.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.title}>
                          <NavigationMenuLink
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5 hover:text-black focus:bg-black/5 focus:text-black"
                          >
                            <div className="text-sm font-bold leading-none">
                              {sub.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-black/50">
                              {sub.description}
                            </p>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
