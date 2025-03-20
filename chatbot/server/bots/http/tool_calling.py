from common.config import SERVICE_API_KEYS
from googleapiclient.discovery import build

youtube_api_key = SERVICE_API_KEYS.get("YOUTUBE_API_KEY")

tools = [
    {
        "function_declarations": [
            {
                "name": "get_youtube_links",
                "description": "Get the youtube link for query.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "Query such as any topic to search video for.",
                        },
                    },
                    "required": ["query"],
                },
            }
        ]
    }
]


async def get_youtube_links(function_name, tool_call_id, args, llm, context, result_callback):
    """
    Gets youtube video links based on the user's requested query.

    Parameters:
        arguments: Contains topic details like 'query'.

    Behavior:
        Returns link of the youtube video from the given query.
    """

    query = args["query"]
    if not youtube_api_key:
        return await result_callback(None)

    youtube = build("youtube", "v3", developerKey=youtube_api_key)

    request = youtube.search().list(
        q=query, 
        part="snippet",
        maxResults=1,
        type="video"
    )
    
    response = request.execute()
    
    video_links = []
    for item in response.get("items", []):
        video_id = item["id"]["videoId"]
        video_links.append(f"https://www.youtube.com/watch?v={video_id}")

    response = video_links[0] if video_links else "No video found"
    return await result_callback(response)
