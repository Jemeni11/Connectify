import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function KeyFeatures() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>User Registration and Authentication</AccordionTrigger>
        <AccordionContent>Securely create an account and log in to access your contacts.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Contact List</AccordionTrigger>
        <AccordionContent>Effortlessly view and manage a comprehensive list of your contacts.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Contact Search</AccordionTrigger>
        <AccordionContent>Quickly find specific contacts with our robust search functionality.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Contact Details</AccordionTrigger>
        <AccordionContent>Access detailed information about each contact, from phone numbers to addresses.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Contact Import/Export</AccordionTrigger>
        <AccordionContent>Seamlessly import contacts from external sources and export them in various formats.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
