"use server"
import { pipe } from "@screenpipe/js";
import { AudioContent } from "@screenpipe/js";


export async function getAudioDataInTimeRange(startTime: any, endTime: any) {
    const results = await pipe.queryScreenpipe({
        contentType: "audio",
        startTime: startTime,
        endTime: endTime,
        limit: 1000
    })

    return results.data
}


export async function getScreenDataInTimeRange(startTime: any, endTime: any) {
    const results = await pipe.queryScreenpipe({
        contentType: "ocr",
        startTime: startTime,
        endTime: endTime,
        limit: 1000
    })

    return results.data
}
