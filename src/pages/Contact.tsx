
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Copy, Check, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// Assuming basic input and textarea components are available or styled globally
// If using a UI library like Shadcn UI, import Input, Select, Textarea, Button here

// Define submission status types
type SubmissionStatus = 'idle' | 'success' | 'error';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    otherSubject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle'); // New state for gradient
  const [selectedSubject, setSelectedSubject] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'subject') {
      setSelectedSubject(value);
      // Clear otherSubject if a predefined subject is selected
      if (value !== 'Other') {
        setFormData(prev => ({ ...prev, otherSubject: '' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !selectedSubject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // If "Other" is selected, validate otherSubject
    if (selectedSubject === 'Other' && !formData.otherSubject) {
      alert('Please specify the subject when selecting "Other".');
      return;
    }

    // Create email content
    const finalSubject = selectedSubject === 'Other' && formData.otherSubject
      ? `[Contato Portfolio] ${formData.otherSubject}`
      : `[Contato Portfolio] ${selectedSubject}`;

    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${selectedSubject === 'Other' && formData.otherSubject ? formData.otherSubject : selectedSubject}

Mensagem:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:claudineiramiro@gmail.com?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    setSubmissionStatus('success');
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="noise-bg"
    >
      <Header />
      <main className="pt-32 pb-24" id="contact">
        <div className="avant-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1
                variants={fadeInUpVariants}
                custom={0}
                className="text-5xl md:text-6xl"
              >
                LET'S
                <br />
                CONNECT
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                custom={1}
                className="text-lg max-w-md"
              >
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Feel free to reach out through any of the channels below or use the form.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                custom={2}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">EMAIL</h3>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:claudineiramiro@gmail.com"
                        className="avant-link"
                      >
                        claudineiramiro@gmail.com
                      </a>
                      <button
                        className="p-1 hover:text-accent-foreground"
                        onClick={() => copyToClipboard('claudineiramiro@gmail.com', 'email')}
                        aria-label="Copy email"
                      >
                        {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">LOCATION</h3>
                    <p>Based in Brazil, open to remote work worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">LINKEDIN</h3>
                    <a
                      href="https://linkedin.com/in/nei-santos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1"
                    >
                      <span className="avant-link">linkedin.com/in/nei-santos</span>
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                custom={4}
                className="pt-8"
              >
                <h3 className="mb-4 text-lg">CONNECT ON SOCIAL</h3>
                <div className="flex items-center gap-6">
                  <a
                    href="https://behance.net/nei-santos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avant-link"
                  >
                    BEHANCE
                  </a>
                  <a
                    href="https://linkedin.com/in/nei-santos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avant-link"
                  >
                    LINKEDIN
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className={cn(
                "gradient-hero blur-[60px] opacity-50",
                {
                  'success': submissionStatus === 'success',
                  'error': submissionStatus === 'error',
                }
              )}>
                <div className="gradient-top"></div>
                <div className="gradient-bottom"></div>
              </div>

              <div className="rounded-2xl overflow-hidden fancy-border relative z-10 h-full min-h-[400px] flex flex-col justify-center p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <Check size={48} className="mx-auto mb-4 text-foreground" />
                    <h3 className="text-2xl md:text-3xl mb-4">Email Client Opened!</h3>
                    <p className="text-lg max-w-md mx-auto mb-6">
                      Your default email client should have opened with a pre-filled message. 
                      Just click send to complete the process!
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setSubmissionStatus('idle');
                        setFormData({ name: '', email: '', subject: '', otherSubject: '', message: '' });
                        setSelectedSubject('');
                      }}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    variants={fadeInUpVariants}
                    custom={3}
                    onSubmit={handleSubmit}
                    className="space-y-6 w-full"
                  >
                    <>
                        {/* Name Input */}
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder=" " // Required for placeholder-shown
                            className="peer block w-full px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring sm:text-sm"
                            required
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-3 top-0 -translate-y-1/2 scale-75 text-xs text-muted-foreground bg-background px-1 transition-all duration-200 ease-out 
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                                       peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                                       pointer-events-none"
                          >
                            Name
                          </label>
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder=" "
                            className="peer block w-full px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring sm:text-sm"
                            required
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-3 top-0 -translate-y-1/2 scale-75 text-xs text-muted-foreground bg-background px-1 transition-all duration-200 ease-out 
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                                       peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                                       pointer-events-none"
                          >
                            Email
                          </label>
                        </div>

                        {/* Subject Select */}
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={selectedSubject} // Use selectedSubject for controlled select
                            onChange={handleInputChange}
                            className={`peer block w-full px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring sm:text-sm ${selectedSubject ? 'text-foreground' : 'text-muted-foreground'}`}
                            required
                          >
                            <option value="" disabled>Select a subject...</option>
                            <option value="Project Inquiry">Project Inquiry</option>
                            <option value="Collaboration">Collaboration</option>
                            <option value="Feedback">Feedback</option>
                            <option value="General Question">General Question</option>
                            <option value="Other">Other</option>
                          </select>
                          {/* Label for Select - positioned statically above for simplicity */}
                          <label
                            htmlFor="subject"
                            className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none bg-background px-1 
                                         ${selectedSubject ? 'top-0 -translate-y-1/2 scale-75 text-xs text-primary' : 'top-1/2 -translate-y-1/2 scale-100 text-base text-muted-foreground'} 
                                         peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-xs peer-focus:text-primary`}
                          >
                            Subject
                          </label>
                        </div>

                        {/* Other Subject Input (Conditional) */}
                        {selectedSubject === 'Other' && (
                          <div className="relative">
                            <input
                              type="text"
                              id="otherSubject"
                              name="otherSubject"
                              value={formData.otherSubject}
                              onChange={handleInputChange}
                              placeholder=" "
                              className="peer block w-full px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring sm:text-sm"
                              required
                            />
                            <label
                              htmlFor="otherSubject"
                              className="absolute left-3 top-0 -translate-y-1/2 scale-75 text-xs text-muted-foreground bg-background px-1 transition-all duration-200 ease-out 
                                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                                             peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                                             pointer-events-none"
                            >
                              Please specify
                            </label>
                          </div>
                        )}

                        {/* Message Textarea */}
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder=" "
                            className="peer block w-full px-3 py-2 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring sm:text-sm"
                            required
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="absolute left-3 top-0 translate-y-2 scale-75 text-xs text-muted-foreground bg-background px-1 transition-all duration-200 ease-out 
                                           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base
                                           peer-focus:scale-75 peer-focus:translate-y-[-50%] peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
                                           peer-[&:not(placeholder-shown)]:scale-75 peer-[&:not(placeholder-shown)]:translate-y-[-50%] peer-[&:not(placeholder-shown)]:top-0 peer-[&:not(placeholder-shown)]:text-xs
                                           pointer-events-none"
                          >
                            Message
                          </label>
                        </div>

                        <button
                          type="submit"
                          // Replaced avant-button classes with standard Tailwind for consistent styling
                          className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
                          Send Message
                        </button>
                    </>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
