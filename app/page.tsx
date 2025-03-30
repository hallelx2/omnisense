// "use client";

import { getAudioDataInTimeRange, getScreenDataInTimeRange } from "@/lib/actions/get-all-audio-data";

interface Pipe {
  id: string;
  name: string;
  description: string;
}

function isMacOS() {
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
}

export default async function Page() {
    const audioData = await getScreenDataInTimeRange(
      "2024-10-01T00:00:00Z",
      "2025-10-31T23:59:59Z"
    );

    return <div>
        {audioData.map((item) => (
          <div >
            {item.content.app_name}
          </div>
        ))}
    </div>
}
