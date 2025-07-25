"use client";

import { Carousel } from "@/components/ui/carousel";
export function SignatureResidences() {
  const slideData = [
    {
      title: "Dubai Opera District",
      subtitle: "Cultural Heart of Downtown",
      description: "Elegant residences overlooking Dubai Opera with world-class entertainment and dining at your doorstep",
      button: "View Collection",
      src: "https://cdn.properties.emaar.com/wp-content/uploads/2022/10/THE_RESIDENCE_BK_OFFERS_PAGE_IMAGE.jpg",
      price: "Starting from AED 2.2M",
      location: "Downtown Dubai",
      type: "Luxury Apartments"
    },
    {
      title: "Sea Facing Residences",
      subtitle: "Live Above the World's Largest Mall",
      description: "Sophisticated living spaces directly connected to Dubai Mall with unmatched shopping and dining access",
      button: "Discover Living",
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 1.8M",
      location: "Downtown Dubai",
      type: "Premium Apartments"
    },
    {
      title: "Burj Khalifa - The Crown Jewel",
      subtitle: "World's Tallest Building",
      description: "Experience unparalleled luxury in the world's most iconic tower with breathtaking views of Dubai's skyline",
      button: "Explore Residences",
      src: "https://www.som.com/wp-content/uploads/2024/03/203188_000_N2790_large-1711642362.jpg",
      price: "Starting from AED 2.5M",
      location: "Downtown Dubai",
      type: "Ultra-Luxury Apartments"
    },
    {
      title: "Dubai Hills Estate",
      subtitle: "Golf Course Living Redefined",
      description: "Serene luxury homes surrounded by lush landscapes and championship golf courses",
      button: "Explore Villas",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 3.5M",
      location: "Dubai Hills",
      type: "Premium Villas & Townhouses"
    },
    {
      title: "Emaar Beachfront",
      subtitle: "Arabian Gulf Waterfront Living",
      description: "Ultra-modern towers with pristine beachfront access and panoramic ocean views",
      button: "Beach Living",
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 4.2M",
      location: "Dubai Harbour",
      type: "Beachfront Apartments"
    },
    {
      title: "The Valley by Emaar",
      subtitle: "Nature-Inspired Community",
      description: "Contemporary homes nestled in verdant landscapes with cycling trails and recreational facilities",
      button: "Nature Living",
      src: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 1.2M",
      location: "Dubai South",
      type: "Family Villas & Townhouses"
    },
    {
      title: "Dubai Creek Harbour",
      subtitle: "Waterfront Metropolis",
      description: "Next-generation urban living with Creek Tower views and world-class marina lifestyle",
      button: "Harbour Life",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 1.9M",
      location: "Dubai Creek",
      type: "Waterfront Apartments"
    },
    {
      title: "Arabian Ranches III",
      subtitle: "Desert-Inspired Luxury",
      description: "Exclusive villa community with contemporary Arabian architecture and premium amenities",
      button: "Desert Luxury",
      src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 2.8M",
      location: "Arabian Ranches",
      type: "Luxury Villas"
    },
    {
      title: "Emaar South",
      subtitle: "Future-Ready Smart City",
      description: "Sustainable living near Al Maktoum International Airport with smart home technology",
      button: "Smart Living",
      src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 950K",
      location: "Dubai South",
      type: "Contemporary Apartments"
    },
    {
      title: "Golf Links at Emaar South",
      subtitle: "Championship Golf Community",
      description: "Luxury villas and apartments overlooking an 18-hole championship golf course",
      button: "Golf Paradise",
      src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&h=600&fit=crop&crop=center",
      price: "Starting from AED 1.6M",
      location: "Dubai South",
      type: "Golf Course Residences"
    }
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
