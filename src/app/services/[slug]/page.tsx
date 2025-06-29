import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

const services = [
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

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  return {
    title: service ? `${service.title} | Dr. Blake` : "Service Not Found",
    description: service?.description ?? "Explore our therapy services.",
  };
}

export default async function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="mt-4">{service.description}</p>
        <Image
          src={service.image}
          alt={service.title}
          width={600}
          height={300}
          className="my-6"
        />
        <Link href="/#services">← Back to Services</Link>
      </div>
    </section>
  );
}
