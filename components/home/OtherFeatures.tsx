import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function OtherFeatures() {
  const otherFeatures: { title: string; content: string }[] = [
    {
      title: "Contact Sharing",
      content:
        "Share contact information with others effortlessly. Whether it's sending a colleague's contact details to a client or sharing a friend's info with a group, ConnexusLink makes it simple.",
    },
    {
      title: "Contact Communication",
      content:
        "Stay connected with a single click. Call, email, or message your contacts directly from within the app. No need to switch between apps; it's all at your fingertips.",
    },
    {
      title: "Contact Notes",
      content:
        "Keep track of important details. Add personal notes or reminders for each contact. Never forget a birthday or an important detail again.",
    },
    {
      title: "Contact Birthdays/Reminders",
      content:
        "Never miss a special day. ConnexusLink helps you remember birthdays, anniversaries, and other important dates. Set reminders and celebrate with your loved ones.",
    },
    {
      title: "Contact Deletion",
      content:
        "Declutter your contacts. Remove outdated or irrelevant contacts easily. ConnexusLink ensures your contact list stays clean and organized.",
    },
    {
      title: "Responsive Design",
      content:
        "Access your contacts from anywhere, on any device. ConnexusLink is fully responsive, ensuring a seamless experience whether you're on your phone, tablet, or desktop.",
    },
    {
      title: "User Settings",
      content: "Tailor ConnexusLink to your preferences. Customize themes, language, and privacy settings to make the app truly your own.",
    },
    {
      title: "User Profile",
      content: "Personalize your profile. Update your information and profile picture to keep your ConnexusLink experience unique.",
    },
    {
      title: "Error Handling and Validation",
      content:
        "Enjoy a hassle-free experience. ConnexusLink is designed with meticulous error handling and validation to ensure smooth interactions and data accuracy.",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {otherFeatures.map((feature) => (
        <Card key={feature.title} className="w-full border-[#007BFF]">
          <CardHeader>
            <CardTitle className="mb-4 h-12">{feature.title}</CardTitle>
            <CardDescription className="text-sm leading-normal text-gray-600">{feature.content}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
