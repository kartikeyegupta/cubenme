import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Target, Lightbulb } from 'lucide-react'

export default function LandingPage() {
  return (
    <>
      <section className="py-5 md:py-5">
        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <Image
              src="/cube.png"
              alt="CUBE Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-blue-400">
              The Cube
            </h1>
            <p className="text-2xl mb-4 text-blue-300">🚀 Duke&apos;s community for student entrepreneurs</p>
            <p className="text-xl text-muted-foreground mb-8">
              Duke&apos;s premier entrepreneurship-focused organization that lowers the barriers of entry to entrepreneurship and provides members with the skills and resources to pursue their own ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="https://www.thecube.llc/">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-5 bg-muted">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">What is NME </h2>
          <p className="text-lg text-muted-foreground">
            Our structured program combines education, networking, and practical experience to prepare you for success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-300">Startup Workshops</h3>
              <p className="text-muted-foreground">
                Weekly events covering the startup fundamentals, from ideation to pitch preparation.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-300">Mentorship</h3>
              <p className="text-muted-foreground">
                Weekly meals to get guidance from and build meaningful friendships with experienced Cube members.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-300">Pledge Events</h3>
              <p className="text-muted-foreground">
                Weekly opportunities to get to know your peers in Cube better and participate in fun social events.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-blue-300">Project Work</h3>
              <p className="text-muted-foreground">
                Hands-on experience working on real demo projects and a challenge to raise money for your retreat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-1">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            The Cube is dedicated to promoting entrepreneurship of any form within the community and on Duke&apos;s campus, including social ventures. Our alumni have gone on to create multiple multi-million dollar businesses, and have been featured on Forbes, CNN, and more.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 mb-4 text-blue-400" />
              <CardTitle className="text-blue-300">Learning</CardTitle>
            </CardHeader>
            <CardContent>
              Learn through semester-long projects, workshops with alums, and real-world business challenges guided by your experienced peers.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-4 text-blue-400" />
              <CardTitle className="text-blue-300">Community</CardTitle>
            </CardHeader>
            <CardContent>
              Join a tight-knit group of ambitious peers who share your passion for entrepreneurship and innovation.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 mb-4 text-blue-400" />
              <CardTitle className="text-blue-300"> Entrepreneurial Support </CardTitle>
            </CardHeader>
            <CardContent>
              Get comprehensive entrepreneurial support all the way from evaluating product-market fit to technical development.
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="apply" className="py-1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Ready to Join The Cube?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Rush at the start of the semester every Spring. Take the first step towards becoming part of Duke&apos;s premier entrepreneurship community.
          </p>
          <Button size="lg" className="mb-4 bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="https://www.thecube.llc/">
              Check us Out <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}