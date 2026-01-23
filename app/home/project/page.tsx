"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { SparklesText } from "@/components/ui/sparkles-text";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title Section */}
        <div className="flex justify-center mb-12">
          <SparklesText className="text-2xl sm:text-3xl md:text-4xl">
            My Project
          </SparklesText>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg lg:text-xl leading-snug">
                Analisis Kanker Beasiswa Dicoding X DBS Foundation
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/project/analisis-kanker2.png"
                  alt="analisis-kanker"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                />
              </div>

              <CardDescription className="text-sm sm:text-base leading-relaxed">
                Menggunakan NextJS untuk front end dan Express untuk backend
                serta Machine Learning untuk analisis kanker.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full min-h-[44px]">
                <Link
                  href="https://projek-analisis-kanker.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kunjungi
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD 2 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg lg:text-xl leading-snug">
                Catalog website briket
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/project/indoexpor.png"
                  alt="briket nusantara"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                />
              </div>

              <CardDescription className="text-sm sm:text-base leading-relaxed">
                Menggunakan Reactjs Vite serta library populer untuk tampilan
                yang modern dan juga interaktif. serta API google map untuk
                menampilkan lokasi perusahaan.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full min-h-[44px]">
                <a
                  href="https://indoexporsolutions.vercel.app/"
                  target="_blank"
                >
                  Kunjungi
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* CARD 3 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg lg:text-xl leading-snug">
                Company Profile
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/project/company-1.png"
                  alt="Project company profile"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                />
              </div>

              <CardDescription className="text-sm sm:text-base leading-relaxed">
                Menggunakan NextJS untuk tampilan yang modern. serta pemahaman
                SSR dan CSR untuk mengoptimalkan website agar tetap stabil dan
                tidak load terus menerus.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button type="button" className="w-full min-h-[44px]">
                <a href="https://company-1-two.vercel.app/" target="_blank">
                  Kunjungi
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD 4 */}
          {/* <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle>Catalog website briket</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="w-full">
              <Image
                src="/project/briquette-nusantara.png"
                alt="analisis-kanker"
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>

            <CardDescription>
              Menggunakan Nextjs serta library populer untuk tampilan yang
              modern dan juga interaktif.
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Button type="button" disabled className="w-full">
              <Link href="">Dalam Pengerjaan</Link>
            </Button>
          </CardFooter>
        </Card> */}
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title Section */}
        <div className="flex justify-center mb-12 text-center">
          <SparklesText className="text-2xl sm:text-3xl md:text-4xl">
            My Certifications
          </SparklesText>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg lg:text-xl leading-snug">
                Debugging Competition PNBIT Bali 2025
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/certifications/PNBIT-bali.png"
                  alt="PNBIT certification"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                />
              </div>

              <CardDescription className="text-sm sm:text-base leading-relaxed">
                Lomba debugging menggunakan bahasa pemrograman Java
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full min-h-[44px]" disabled>
                <Link
                  href="https://drive.google.com/drive/folders/1GU0OchWsCQTqDizQV5rQIpx1eBHLQSQb?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled
                >
                  Kunjungi
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD 2 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg lg:text-xl leading-snug">
                Catalog website briket
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/certifications/DICODING.jpeg"
                  alt="Dicoding certification"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                />
              </div>

              <CardDescription className="text-sm sm:text-base leading-relaxed">
                Beasiswa Dicoding X DBS foundation. mempelajari fullstack dengan
                bahasa pemrograman Javascript. Menyelesaikan project akhir
                menggunakan NextJS, Node.js dan Python untuk machine learning
                analisis kanker.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full min-h-[44px]">
                <a
                  href="https://drive.google.com/drive/folders/1GU0OchWsCQTqDizQV5rQIpx1eBHLQSQb?usp=drive_link"
                  target="_blank"
                >
                  Kunjungi
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* CARD 3 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg lg:text-xl leading-snug">
                Dumet Fullstack
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/certifications/Dumet.png"
                  alt="Dumet"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover max-h-[220px] sm:max-h-[260px] md:max-h-[300px]"
                />
              </div>

              <CardDescription className="text-sm sm:text-base leading-relaxed">
                Mempelajari fullstack dengan bahasa pemrograman JS dan PHP.
                menggunakan ReactJS untuk frontend dan juga bootstrap, serta PHP
                untuk backend.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button type="button" className="w-full min-h-[44px]">
                <a
                  href="https://drive.google.com/drive/folders/1GU0OchWsCQTqDizQV5rQIpx1eBHLQSQb?usp=drive_link"
                  target="_blank"
                >
                  Kunjungi
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD 4 */}
          {/* <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle>Catalog website briket</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="w-full">
              <Image
                src="/project/briquette-nusantara.png"
                alt="analisis-kanker"
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>

            <CardDescription>
              Menggunakan Nextjs serta library populer untuk tampilan yang
              modern dan juga interaktif.
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Button type="button" disabled className="w-full">
              <Link href="">Dalam Pengerjaan</Link>
            </Button>
          </CardFooter>
        </Card> */}
        </div>
      </div>
      <ScrollVelocityContainer className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mt-20 overflow-hidden">
        <ScrollVelocityRow baseVelocity={5} direction={1}>
          Got A Project In Mind? • Let`s Make It Happen • I`m Ready To Help
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1}>
          Need A Website? • Let`s Talk • Your Vision, My Code • Contact Me Now
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </>
  );
};

export default ProjectPage;
