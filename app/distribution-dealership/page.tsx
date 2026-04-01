import { brands } from "@/lib/brands";
import { Barlow, Instrument_Serif } from "next/font/google";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["500", "700"],
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["italic"],
    display: "swap",
});

export default function DistributionDealershipPage() {
    return (
        <main className="relative">
            <section className="relative isolate -mt-20 overflow-hidden pt-20">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source
                        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="relative z-10 container mx-auto flex min-h-[90vh] flex-col items-center px-4 pb-14 pt-12 text-center sm:pt-16">
                    <div className="max-w-5xl">
                        <p
                            className={`${barlow.className} text-white text-[2.05rem] sm:text-[2.8rem] md:text-[3.9rem] font-bold tracking-[-4px] leading-[0.95] drop-shadow-[0_4px_17px_rgba(0,0,0,0.46)]`}
                        >
                            Trusted partners of over 35
                        </p>

                        <h1
                            className={`${instrumentSerif.className} mt-1.5 sm:mt-2 text-white italic text-[3.2rem] sm:text-[4.6rem] md:text-[6rem] lg:text-[84px] leading-[0.9] drop-shadow-[0_6px_20px_rgba(0,0,0,0.49)]`}
                        >
                            global quality brands in Oman
                        </h1>

                        <p
                            className={`${barlow.className} mt-5 text-[18px] font-medium text-white drop-shadow-[0_3px_11px_rgba(0,0,0,0.42)]`}
                        >
                            Official distribution with quality-assured products,
                            manufacturer-backed warranties, and dependable local support.
                        </p>
                    </div>

                    <div className="mt-10 w-full max-w-7xl rounded-[1.75rem] border border-white/60 bg-white/20 p-2 backdrop-blur-[3px] sm:mt-14 sm:p-3">
                        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.35rem] bg-black/20 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                            {brands.map((brand, index) => {
                                const isPlaceholder = brand.logo.includes("placehold.co");

                                return (
                                    <Dialog key={brand.name}>
                                        <DialogTrigger className="group relative flex min-h-40 w-full items-center justify-center bg-[#efefef] p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/35 sm:min-h-44">
                                            <span
                                                className={`${barlow.className} absolute left-2 top-2 text-[10px] font-semibold text-black/40 sm:text-xs`}
                                            >
                                                #{index + 1}
                                            </span>
                                            <img
                                                src={brand.logo}
                                                alt={brand.name}
                                                title={brand.name}
                                                className={`hover:cursor-pointer h-12 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105 sm:h-14 lg:h-16 ${isPlaceholder
                                                        ? ""
                                                        : "grayscale contrast-150 group-hover:grayscale-0"
                                                    } ${brand.invert ? "invert" : ""}`}
                                            />
                                        </DialogTrigger>

                                        <DialogContent className="w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] gap-0 overflow-hidden border border-black/35 bg-[#efefef] p-0 shadow-2xl sm:max-w-4xl">
                                            <div className="grid grid-cols-1 border-b border-black/35 md:grid-cols-[1.7fr_1fr]">
                                                <div className="border-b border-black/35 p-5 text-left md:border-b-0 md:border-r md:border-black/35">
                                                    <DialogTitle
                                                        className={`${barlow.className} text-[1.7rem] font-bold text-black`}
                                                    >
                                                        {brand.name}
                                                    </DialogTitle>
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {brand.tags.map((tag) => (
                                                            <span
                                                                key={`${brand.name}-${tag}`}
                                                                className={`${barlow.className} rounded-full border border-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-black`}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-center p-6">
                                                    <img
                                                        src={brand.logo}
                                                        alt={brand.name}
                                                        className={`h-16 w-auto max-w-full object-contain sm:h-20 ${brand.invert ? "invert" : ""}`}
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-5 text-left sm:p-6">
                                                <DialogDescription
                                                    className={`${barlow.className} text-base leading-relaxed text-black/75 sm:text-[1.05rem]`}
                                                >
                                                    {brand.intro}
                                                </DialogDescription>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}