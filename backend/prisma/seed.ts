import prisma from '../src/prismaClient.js';
import * as bcrypt from 'bcryptjs';

// Pre-hash a test password for seed data
const TEST_PASSWORD = 'test12345';

async function main() {
  console.log('🌱 Seeding database with Un Matecito test data...');
  const password_hash = await bcrypt.hash(TEST_PASSWORD, 12);

  // 1. Clean Slate
  // Truncate tables to ensure clean IDs and no conflicts
  await prisma.$executeRaw`TRUNCATE TABLE "Booking" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Trip" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "User" CASCADE;`;

  // 2. Create Drivers (Need these for Foreign Keys)
  // We'll create a few drivers to assign trips to.
  const driverArg = await prisma.user.create({
    data: {
      email: 'driver.arg@example.com',
      password_hash,
      phone: '+5491112345678',
      dni_cpf: '20304050',
      is_driver_verified: true,
      reputation: 4.9,
      country: 'AR'
    }
  });

  const driverBra = await prisma.user.create({
    data: {
      email: 'driver.bra@example.com',
      password_hash,
      phone: '+5511987654321',
      dni_cpf: '12345678900',
      is_driver_verified: true,
      reputation: 4.7,
      country: 'BR'
    }
  });

  const driverPata = await prisma.user.create({
    data: {
      email: 'driver.pata@example.com',
      password_hash,
      phone: '+5492944123456',
      dni_cpf: '30405060',
      is_driver_verified: true,
      reputation: 5.0,
      country: 'AR'
    }
  });

  console.log('✅ Drivers created.');

  // 3. Insert Trips using PostGIS
  // Trip 1 (ARG): Buenos Aires (Obelisco) -> Córdoba (Centro)
  await prisma.$executeRaw`
    INSERT INTO "Trip" (
      id, driver_id, origin_coords, dest_coords, origin_address, dest_address,
      departure_time, seats_available, price, currency, "women_only", "updatedAt"
    ) VALUES (
      gen_random_uuid(),
      ${driverArg.id},
      ST_SetSRID(ST_MakePoint(-58.3816, -34.6037), 4326),
      ST_SetSRID(ST_MakePoint(-64.1888, -31.4201), 4326),
      'Obelisco, Buenos Aires',
      'Centro, Córdoba',
      NOW() + INTERVAL '1 day' + INTERVAL '9 hours', -- Tomorrow 09:00 AM approx (simplification)
      3,
      15000,
      'ARS'::"Currency",
      false,
      NOW()
    );
  `;

  // Trip 2 (ARG): Buenos Aires (Palermo) -> Mar del Plata
  await prisma.$executeRaw`
    INSERT INTO "Trip" (
      id, driver_id, origin_coords, dest_coords, origin_address, dest_address,
      departure_time, seats_available, price, currency, "women_only", "updatedAt"
    ) VALUES (
      gen_random_uuid(),
      ${driverArg.id},
      ST_SetSRID(ST_MakePoint(-58.4233, -34.5711), 4326),
      ST_SetSRID(ST_MakePoint(-57.5426, -38.0055), 4326),
      'Palermo, Buenos Aires',
      'Mar del Plata',
      NOW() + INTERVAL '1 day' + INTERVAL '10 hours',
      4,
      8000,
      'ARS'::"Currency",
      false,
      NOW()
    );
  `;

  // Trip 3 (ARG - Patagonia): Bariloche -> Neuquén
  await prisma.$executeRaw`
    INSERT INTO "Trip" (
      id, driver_id, origin_coords, dest_coords, origin_address, dest_address,
      departure_time, seats_available, price, currency, "women_only", "updatedAt"
    ) VALUES (
      gen_random_uuid(),
      ${driverPata.id},
      ST_SetSRID(ST_MakePoint(-71.3103, -41.1335), 4326),
      ST_SetSRID(ST_MakePoint(-68.0591, -38.9516), 4326),
      'San Carlos de Bariloche',
      'Neuquén Capital',
      NOW() + INTERVAL '2 days',
      2,
      12000,
      'ARS'::"Currency",
      true, -- Women Only test
      NOW()
    );
  `;

  // Trip 4 (BRA): São Paulo (Av. Paulista) -> Rio de Janeiro (Copacabana)
  await prisma.$executeRaw`
    INSERT INTO "Trip" (
      id, driver_id, origin_coords, dest_coords, origin_address, dest_address,
      departure_time, seats_available, price, currency, "women_only", "updatedAt"
    ) VALUES (
      gen_random_uuid(),
      ${driverBra.id},
      ST_SetSRID(ST_MakePoint(-46.6560, -23.5617), 4326),
      ST_SetSRID(ST_MakePoint(-43.1868, -22.9694), 4326),
      'Av. Paulista, São Paulo',
      'Copacabana, Rio de Janeiro',
      NOW() + INTERVAL '3 days',
      3,
      120,
      'BRL'::"Currency",
      false,
      NOW()
    );
  `;

  // Trip 5 (ARG - Short): Rosario -> Buenos Aires
  await prisma.$executeRaw`
    INSERT INTO "Trip" (
      id, driver_id, origin_coords, dest_coords, origin_address, dest_address,
      departure_time, seats_available, price, currency, "women_only", "updatedAt"
    ) VALUES (
      gen_random_uuid(),
      ${driverArg.id},
      ST_SetSRID(ST_MakePoint(-60.6505, -32.9442), 4326),
      ST_SetSRID(ST_MakePoint(-58.3816, -34.6037), 4326),
      'Monumento a la Bandera, Rosario',
      'Buenos Aires',
      NOW() + INTERVAL '1 day' + INTERVAL '14 hours',
      2,
      5000,
      'ARS'::"Currency",
      false,
      NOW()
    );
  `;

  console.log('Seeding completed 🧉. Trips inserted!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
