import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award, BookOpen, Users } from "lucide-react";
import medicalFacultyImg from "@/assets/medical-faculty.jpg";

const Faculty = () => {
  const deans = [
    {
      name: "Dr. Sarah Johnson",
      position: "Dean of Medical College",
      specialization: "Cardiology",
      education: "MD Harvard Medical School, PhD Johns Hopkins",
      experience: "25+ years",
      image: medicalFacultyImg,
      achievements: ["Pioneering research in cardiac intervention", "Published 150+ research papers", "Award for Excellence in Medical Education"]
    }
  ];

  const departments = [
    {
      name: "Internal Medicine",
      head: "Dr. Michael Chen",
      faculty: 25,
      specializations: ["Cardiology", "Nephrology", "Endocrinology", "Gastroenterology"]
    },
    {
      name: "Surgery",
      head: "Dr. Emily Rodriguez",
      faculty: 20,
      specializations: ["General Surgery", "Orthopedics", "Neurosurgery", "Plastic Surgery"]
    },
    {
      name: "Pediatrics", 
      head: "Dr. James Wilson",
      faculty: 18,
      specializations: ["Neonatology", "Pediatric Cardiology", "Child Development", "Pediatric Surgery"]
    },
    {
      name: "Obstetrics & Gynecology",
      head: "Dr. Lisa Thompson",
      faculty: 15,
      specializations: ["Maternal-Fetal Medicine", "Reproductive Endocrinology", "Gynecologic Oncology"]
    },
    {
      name: "Psychiatry",
      head: "Dr. Robert Kumar",
      faculty: 12,
      specializations: ["Child Psychiatry", "Addiction Medicine", "Forensic Psychiatry", "Neuropsychiatry"]
    },
    {
      name: "Radiology",
      head: "Dr. Amanda Foster",
      faculty: 14,
      specializations: ["Interventional Radiology", "Neuroradiology", "Nuclear Medicine", "Diagnostic Imaging"]
    },
    {
      name: "Pathology",
      head: "Dr. David Park",
      faculty: 10,
      specializations: ["Surgical Pathology", "Molecular Diagnostics", "Hematopathology", "Cytopathology"]
    },
    {
      name: "Anesthesiology",
      head: "Dr. Maria Gonzalez",
      faculty: 16,
      specializations: ["Cardiac Anesthesia", "Pediatric Anesthesia", "Pain Management", "Critical Care"]
    }
  ];

  const facultyHighlights = [
    {
      title: "Research Excellence",
      description: "Our faculty has published over 2,500 research papers in the last 5 years",
      icon: BookOpen
    },
    {
      title: "Clinical Experience",
      description: "Average of 15+ years of clinical practice and teaching experience",
      icon: Users
    },
    {
      title: "International Recognition",
      description: "50+ faculty members with international awards and recognition",
      icon: Award
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
              Our Faculty
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              World-class educators and researchers dedicated to excellence in medical education
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyHighlights.map((highlight, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="p-8">
                  <highlight.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dean Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our distinguished academic leadership team
            </p>
          </div>
          
          {deans.map((dean, index) => (
            <Card key={index} className="shadow-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <img 
                      src={dean.image} 
                      alt={dean.name}
                      className="w-64 h-80 object-cover rounded-lg mx-auto shadow-medical"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-foreground mb-2">{dean.name}</h3>
                    <p className="text-xl text-primary font-semibold mb-4">{dean.position}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                        <p className="text-muted-foreground">{dean.specialization}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                        <p className="text-muted-foreground">{dean.experience}</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-foreground mb-2">Education</h4>
                        <p className="text-muted-foreground">{dean.education}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {dean.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <Award className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic Departments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our faculty is organized into specialized departments led by renowned experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{dept.name}</h3>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{dept.faculty}</span>
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Department Head</p>
                    <p className="font-medium text-foreground">{dept.head}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Specializations</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>Contact</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>Schedule</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-20 bg-gradient-medical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
              Faculty by Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">300+</div>
                <div className="text-primary-foreground/80">Total Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">95%</div>
                <div className="text-primary-foreground/80">PhD Holders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">150+</div>
                <div className="text-primary-foreground/80">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">25+</div>
                <div className="text-primary-foreground/80">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;