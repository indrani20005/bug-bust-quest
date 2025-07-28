import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, GraduationCap, Stethoscope, Brain, Heart, Eye, Bone } from "lucide-react";

const Programs = () => {
  const undergraduatePrograms = [
    {
      title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      duration: "5.5 years",
      students: "300 per year",
      description: "Our flagship program providing comprehensive medical education with emphasis on clinical skills, patient care, and medical ethics.",
      features: ["Clinical rotations", "Research opportunities", "International exchange", "Simulation training"],
      icon: Stethoscope
    }
  ];

  const postgraduatePrograms = [
    {
      title: "Doctor of Medicine (MD) - Internal Medicine",
      duration: "3 years",
      students: "25 per year",
      description: "Advanced training in internal medicine with subspecialty options and research focus.",
      features: ["Subspecialty rotations", "Research thesis", "Teaching experience", "Board certification prep"],
      icon: Heart
    },
    {
      title: "Master of Surgery (MS) - General Surgery",
      duration: "3 years",
      students: "20 per year", 
      description: "Comprehensive surgical training with hands-on experience in various surgical specialties.",
      features: ["Surgical skills lab", "Minimally invasive techniques", "Trauma surgery", "Research projects"],
      icon: Bone
    },
    {
      title: "MD - Pediatrics",
      duration: "3 years",
      students: "15 per year",
      description: "Specialized training in child healthcare from neonates to adolescents.",
      features: ["NICU training", "Pediatric subspecialties", "Child development", "Family counseling"],
      icon: Heart
    },
    {
      title: "MD - Psychiatry",
      duration: "3 years",
      students: "12 per year",
      description: "Comprehensive training in mental health and psychiatric disorders.",
      features: ["Psychotherapy training", "Neuroscience research", "Community psychiatry", "Addiction medicine"],
      icon: Brain
    },
    {
      title: "MS - Ophthalmology",
      duration: "3 years",
      students: "8 per year",
      description: "Advanced training in eye care and surgical procedures.",
      features: ["Microsurgery", "Retinal surgery", "Laser procedures", "Vision research"],
      icon: Eye
    }
  ];

  const fellowshipPrograms = [
    {
      title: "Cardiology Fellowship",
      duration: "1 year",
      description: "Subspecialty training in cardiovascular medicine"
    },
    {
      title: "Oncology Fellowship", 
      duration: "1 year",
      description: "Advanced training in cancer diagnosis and treatment"
    },
    {
      title: "Emergency Medicine Fellowship",
      duration: "1 year", 
      description: "Specialized training in emergency and critical care"
    },
    {
      title: "Infectious Disease Fellowship",
      duration: "1 year",
      description: "Expert training in infectious disease management"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive medical education programs designed to shape the future of healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Undergraduate Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Foundation programs that build the core knowledge and skills for medical practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {undergraduatePrograms.map((program, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <program.icon className="h-12 w-12 text-primary" />
                      <div>
                        <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{program.duration}</span>
                          </Badge>
                          <Badge variant="outline" className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{program.students}</span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="default">Learn More</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Program Features:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="justify-center">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Postgraduate Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced specialization programs for medical professionals seeking expertise in specific fields
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {postgraduatePrograms.map((program, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <program.icon className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{program.duration}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{program.students}</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Program Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="justify-center text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowship Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fellowship Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Subspecialty training for advanced medical practitioners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fellowshipPrograms.map((program, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{program.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {program.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {program.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-medical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful healthcare professionals who started their careers at MediCore College
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply for MBBS
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;