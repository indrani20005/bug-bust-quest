import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Stethoscope, 
  Microscope, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import heroImage from "@/assets/medical-college-hero.jpg";
import medicalStudentsImg from "@/assets/medical-students.jpg";
import medicalLabImg from "@/assets/medical-lab.jpg";

const Index = () => {
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "2,500+" },
    { icon: BookOpen, label: "Faculty Members", value: "300+" },
    { icon: Award, label: "Years of Excellence", value: "75+" },
    { icon: Heart, label: "Graduates Serving", value: "15,000+" },
  ];

  const programs = [
    {
      title: "MBBS",
      description: "Bachelor of Medicine, Bachelor of Surgery - Our flagship undergraduate program",
      duration: "5.5 years",
      icon: Stethoscope
    },
    {
      title: "MD Programs",
      description: "Specialized postgraduate medical degrees in various specialties",
      duration: "3 years", 
      icon: Heart
    },
    {
      title: "MS Programs",
      description: "Master of Surgery programs for surgical specializations",
      duration: "3 years",
      icon: Microscope
    }
  ];

  const features = [
    "World-class faculty with international experience",
    "State-of-the-art medical laboratories and equipment",
    "Clinical training in affiliated hospitals",
    "Research opportunities in cutting-edge medical fields",
    "International exchange programs",
    "Comprehensive student support services"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "MBBS Graduate, Class of 2020",
      text: "MediCore College provided me with the perfect foundation for my medical career. The faculty's dedication and the hands-on clinical experience were invaluable."
    },
    {
      name: "Dr. Michael Chen",
      role: "MD Internal Medicine, Class of 2019",
      text: "The research opportunities and mentorship I received here shaped me into the physician I am today. Proud to be a MediCore graduate."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical College Building" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              MediCore College
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Shaping the Future of Healthcare Through Excellence in Medical Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <NavLink to="/admissions">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Apply Now
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
                <NavLink to="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Excellence in Medical Education Since 1949
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For over 75 years, MediCore College has been at the forefront of medical education, 
                training compassionate and skilled healthcare professionals who serve communities 
                worldwide. Our commitment to excellence, innovation, and ethical practice has made us 
                a leader in medical education.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <NavLink to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
            <div>
              <img 
                src={medicalStudentsImg} 
                alt="Medical students studying" 
                className="rounded-lg shadow-medical w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Academic Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive medical education programs designed to prepare the next generation of healthcare leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <program.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Badge variant="secondary" className="mb-4">
                    Duration: {program.duration}
                  </Badge>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <NavLink to="/programs">Learn More</NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={medicalLabImg} 
                alt="Medical research laboratory" 
                className="rounded-lg shadow-medical w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leading Medical Research & Innovation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our research programs are at the cutting edge of medical science, contributing to 
                breakthrough discoveries that improve patient care and advance medical knowledge. 
                Students have the opportunity to participate in groundbreaking research alongside 
                world-renowned faculty.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Research Labs</div>
                </div>
              </div>
              <Button asChild>
                <NavLink to="/research">
                  Explore Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful alumni who are making a difference in healthcare worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
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
            Ready to Begin Your Medical Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful healthcare professionals who started their careers at MediCore College. 
            Applications are now open for the 2024 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/admissions">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply for Admission
              </NavLink>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <NavLink to="/contact">
                Contact Admissions
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
