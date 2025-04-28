"use client";

import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const key = process.env.NEXT_PUBLIC_SUPABASE || "";
const supabase = createClient("https://dsybzlbnyowihgbhjivu.supabase.co", key);

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
