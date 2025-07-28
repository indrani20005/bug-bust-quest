import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Users, CheckCircle, AlertCircle, Clock, DollarSign } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Review admission requirements and ensure you meet the criteria",
      icon: CheckCircle
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Complete the online application form with required documents",
      icon: FileText
    },
    {
      step: 3,
      title: "Entrance Exam",
      description: "Take the medical college entrance examination",
      icon: Users
    },
    {
      step: 4,
      title: "Interview",
      description: "Attend the personal interview session",
      icon: Users
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Receive admission decision and complete enrollment",
      icon: CheckCircle
    }
  ];

  const requirements = {
    mbbs: [
      "High School diploma with Physics, Chemistry, Biology, and Mathematics",
      "Minimum 75% aggregate score in qualifying examination",
      "Age: 17-25 years at the time of admission",
      "Valid NEET score (for Indian students) or equivalent international exam",
      "English proficiency test (IELTS/TOEFL for international students)",
      "Medical fitness certificate"
    ],
    postgraduate: [
      "MBBS degree from recognized medical college",
      "Valid medical license to practice",
      "Minimum 60% aggregate in MBBS",
      "NEET-PG score or equivalent",
      "Internship completion certificate",
      "Work experience (preferred for some specialties)"
    ]
  };

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2024", status: "upcoming" },
    { event: "Application Deadline", date: "March 30, 2024", status: "upcoming" },
    { event: "Entrance Exam", date: "April 15-20, 2024", status: "upcoming" },
    { event: "Interview Period", date: "May 1-15, 2024", status: "upcoming" },
    { event: "Results Declaration", date: "May 25, 2024", status: "upcoming" },
    { event: "Admission Confirmation", date: "June 10, 2024", status: "upcoming" }
  ];

  const feeStructure = [
    { program: "MBBS", annual: "$15,000", total: "$82,500", duration: "5.5 years" },
    { program: "MD - Internal Medicine", annual: "$18,000", total: "$54,000", duration: "3 years" },
    { program: "MS - General Surgery", annual: "$20,000", total: "$60,000", duration: "3 years" },
    { program: "MD - Pediatrics", annual: "$18,000", total: "$54,000", duration: "3 years" },
    { program: "MD - Psychiatry", annual: "$17,000", total: "$51,000", duration: "3 years" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Admissions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Start your journey to becoming a healthcare professional at MediCore College
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to apply for admission to our medical programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Requirements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Review the specific requirements for each program level
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-primary" />
                  MBBS Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.mbbs.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-primary" />
                  Postgraduate Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.postgraduate.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Important Dates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Keep track of all admission deadlines and key dates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((date, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <Badge variant={date.status === 'completed' ? 'secondary' : 'default'}>
                      {date.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{date.event}</h3>
                  <p className="text-xl font-bold text-primary">{date.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fee Structure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent and competitive fee structure for all programs
            </p>
          </div>
          
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary">
                    <tr>
                      <th className="px-6 py-4 text-left text-primary-foreground font-semibold">Program</th>
                      <th className="px-6 py-4 text-left text-primary-foreground font-semibold">Annual Fee</th>
                      <th className="px-6 py-4 text-left text-primary-foreground font-semibold">Total Fee</th>
                      <th className="px-6 py-4 text-left text-primary-foreground font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted'}>
                        <td className="px-6 py-4 font-medium text-foreground">{fee.program}</td>
                        <td className="px-6 py-4 text-muted-foreground">{fee.annual}</td>
                        <td className="px-6 py-4 font-semibold text-primary">{fee.total}</td>
                        <td className="px-6 py-4 text-muted-foreground">{fee.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              * Additional fees may apply for hostel, laboratory, and other facilities
            </p>
            <p className="text-muted-foreground">
              Scholarships and financial aid available for eligible students
            </p>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-medical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your medical career. Applications are now open for the 2024 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <FileText className="mr-2 h-5 w-5" />
              Start Application
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;