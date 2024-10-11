"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function LandingPage() {
  const [url, setUrl] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [encodedUrl, setEncodedUrl] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    console.log("URL entered:", url);

    if (url.trim() === "") {
      alert("Please enter a valid URL.");
      return;
    }

    setIsRedirecting(true);
    setEncodedUrl(encodeURIComponent(url));
  }, [url]);

  // useEffect to handle redirection when isRedirecting changes
  useEffect(() => {
    if (isRedirecting && encodedUrl) {
      console.log(`Redirecting to /${encodedUrl}`);
      router.push(`/${encodedUrl}`);
    }
  }, [isRedirecting, encodedUrl, router]);


  return (
    <div className="flex flex-col min-h-screen bg-zinc-800">
      <header className="bg-zinc-800 text-zinc-100 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">AI Chat Assistant</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-zinc-200">
              Welcome to our AI Chat Assistant
            </CardTitle>
            <CardDescription className="text-zinc-200">
              Enter a website URL to start chatting about its content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="url" className="text-sm font-medium text-zinc-200">
                  Website URL
                </label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white"
                disabled={isRedirecting}
              >
                {isRedirecting ? (
                  "Redirecting..."
                ) : (
                  <>
                    Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-zinc-200 text-sm">
            Our AI will analyze the website and answer your questions
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
