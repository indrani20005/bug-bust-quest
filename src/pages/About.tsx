import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, Heart } from "lucide-react";
import medicalStudentsImg from "@/assets/medical-students.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Enrolled", value: "2,500+" },
    { icon: BookOpen, label: "Faculty Members", value: "300+" },
    { icon: Award, label: "Years of Excellence", value: "75+" },
    { icon: Heart, label: "Graduates Serving", value: "15,000+" },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description: "We maintain the highest standards in medical education, ensuring our graduates are well-prepared for their medical careers."
    },
    {
      title: "Compassionate Care",
      description: "We instill values of empathy and compassion, training healthcare professionals who truly care for their patients."
    },
    {
      title: "Innovation & Research",
      description: "We encourage innovative thinking and cutting-edge research to advance medical knowledge and patient care."
    },
    {
      title: "Service to Community",
      description: "We emphasize the importance of giving back to the community through medical service and outreach programs."
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
              About MediCore College
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Dedicated to excellence in medical education, research, and healthcare service for over 75 years
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To educate and train compassionate, competent, and ethical healthcare professionals who will serve diverse communities with excellence, while advancing medical knowledge through innovative research and scholarship.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading medical institution recognized globally for excellence in medical education, groundbreaking research, and transformative healthcare solutions that improve lives and communities worldwide.
                  </p>
                </div>
              </div>
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

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our institution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a world-renowned medical institution
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">1949</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Foundation</h3>
                  <p className="text-muted-foreground">MediCore College was established with a vision to provide quality medical education and serve the healthcare needs of the community.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">1975</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Research Excellence</h3>
                  <p className="text-muted-foreground">Established our research division, leading to groundbreaking discoveries in medical science and patient care.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">2000</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Global Recognition</h3>
                  <p className="text-muted-foreground">Achieved international accreditation and established partnerships with leading medical institutions worldwide.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Innovation Hub</h3>
                  <p className="text-muted-foreground">Continuing to lead in medical innovation with state-of-the-art facilities and cutting-edge research programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;