const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding started...");

  // 1. Clean up existing landmarks and favorites first to avoid duplicate primary key / data bloat
  await prisma.favorite.deleteMany({});
  await prisma.landmark.deleteMany({});

  // 2. Create a mock profile if it doesn't exist
  const mockClerkId = "user_2mockclerkid1234567890";
  const profile = await prisma.profile.upsert({
    where: { clerkId: mockClerkId },
    update: {},
    create: {
      clerkId: mockClerkId,
      firstName: "Pongsatorn",
      lastName: "R.",
      userName: "pongsatorn_dev",
      email: "pongsatorn.rk@gmail.com",
      profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    }
  });
  console.log("Profile upserted:", profile.clerkId);

  // 3. Create mock landmarks
  const landmarks = [
    {
      name: "Khao Yai Pine Forest Camp",
      description: "Experience camping under the stars surrounded by tall pine trees in Khao Yai. Perfect cool breeze, outdoor bonfire areas, and fully equipped facilities for a premium outdoor experience.",
      category: "Camping",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
      province: "Nakhon Ratchasima",
      lat: 14.4392,
      lng: 101.4053,
      price: 450,
      profileId: mockClerkId
    },
    {
      name: "Samae San Beachfront Tents",
      description: "Wake up to the sound of ocean waves. This beachfront campsite in Chonburi offers pristine white sand, crystal clear water, and standard tent options with full BBQ gear available for rent.",
      category: "Beach",
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      province: "Chonburi",
      lat: 12.6015,
      lng: 100.9572,
      price: 600,
      profileId: mockClerkId
    },
    {
      name: "Doi Inthanon Misty Peaks Resort",
      description: "A cozy mountainside retreat nestled in Doi Inthanon National Park. Offers stunning sunrise views over the sea of mist and close proximity to waterfalls and hiking trails.",
      category: "Mountain",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      province: "Chiang Mai",
      lat: 18.5912,
      lng: 98.4871,
      price: 1200,
      profileId: mockClerkId
    },
    {
      name: "Phuket Luxury Horizon Hotel",
      description: "A luxury 5-star hotel perched on the cliffs of Kamala Beach in Phuket. Enjoy private infinity pools, panoramic Andaman Sea views, and world-class spa facilities.",
      category: "Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      province: "Phuket",
      lat: 7.9542,
      lng: 98.2783,
      price: 3500,
      profileId: mockClerkId
    },
    {
      name: "Phra Nakhon Heritage Hostel",
      description: "A beautifully restored vintage boutique hostel in the heart of Ayutthaya. Surrounded by historic temple ruins, offering comfortable bunk beds and free bicycle rentals.",
      category: "Hostel",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      province: "Phra Nakhon Si Ayutthaya",
      lat: 14.3532,
      lng: 100.5681,
      price: 350,
      profileId: mockClerkId
    },
    {
      name: "The Glasshouse Garden Restaurant",
      description: "A dining experience in a glasshouse surrounded by lush English gardens. Serving premium Thai-Western fusion dishes made with locally sourced organic ingredients.",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      province: "Bangkok",
      lat: 13.7563,
      lng: 100.5018,
      price: 850,
      profileId: mockClerkId
    }
  ];

  for (const landmark of landmarks) {
    const created = await prisma.landmark.create({
      data: landmark
    });
    console.log("Created landmark:", created.name);
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
