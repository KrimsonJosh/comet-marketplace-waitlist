import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ShoppingBag, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Comet Marketplace</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
              FAQ
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">Join Waitlist</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                  Coming Soon
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  The Ultimate Marketplace for <span className="text-orange-500">UT Dallas</span> Students
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Buy, sell, and trade with fellow Comets. Textbooks, furniture, electronics, and more - all within the
                  UTD community.
                </p>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Enter your UTD email" className="flex-1 cursor-text" />
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Join Waitlist
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">Be the first to know when we launch. UTD email required.</p>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/logo.png"
                  width={550}
                  height={550}
                  alt="UT Dallas students using Comet Marketplace"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-white scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Comet Marketplace?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Built by UTD students, for UTD students.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white hover:bg-orange-50">
                <div className="rounded-full bg-orange-100 p-3">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">UTD Community Only</h3>
                <p className="text-center text-gray-500">
                  Exclusive to UT Dallas students, faculty, and staff for a safer, more trusted experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white hover:bg-orange-50">
                <div className="rounded-full bg-orange-100 p-3">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Secure Transactions</h3>
                <p className="text-center text-gray-500">
                  Verified profiles and secure payment options to ensure safe transactions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white hover:bg-orange-50">
                <div className="rounded-full bg-orange-100 p-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Campus Convenience</h3>
                <p className="text-center text-gray-500">
                  Easy on-campus meetups for exchanges. No shipping hassles or meeting strangers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-12 md:py-24 bg-gray-50 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How Comet Marketplace Works
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-b pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-center text-sm text-gray-500">Create an account with your UTD email</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-b pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  2
                </div>
                <h3 className="text-xl font-bold">List Items</h3>
                <p className="text-center text-sm text-gray-500">Post what you want to sell with photos and details</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-b pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4 lg:border-r">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  3
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-center text-sm text-gray-500">Chat with buyers or sellers through the app</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-900">
                  4
                </div>
                <h3 className="text-xl font-bold">Exchange</h3>
                <p className="text-center text-sm text-gray-500">Meet on campus to complete the transaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-12 md:py-24 bg-orange-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Be First in Line</h2>
                <p className="max-w-[600px] md:text-xl/relaxed">
                  Join our waitlist today and get early access when we launch.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your UTD email"
                    className="flex-1 bg-white/10 text-white placeholder:text-white/70 border-white/20 focus-visible:ring-white cursor-text"
                  />
                  <Button type="submit" className="bg-white text-orange-500 hover:bg-white/90 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Join Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-24 bg-white scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>When will Comet Marketplace launch?</AccordionTrigger>
                  <AccordionContent>
                    We&apos;re planning to launch at the beginning of the Fall 2023 semester. Join our waitlist to be
                    notified as soon as we go live!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Who can use Comet Marketplace?</AccordionTrigger>
                  <AccordionContent>
                    Comet Marketplace is exclusively for UT Dallas students, faculty, and staff. You&apos;ll need a valid UTD
                    email address to sign up.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a fee to use the platform?</AccordionTrigger>
                  <AccordionContent>
                    Comet Marketplace is completely free to use! We don&apos;t take any commission on sales or charge listing
                    fees.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What items can I sell on Comet Marketplace?</AccordionTrigger>
                  <AccordionContent>
                    You can sell textbooks, electronics, furniture, clothing, tickets to campus events, and more. All
                    items must comply with our community guidelines and UTD policies.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do payments work?</AccordionTrigger>
                  <AccordionContent>
                    Comet Marketplace facilitates connections between buyers and sellers. You can arrange payment
                    methods that work for both parties, including cash, Venmo, Zelle, or other payment apps.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:gap-8 md:py-12">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">Comet Marketplace</span>
          </div>
          <nav className="flex gap-4 md:gap-6 md:ml-auto">
            <Link href="#" className="text-sm hover:underline underline-offset-4 cursor-pointer transition-colors hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 cursor-pointer transition-colors hover:text-orange-500">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 cursor-pointer transition-colors hover:text-orange-500">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="container py-4 text-center text-sm text-gray-500 md:py-6">
          &copy; {new Date().getFullYear()} Comet Marketplace. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
