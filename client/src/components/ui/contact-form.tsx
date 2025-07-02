import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { toast } = useToast();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmailMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    sendEmailMutation.mutate(data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Form Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-morphism rounded-2xl p-8 w-full max-w-md border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-futuristic text-xl text-[var(--cosmic-ethereal)] letter-spacing-ultra">
                  CONTACT ARBORELICS
                </h2>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm letter-spacing-ultra">
                          NAME
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 
                                     focus:border-[var(--cosmic-ethereal)] focus:ring-[var(--cosmic-ethereal)]"
                            placeholder="Your name"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm letter-spacing-ultra">
                          EMAIL
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 
                                     focus:border-[var(--cosmic-ethereal)] focus:ring-[var(--cosmic-ethereal)]"
                            placeholder="your@email.com"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 text-sm letter-spacing-ultra">
                          MESSAGE
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 
                                     focus:border-[var(--cosmic-ethereal)] focus:ring-[var(--cosmic-ethereal)] resize-none"
                            placeholder="Tell us about your project, collaboration ideas, or any questions..."
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1 border-white/20 text-white/80 hover:bg-white/10"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={sendEmailMutation.isPending}
                      className="flex-1 bg-[var(--cosmic-ethereal)] text-black hover:bg-[var(--cosmic-ethereal)]/80 
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sendEmailMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}