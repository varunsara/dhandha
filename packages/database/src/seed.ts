import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clean existing data
  console.log('🧹 Cleaning existing data...')
  await prisma.propertyInquiry.deleteMany()
  await prisma.propertyDocument.deleteMany()
  await prisma.property.deleteMany()
  await prisma.userProfile.deleteMany()
  await prisma.user.deleteMany()

  // Create users
  console.log('👥 Creating users...')
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@dhandha.com',
      name: 'Admin User',
      phone: '+919876543210',
      password: '$2b$10$example_hashed_password', // In real app, hash this properly
      role: 'ADMIN',
      isVerified: true,
      profile: {
        create: {
          bio: 'Platform Administrator',
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          identityVerified: true,
          phoneVerified: true,
          emailVerified: true,
        }
      }
    }
  })

  const agent1 = await prisma.user.create({
    data: {
      email: 'agent1@example.com',
      name: 'Rajesh Kumar',
      phone: '+919876543211',
      password: '$2b$10$example_hashed_password',
      role: 'AGENT',
      isVerified: true,
      profile: {
        create: {
          bio: 'Experienced real estate agent specializing in residential properties',
          city: 'Bangalore',
          state: 'Karnataka',
          country: 'India',
          identityVerified: true,
          phoneVerified: true,
          emailVerified: true,
          professionalVerified: true,
        }
      }
    }
  })

  const agent2 = await prisma.user.create({
    data: {
      email: 'agent2@example.com',
      name: 'Priya Sharma',
      phone: '+919876543212',
      password: '$2b$10$example_hashed_password',
      role: 'AGENT',
      isVerified: true,
      profile: {
        create: {
          bio: 'Commercial property specialist with 10+ years experience',
          city: 'Delhi',
          state: 'Delhi',
          country: 'India',
          identityVerified: true,
          phoneVerified: true,
          emailVerified: true,
          professionalVerified: true,
        }
      }
    }
  })

  const consumer1 = await prisma.user.create({
    data: {
      email: 'consumer1@example.com',
      name: 'Amit Patel',
      phone: '+919876543213',
      password: '$2b$10$example_hashed_password',
      role: 'CONSUMER',
      isVerified: true,
      profile: {
        create: {
          bio: 'Looking for residential property in Pune',
          city: 'Pune',
          state: 'Maharashtra',
          country: 'India',
          identityVerified: true,
          phoneVerified: true,
          emailVerified: true,
        }
      }
    }
  })

  const consumer2 = await prisma.user.create({
    data: {
      email: 'consumer2@example.com',
      name: 'Sunita Reddy',
      phone: '+919876543214',
      password: '$2b$10$example_hashed_password',
      role: 'CONSUMER',
      isVerified: false,
      profile: {
        create: {
          bio: 'First-time property buyer',
          city: 'Hyderabad',
          state: 'Telangana',
          country: 'India',
          phoneVerified: true,
          emailVerified: true,
        }
      }
    }
  })

  console.log('🏠 Creating properties...')

  // Create properties
  const property1 = await prisma.property.create({
    data: {
      title: '2 BHK Apartment in Koramangala',
      description: 'Beautiful 2 BHK apartment in the heart of Koramangala, Bangalore. Close to IT parks and metro stations.',
      type: 'APARTMENT',
      category: 'RESIDENTIAL',
      price: 8500000, // 85 lakhs
      area: 1200,
      areaUnit: 'SQ_FT',
      street: '123 Main Road',
      area_name: 'Koramangala',
      city: 'Bangalore',
      state: 'Karnataka',
      pinCode: '560034',
      country: 'India',
      latitude: 12.9352,
      longitude: 77.6245,
      nearbyLandmarks: ['Koramangala Metro Station', 'Forum Mall', 'HSR Layout'],
      amenities: ['Parking', 'Security', 'Gym', 'Swimming Pool', 'Garden'],
      images: [
        'https://example.com/images/property1-1.jpg',
        'https://example.com/images/property1-2.jpg'
      ],
      status: 'PUBLISHED',
      isVerified: true,
      verifiedBy: admin.id,
      verifiedAt: new Date(),
      legalStatus: 'CLEAR',
      titleVerification: true,
      documentVerification: true,
      locationVerification: true,
      priceVerification: true,
      ownerId: consumer1.id,
      agentId: agent1.id,
    }
  })

  const property2 = await prisma.property.create({
    data: {
      title: 'Commercial Space in Connaught Place',
      description: 'Prime commercial space in the heart of Delhi. Perfect for retail or office use.',
      type: 'COMMERCIAL',
      category: 'COMMERCIAL',
      price: 25000000, // 2.5 crores
      area: 2000,
      areaUnit: 'SQ_FT',
      street: '456 Inner Circle',
      area_name: 'Connaught Place',
      city: 'Delhi',
      state: 'Delhi',
      pinCode: '110001',
      country: 'India',
      latitude: 28.6289,
      longitude: 77.2090,
      nearbyLandmarks: ['Rajiv Chowk Metro', 'Central Park', 'India Gate'],
      amenities: ['Parking', 'Security', 'AC', 'Lift'],
      images: [
        'https://example.com/images/property2-1.jpg',
        'https://example.com/images/property2-2.jpg'
      ],
      status: 'PUBLISHED',
      isVerified: true,
      verifiedBy: admin.id,
      verifiedAt: new Date(),
      legalStatus: 'CLEAR',
      titleVerification: true,
      documentVerification: true,
      locationVerification: true,
      priceVerification: true,
      ownerId: agent2.id,
    }
  })

  const property3 = await prisma.property.create({
    data: {
      title: 'Agricultural Land in Nashik',
      description: 'Fertile agricultural land suitable for grape cultivation. Good water source available.',
      type: 'LAND',
      category: 'AGRICULTURAL',
      price: 1500000, // 15 lakhs
      area: 2.5,
      areaUnit: 'ACRE',
      street: 'Village Road',
      area_name: 'Nashik Rural',
      city: 'Nashik',
      state: 'Maharashtra',
      pinCode: '422003',
      country: 'India',
      latitude: 19.9975,
      longitude: 73.7898,
      nearbyLandmarks: ['Nashik Highway', 'Local Market'],
      amenities: ['Water Source', 'Road Access', 'Electricity'],
      images: [
        'https://example.com/images/property3-1.jpg'
      ],
      status: 'PUBLISHED',
      legalStatus: 'CLEAR',
      ownerId: consumer2.id,
      agentId: agent1.id,
    }
  })

  const property4 = await prisma.property.create({
    data: {
      title: 'Residential Plot in Gachibowli',
      description: 'Ready-to-build residential plot in upcoming area of Hyderabad.',
      type: 'PLOT',
      category: 'RESIDENTIAL',
      price: 4500000, // 45 lakhs
      area: 3000,
      areaUnit: 'SQ_FT',
      street: 'Plot No. 789',
      area_name: 'Gachibowli',
      city: 'Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      country: 'India',
      latitude: 17.4399,
      longitude: 78.3908,
      nearbyLandmarks: ['Hitec City', 'ISB School', 'DLF Campus'],
      amenities: ['Water', 'Electricity', 'Road Access', 'Gated Community'],
      images: [
        'https://example.com/images/property4-1.jpg'
      ],
      status: 'DRAFT',
      legalStatus: 'PENDING',
      ownerId: consumer1.id,
      agentId: agent2.id,
    }
  })

  console.log('📄 Creating property documents...')

  // Create property documents
  await prisma.propertyDocument.createMany({
    data: [
      {
        propertyId: property1.id,
        name: 'Sale Deed',
        type: 'SALE_DEED',
        url: 'https://example.com/documents/property1-sale-deed.pdf',
        isVerified: true,
      },
      {
        propertyId: property1.id,
        name: 'Title Deed',
        type: 'TITLE_DEED',
        url: 'https://example.com/documents/property1-title-deed.pdf',
        isVerified: true,
      },
      {
        propertyId: property2.id,
        name: 'Commercial License',
        type: 'NOC',
        url: 'https://example.com/documents/property2-license.pdf',
        isVerified: true,
      },
      {
        propertyId: property3.id,
        name: 'Agricultural Records',
        type: 'SURVEY_SETTLEMENT',
        url: 'https://example.com/documents/property3-survey.pdf',
        isVerified: false,
      }
    ]
  })

  console.log('💬 Creating property inquiries...')

  // Create property inquiries
  await prisma.propertyInquiry.createMany({
    data: [
      {
        propertyId: property1.id,
        userId: consumer2.id,
        message: 'I am interested in this property. Can we schedule a visit?',
        status: 'PENDING',
      },
      {
        propertyId: property2.id,
        userId: consumer1.id,
        message: 'What is the rental yield for this commercial space?',
        status: 'RESPONDED',
      },
      {
        propertyId: property3.id,
        userId: consumer1.id,
        message: 'Is the soil suitable for organic farming?',
        status: 'PENDING',
      }
    ]
  })

  console.log('✅ Database seeding completed successfully!')
  console.log(`Created:`)
  console.log(`- ${await prisma.user.count()} users`)
  console.log(`- ${await prisma.userProfile.count()} user profiles`)
  console.log(`- ${await prisma.property.count()} properties`)
  console.log(`- ${await prisma.propertyDocument.count()} property documents`)
  console.log(`- ${await prisma.propertyInquiry.count()} property inquiries`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })