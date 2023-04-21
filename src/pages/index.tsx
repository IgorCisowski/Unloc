import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { BlogPosts } from "@/components/ui/BlogPosts";
import { Layout } from "@/components/ui/Layout";
import { Hero } from "@/components/ui/Hero";
import { HowItWorks } from "@/components/ui/HowItWorks";
import { SetsApart } from "@/components/ui/SetsApart";
import { Faq } from "@/components/ui/Faq";
import { LiquidityLend } from "@/components/ui/LiquidityLend";
import { Member } from "@/components/ui/Member";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <SetsApart />
      <BlogPosts />
      <Member />
      <Faq />
      <LiquidityLend />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <meta name="description" content="UNLOC your NFTs full potential" />
      <meta property="og:title" content="UNLOC" />
      <meta property="og:url" content="https://unloc.xyz" />
      <meta property="og:image" content="/icons/apple-touch-icon.png" />
      <meta property="og:type" content="website" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <title>Unloc Landing Page</title>
    </>
  );
};
