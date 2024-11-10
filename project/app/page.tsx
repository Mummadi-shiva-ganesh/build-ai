import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Cpu, BarChart, Shield, Zap, Users } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center pt-16 pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Build and Deploy AI Models with Confidence
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your AI development workflow with our enterprise-grade platform. Train, deploy, and monitor models at scale.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="w-full min-[400px]:w-auto">Get Started</Button>
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">Schedule Demo</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-primary animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to build, deploy, and scale AI models
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[
              {
                icon: <Cpu className="h-10 w-10" />,
                title: "Model Training",
                description: "Train models on our distributed infrastructure with automatic hyperparameter tuning."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "One-Click Deploy",
                description: "Deploy models to production with automated scaling and load balancing."
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: "Real-time Monitoring",
                description: "Monitor model performance, accuracy, and resource usage in real-time."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Enterprise Security",
                description: "SOC2 compliant infrastructure with end-to-end encryption."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Team Collaboration",
                description: "Built-in version control and team workflows for seamless collaboration."
              },
              {
                icon: <Brain className="h-10 w-10" />,
                title: "AutoML",
                description: "Automated machine learning pipelines for faster development."
              }
            ].map((feature, index) => (
              <Card key={index} className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="p-2 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join hundreds of companies using AI Build to power their AI infrastructure
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center p-6">
                <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "AI Build has transformed how we develop and deploy AI models. The platform's ease of use and robust features have significantly accelerated our development cycle."
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10"></div>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">AI Lead, Tech Corp</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to transform your AI development workflow? Contact us today.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg space-y-6 py-12">
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}