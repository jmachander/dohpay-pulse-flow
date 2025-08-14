import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, X } from "lucide-react";

interface ApplicationFormProps {
  position: string;
  onClose: () => void;
}

export default function ApplicationForm({ position, onClose }: ApplicationFormProps) {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleFileUpload = (file: File, type: 'resume' | 'cv') => {
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({ 
        title: "File too large", 
        description: "Please upload files smaller than 5MB",
        variant: "destructive"
      });
      return;
    }
    
    if (type === 'resume') {
      setResumeFile(file);
    } else {
      setCvFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!formData.get("name") || !formData.get("email") || !formData.get("phone")) {
      toast({ 
        title: "Missing fields", 
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!resumeFile) {
      toast({ 
        title: "Resume required", 
        description: "Please upload your resume",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({ 
      title: "Application submitted!", 
      description: `Thank you for applying for ${position}. We'll review your application and get back to you soon.`
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between p-6">
          <div>
            <CardTitle className="text-2xl">Apply for {position}</CardTitle>
            <CardDescription className="text-lg mt-2">
              Join our team of innovative engineers building the future of beverage technology
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-6 pt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Full Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  className="h-12 text-base" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="h-12 text-base" 
                  required 
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="+254 700 000 000" 
                  className="h-12 text-base" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="university" className="text-base">University/Institution</Label>
                <Input 
                  id="university" 
                  name="university" 
                  placeholder="University of Nairobi" 
                  className="h-12 text-base" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="graduation" className="text-base">Graduation Year & Field of Study</Label>
              <Input 
                id="graduation" 
                name="graduation" 
                placeholder="2024 - Mechanical Engineering" 
                className="h-12 text-base" 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation" className="text-base">Why do you want to join DohPay Solutions?</Label>
              <Textarea 
                id="motivation" 
                name="motivation" 
                placeholder="Tell us about your passion for innovation and how you can contribute to our mission..."
                className="min-h-[120px] text-base" 
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-base">Resume/CV * (PDF, max 5MB)</Label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'resume')}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    {resumeFile ? resumeFile.name : "Upload Resume"}
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-base">Cover Letter (PDF, max 5MB)</Label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'cv')}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    {cvFile ? cvFile.name : "Upload Cover Letter"}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button type="submit" variant="glass" size="lg" className="flex-1">
                Submit Application
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}