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
          <SparklesText>My Projects</SparklesText>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8">
          {/* CARD 1 */}
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle>
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
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <CardDescription>
                Menggunakan NextJS untuk front end dan Express untuk backend
                serta Machine Learning untuk analisis kanker.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full">
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
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle>Catalog website briket</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/project/indoexpor.png"
                  alt="briket nusantara"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <CardDescription>
                Menggunakan Reactjs Vite serta library populer untuk tampilan yang
                modern dan juga interaktif. serta API google map untuk menampilkan
                lokasi perusahaan.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full">
               <a href="https://indoexporsolutions.vercel.app/" target="_blank">Kunjungi</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 mt-4">
          {/* CARD 3 */}
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle>Rumpi Chat</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="w-full">
                <Image
                  src="/project/company-1.png"
                  alt="Project company profile"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <CardDescription>
                Menggunakan NextJS untuk tampilan yang modern. serta pemahaman SSR dan CSR untuk mengoptimalkan website agar tetap stabil dan tidak load terus menerus.
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button type="button" className="w-full">
                <a href="https://company-1-two.vercel.app/" target="_blank">Kunjungi</a>
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
      <ScrollVelocityContainer className="text-8xl font-bold md:text-9xl mt-20">
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
