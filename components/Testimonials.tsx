import { Card, CardContent } from "@/components/ui/card";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Ahmed Al Balushi",
    role: "Local Musician",
    rating: 5,
    text: "Talentz is my go-to shop for all my musical needs in Oman. I recently bought a Roland synthesizer, and the service was exceptional. The staff really knows their gear!",
    avatar: "https://i.pravatar.cc/150?u=ahmed",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Event Planner",
    rating: 5,
    text: "We hired Talentz for our corporate event's sound and lighting. The production quality was world-class, and their team was professional throughout. Highly recommended for event production!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/20">
      <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wider">
        Our happy clients
      </h2>

      <div className="relative max-w-5xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="border-none shadow-sm rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full ring-2 ring-primary/10"
                  />
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                  <div className="ml-auto flex text-yellow-400 text-xs">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
                <h5 className="font-bold mb-3 italic">A Cut Above the Rest</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background shadow-md"
          >
            <IconChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background shadow-md"
          >
            <IconChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
