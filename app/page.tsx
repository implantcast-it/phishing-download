"use client";

import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  "https://dsybzlbnyowihgbhjivu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzeWJ6bGJueW93aWhnYmhqaXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTM5OTcsImV4cCI6MjA1NzUyOTk5N30.qHNYM64O5LBwtpn8Tnh1S2fCFM4bzrCMKNrMHsll3IE"
);

export default function Home() {
  const router = useRouter();
  return (
    <div className='place-items-center grid w-full h-screen'>
      <Link
        className='block bg-emerald-700 shadow p-3 rounded-md font-medium text-white text-lg'
        href='./meeting.exe'
        onClick={async (e) => {
          e.preventDefault();
          const { error } = await supabase
            .from("download")
            .insert([{ click: true }]);

          if (error) {
            return;
          }

          router.push("/meeting.exe");
        }}
      >
        Download Meeting Software
      </Link>
    </div>
  );
}
