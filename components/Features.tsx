import { Button } from "@/components/ui/button";
import SpotlightCard from "./SpotlightCard";
import {
  IconCertificate,
  IconTools,
  IconTruck,
  IconSparkles,
} from "@tabler/icons-react";

export function Features() {
  return (
    <section className="container mx-auto px-4 pt-4 pb-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <SpotlightCard
          className="bg-white border border-black/5 min-h-[220px] flex flex-col justify-between shadow-sm"
          spotlightColor="rgba(0, 0, 0, 0.03)"
        >
          <div className="relative z-10">
            <IconCertificate className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Authorized Dealers</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Official distributors for Roland, Sennheiser, Shure, Kawai,
              Ibanez, Tama and many more global brands.
            </p>
          </div>
          <Button
            variant="outline"
            className="relative z-10 rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Our Brands
          </Button>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard
          className="bg-white border border-black/5 min-h-[220px] flex flex-col justify-between shadow-sm"
          spotlightColor="rgba(0, 0, 0, 0.03)"
        >
          <div className="relative z-10">
            <IconTools className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Expert Repairs</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Guitar luthier with 30+ years experience. Pro audio technicians
              for all your service needs.
            </p>
          </div>
          <Button
            variant="outline"
            className="relative z-10 rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Book Service
          </Button>
        </SpotlightCard>

        {/* Card 3 */}
        <SpotlightCard
          className="bg-white border border-black/5 min-h-[220px] flex flex-col justify-between shadow-sm"
          spotlightColor="rgba(0, 0, 0, 0.03)"
        >
          <div className="relative z-10">
            <IconTruck className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Oman-wide Delivery</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Shop online with fast and secure shipping across the Sultanate.
              Visit our Ruwi showroom.
            </p>
          </div>
          <Button
            variant="outline"
            className="relative z-10 rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Shipping Info
          </Button>
        </SpotlightCard>

        {/* Card 4 */}
        <SpotlightCard
          className="bg-white border border-black/5 min-h-[220px] flex flex-col justify-between shadow-sm"
          spotlightColor="rgba(0, 0, 0, 0.03)"
        >
          <div className="relative z-10">
            <IconSparkles className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Special Projects</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tents, grandstand seating, staging, rigging and custom solutions
              for unique event requirements.
            </p>
          </div>
          <Button
            variant="outline"
            className="relative z-10 rounded-full px-4 py-1.5 w-fit bg-white hover:bg-muted text-[10px] text-foreground border-muted-foreground/10 self-end mt-2 h-auto"
          >
            Learn More
          </Button>
        </SpotlightCard>
      </div>
    </section>
  );
}
