import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize, Film } from "lucide-react";
import { motion } from "framer-motion";

export function VideoShowcase() {
  const [playing, setPlaying] = useState<number | null>(null);

  const videos = [
    {
      title: "Product Overview & Features",
      duration: "3:24",
      thumbnail: "gradient-1",
      description: "Complete walkthrough of SecureAuth Pro hardware features, biometric sensors, and cold storage technology",
      category: "Product Demo",
    },
    {
      title: "Enterprise Deployment Guide",
      duration: "5:12",
      thumbnail: "gradient-2",
      description: "Step-by-step guide for IT administrators on deploying SecureAuth Pro across large organizations",
      category: "Implementation",
    },
    {
      title: "Job Center Authentication Flow",
      duration: "2:45",
      thumbnail: "gradient-3",
      description: "Real-world demonstration of unemployment benefits authentication at public kiosk",
      category: "Use Case",
    },
    {
      title: "Security Architecture Deep-Dive",
      duration: "6:30",
      thumbnail: "gradient-4",
      description: "Technical explanation of blockchain integrity, tamper detection, and quantum-resistant encryption",
      category: "Technical",
    },
    {
      title: "SDK Integration Tutorial",
      duration: "4:15",
      thumbnail: "gradient-5",
      description: "Developer guide showing how to integrate SecureAuth Pro into web and mobile applications",
      category: "Developer",
    },
    {
      title: "Compliance & Certifications",
      duration: "3:50",
      thumbnail: "gradient-6",
      description: "Overview of FIDO2, SOC 2, ISO 27001, and NIST compliance certifications",
      category: "Compliance",
    },
  ];

  const gradients = {
    "gradient-1": "from-primary via-accent to-primary",
    "gradient-2": "from-accent via-primary to-accent",
    "gradient-3": "from-blue-500 via-teal-500 to-blue-500",
    "gradient-4": "from-teal-500 via-blue-500 to-teal-500",
    "gradient-5": "from-primary/80 via-accent/80 to-primary/80",
    "gradient-6": "from-accent/80 via-primary/80 to-accent/80",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="videos" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Video Demonstrations
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            See SecureAuth Pro in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch comprehensive video tutorials, product demonstrations, and real-world use case scenarios.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {videos.map((video, index) => {
            const isPlaying = playing === index;
            
            return (
              <motion.div key={index} variants={item}>
                <Card
                  className="overflow-hidden hover-elevate group"
                  data-testid={`card-video-${index}`}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[video.thumbnail as keyof typeof gradients]} opacity-90`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Film className="w-20 h-20 text-white/30" />
                      </div>
                    </div>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <Button
                        size="icon"
                        className={`rounded-full ${
                          isPlaying ? "bg-accent" : "bg-primary"
                        }`}
                        onClick={() => setPlaying(isPlaying ? null : index)}
                        data-testid={`button-play-${index}`}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6 ml-1" />
                        )}
                      </Button>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3">
                      <Badge className="bg-black/70 hover:bg-black/80 backdrop-blur-sm">
                        {video.duration}
                      </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="backdrop-blur-sm">
                        {video.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1" data-testid={`text-video-title-${index}`}>
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-video-desc-${index}`}>
                      {video.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Animated Explainer Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Interactive Product Tour</h3>
                <p className="text-muted-foreground mb-6">
                  Experience an interactive 360° view of SecureAuth Pro hardware, explore each component, and understand how our patented cold storage technology works.
                </p>
                <div className="flex gap-3">
                  <Button variant="default" data-testid="button-interactive-tour">
                    <Play className="w-4 h-4 mr-2" />
                    Start Interactive Tour
                  </Button>
                  <Button variant="outline" data-testid="button-download-videos">
                    Download All Videos
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-32 h-32"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary"></div>
                </motion.div>
                <div className="absolute">
                  <Film className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Video Controls Info */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { icon: Play, label: "HD Quality", desc: "1080p & 4K available" },
            { icon: Volume2, label: "Audio Tracks", desc: "Multiple languages" },
            { icon: Maximize, label: "Full Screen", desc: "Immersive viewing" },
            { icon: Film, label: "Chapters", desc: "Skip to sections" },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-elevate">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-1">{feature.label}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
