"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod/v3";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FloatingField } from "./FloatingField";

const businessTypeOptions = [
  "End Client",
  "Agency",
  "Event Company",
  "Fabricator",
  "AV Company",
  "Other",
] as const;

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine(
      (val) => isValidPhoneNumber(val, "OM"),
      "Enter a valid phone number",
    ),
  company: z.string().optional(),
  remark: z.string().optional(),
  businessType: z.enum(businessTypeOptions),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type FormValues = z.infer<typeof formSchema>;

const contactFieldClassName =
  "peer h-12 w-full rounded-sm border-0 border-b border-white/15 bg-transparent px-0 pb-2 pt-5 text-sm text-white shadow-none outline-none transition-colors placeholder:text-transparent focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      remark: "",
      businessType: "End Client",
      terms: false,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact-us"
      className="py-12 md:py-16 bg-zinc-950 relative z-10 w-full border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.03)_0,transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-sm border border-white/10 bg-zinc-900/30 p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <div className="lg:w-[25%]">
              <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-500">
                <span className="h-7 w-px bg-white/60" />
                <span>Start Your Journey</span>
              </div>
              <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                Let&apos;s Innovate
                <br className="hidden md:block" /> Together
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
                We deliver AV solutions for events including LED displays,
                speaker systems, lighting design, staging, and end-to-end
                production support.
                <br />
                <br />
                Share your brief below and we&apos;ll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-7 md:space-y-8 lg:w-[75%]"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <FloatingField
                  id="fullName"
                  label="Full Name*"
                  error={errors.fullName?.message}
                >
                  <Input
                    {...register("fullName")}
                    id="fullName"
                    type="text"
                    placeholder=" "
                    aria-invalid={!!errors.fullName}
                    className={contactFieldClassName}
                  />
                </FloatingField>

                <FloatingField
                  id="email"
                  label="Email*"
                  error={errors.email?.message}
                >
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder=" "
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className={contactFieldClassName}
                  />
                </FloatingField>

                <div className="relative">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        id="phone"
                        placeholder=" "
                        defaultCountry="OM"
                        className="peer flex h-12 w-full items-end border-0 border-b border-white/15 bg-transparent px-0 pb-2 pt-5 text-sm text-white transition-colors focus-within:border-white [&_.PhoneInputCountry]:mr-3 [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon--border]:border-none [&_.PhoneInputCountryIconImg]:rounded-sm [&_.PhoneInputCountryIconImg]:object-cover [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-transparent [&_.PhoneInputCountrySelect]:bg-zinc-950 [&_.PhoneInputCountrySelect]:text-white"
                      />
                    )}
                  />
                  <label
                    htmlFor="phone"
                    className={cn(
                      "absolute top-3 cursor-text text-sm transition-all duration-200",
                      "peer-focus-within:-top-4 peer-focus-within:left-0 peer-focus-within:text-[11px] peer-focus-within:text-white",
                      phoneValue
                        ? "-top-4 left-0 text-[11px] text-zinc-400"
                        : "left-14 text-zinc-500",
                    )}
                  >
                    Phone*
                  </label>
                  {errors.phone ? (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.phone?.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <FloatingField
                  id="company"
                  label="Company Name"
                  error={errors.company?.message}
                >
                  <Input
                    {...register("company")}
                    id="company"
                    type="text"
                    placeholder=" "
                    className={contactFieldClassName}
                  />
                </FloatingField>

                <FloatingField
                  id="remark"
                  label="Remark"
                  error={errors.remark?.message}
                >
                  <Textarea
                    {...register("remark")}
                    id="remark"
                    rows={1}
                    placeholder=" "
                    className={cn(
                      contactFieldClassName,
                      "min-h-13 resize-none pt-5",
                    )}
                  />
                </FloatingField>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <fieldset className="space-y-4">
                  <legend className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                    I am an...
                  </legend>
                  <Controller
                    name="businessType"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-2.5">
                        {businessTypeOptions.map((option) => {
                          const isActive = field.value === option;

                          return (
                            <Button
                              key={option}
                              type="button"
                              variant="ghost"
                              size="sm"
                              aria-pressed={isActive}
                              onClick={() => field.onChange(option)}
                              className={cn(
                                "h-10 rounded-sm border px-4 text-[13px] font-normal tracking-normal",
                                isActive
                                  ? "border-white bg-white text-black hover:bg-zinc-100"
                                  : "border-white/10 bg-white/3 text-zinc-300 hover:border-white/30 hover:bg-white/8 hover:text-white",
                              )}
                            >
                              {option}
                            </Button>
                          );
                        })}
                      </div>
                    )}
                  />
                </fieldset>
              </div>

              <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center">
                <div className="space-y-2">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <label
                        htmlFor="terms"
                        className="group flex cursor-pointer items-start gap-3"
                      >
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-invalid={!!errors.terms}
                          className="mt-0.5"
                        />
                        <span className="max-w-xl text-[13px] font-light leading-snug text-zinc-400 transition-colors group-hover:text-zinc-300">
                          I have read the Terms and Condition & Privacy Notice
                          agreement
                        </span>
                      </label>
                    )}
                  />
                  {errors.terms ? (
                    <p className="text-xs text-red-400">
                      {errors.terms.message}
                    </p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-auto w-full rounded-sm border-0 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 disabled:opacity-60 md:w-auto md:px-12 md:py-3.5 md:text-sm"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
