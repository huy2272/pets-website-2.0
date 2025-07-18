"use client";
import type React from "react";

import { useState } from "react";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "src/components/ui/dialog";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";
import { Heart, MapPin, Calendar, User } from "lucide-react";

interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  size: string;
  description: string;
  location: string;
  image: string;
  personality: string[];
}

const mockPets: Pet[] = [
  {
    id: 1,
    name: "Luna",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Female",
    size: "Large",
    description:
      "Luna is a friendly and energetic Golden Retriever who loves playing fetch and swimming. She's great with kids and other dogs.",
    location: "San Francisco, CA",
    image:
      "https://as1.ftcdn.net/v2/jpg/02/13/96/52/1000_F_213965280_VZZncwRZDWcfH2yX1glTdq34xiN4kzA5.jpg",
    personality: ["Friendly", "Energetic", "Loyal"],
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    breed: "Maine Coon",
    age: "3 years",
    gender: "Male",
    size: "Large",
    description:
      "Whiskers is a gentle giant who loves to cuddle and purr. He's very calm and would be perfect for a quiet home.",
    location: "Los Angeles, CA",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/64/15/41/1000_F_264154131_XvpBI5fARjB7Qlo4PMrMMTaunXha47NR.jpg",
    personality: ["Gentle", "Calm", "Affectionate"],
  },
  {
    id: 3,
    name: "Buddy",
    type: "Dog",
    breed: "Labrador Mix",
    age: "4 years",
    gender: "Male",
    size: "Medium",
    description:
      "Buddy is a sweet and loyal companion who loves long walks and belly rubs. He's house-trained and knows basic commands.",
    location: "Austin, TX",
    image:
      "https://as1.ftcdn.net/v2/jpg/04/75/59/24/1000_F_475592450_bKpm65G7vrJFLARGalKGTfJWr2ZGoZ4c.jpg",
    personality: ["Sweet", "Loyal", "Well-trained"],
  },
  {
    id: 4,
    name: "Mittens",
    type: "Cat",
    breed: "Domestic Shorthair",
    age: "1 year",
    gender: "Female",
    size: "Small",
    description:
      "Mittens is a playful kitten who loves toys and climbing. She's very social and gets along well with other cats.",
    location: "Seattle, WA",
    image:
      "https://cdn12.picryl.com/photo/2016/12/31/ppt-backgrounds-cat-pets-animals-ac9d60-1024.jpg",
    personality: ["Playful", "Social", "Curious"],
  },
  {
    id: 5,
    name: "Max",
    type: "Dog",
    breed: "German Shepherd",
    age: "5 years",
    gender: "Male",
    size: "Large",
    description:
      "Max is a protective and intelligent dog who would make an excellent guard dog. He's well-trained and very obedient.",
    location: "Denver, CO",
    image:
      "https://as2.ftcdn.net/v2/jpg/01/99/00/79/1000_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
    personality: ["Protective", "Intelligent", "Obedient"],
  },
  {
    id: 6,
    name: "Bella",
    type: "Cat",
    breed: "Persian",
    age: "2 years",
    gender: "Female",
    size: "Medium",
    description:
      "Bella is an elegant Persian cat who enjoys quiet moments and gentle petting. She's perfect for someone looking for a calm companion.",
    location: "Miami, FL",
    image:
      "https://as2.ftcdn.net/v2/jpg/00/85/95/79/1000_F_85957993_x6BN46mxasrRye2mp5rXFVrjAUE5LWF8.jpg",
    personality: ["Elegant", "Quiet", "Gentle"],
  },
];

export default function PetsAdoption() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [isAdoptionFormOpen, setIsAdoptionFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    experience: "",
    reason: "",
  });

  const handleAdoptClick = (pet: Pet) => {
    setSelectedPet(pet);
    setIsAdoptionFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(
      `Thank you for your interest in adopting ${selectedPet?.name}! We'll contact you soon.`,
    );
    setIsAdoptionFormOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      experience: "",
      reason: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">PawsHome</h1>
            </div>
            <nav className="hidden space-x-6 md:flex">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Find Your Perfect Companion
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Give a loving home to pets in need. Browse our available animals and
            find your new best friend today.
          </p>
        </div>
      </section>

      {/* Pets Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockPets.map((pet) => (
              <Card
                key={pet.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={pet.image || "/placeholder.svg"}
                    alt={pet.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{pet.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {pet.breed} • {pet.gender}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{pet.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      {pet.age}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="mr-2 h-4 w-4" />
                      {pet.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="mr-2 h-4 w-4" />
                      {pet.size}
                    </div>
                  </div>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-700">
                    {pet.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1">
                    {pet.personality.map((trait) => (
                      <Badge key={trait} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => handleAdoptClick(pet)}
                    className="w-full bg-red-500 hover:bg-red-600"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Adopt {pet.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Form Dialog */}
      <Dialog open={isAdoptionFormOpen} onOpenChange={setIsAdoptionFormOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Adopt {selectedPet?.name}
            </DialogTitle>
            <DialogDescription>
              Please fill out this form to start the adoption process. We'll
              review your application and contact you soon.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code *</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Pet Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                placeholder="Tell us about your experience with pets..."
                value={formData.experience}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">
                Why do you want to adopt {selectedPet?.name}? *
              </Label>
              <Textarea
                id="reason"
                name="reason"
                placeholder="Tell us why you'd like to adopt this pet..."
                value={formData.reason}
                onChange={handleInputChange}
                required
                className="min-h-[100px]"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAdoptionFormOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-red-500 hover:bg-red-600"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
