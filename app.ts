import {createSpins} from "@flowplayer/spins"

const playlistID = "c30850bc-eeeb-421d-9ed3-158339d0851a"

const spinItemArray = [
    {
        // a mediaID
        url: "38a31588-07a0-49bf-ba55-fa0310e13f15"
    },
    {
        url: "https://cf23f0bd0.lwcdn.com/hls/9eda7730-23e9-4462-9ad4-c53e8004c3e9/playlist.m3u8",
        title: "A title",
        description: "A description",
        poster: "//cf23f0bd0.lwcdn.com/i/v-i-9eda7730-23e9-4462-9ad4-c53e8004c3e9-1.jpg"
    },
    {
        url: "https://stdlwcdn.lwcdn.com/hls/2cd21de6-1586-428b-bf7f-acc3fdcfd697/playlist.m3u8",
        poster: "//stdlwcdn.lwcdn.com/i/v-i-67059b8d-ce1a-457e-9af1-d927ff945826-1.jpg",
        title: "Test - missing mp4 01/09/2025 14:57"
    },
    {
        url: "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8?t=1",
        subtitles: {
            tracks: [
                {
                    src: "https://builds.flowplayer.com/samples/en.vtt",
                    lang: "en",
                    label: "English"
                },
                {
                    src: "https://builds.flowplayer.com/samples/pt.vtt",
                    lang: "pt",
                    label: "Portuguese"
                }
            ]
        }
    }
]

const container = createSpins({
    //replace the playlistID with the spinItemArray in order to test the array
    playlist: playlistID,
    // This will exclude the rest of the available plugins, and will configure the player only with the subtitles plugin.
    plugins: ["subtitles"]
})

document.body.append(container)