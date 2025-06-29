import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    slug: "anxiety",
    title: "Anxiety & Stress Management",
    description:
      "Learn to manage overwhelming thoughts, reduce daily stress, and feel more in control. Dr. Blake uses mindfulness and evidence-based therapy to help you create calm and clarity.",
    image: "/services/anxiety.jpg",
  },
  {
    slug: "relationship",
    title: "Relationship Counseling",
    description:
      "Improve communication, rebuild trust, and deepen your connections. Whether individual or couples therapy, Dr. Blake helps you navigate conflict with empathy and skill.",
    image: "/services/relationship.jpg",
  },
  {
    slug: "trauma",
    title: "Trauma Recovery",
    description:
      "Begin healing in a safe, supportive space. Using proven trauma-informed techniques, Dr. Blake helps you process difficult experiences and move forward with strength.",
    image: "/services/trauma.jpg",
  },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} | Dr. Blake` : "Service Not Found",
    description: service?.description ?? "Explore our therapy services.",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/#services" className="hover:underline">
            Services
          </Link>{" "}
          / <span className="text-gray-700 font-medium">{service.title}</span>
        </nav>

        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-md mx-auto mb-8">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-blue-900 mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {service.description}
        </p>

        <div className="border-t border-blue-100 pt-10 mb-12 text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Session Fees
          </h2>
          <ul className="text-gray-700 text-base space-y-2 inline-block text-left">
            <li>
              <strong>$200</strong> / individual session
            </li>
            <li>
              <strong>$240</strong> / couples session
            </li>
          </ul>
        </div>

        <Link href="/#services">
          <button className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md cursor-pointer">
            ← Back to Services
          </button>
        </Link>
      </div>
    </section>
  );
}
