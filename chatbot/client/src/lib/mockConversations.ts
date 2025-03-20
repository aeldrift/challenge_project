import { ConversationModel } from "@/lib/conversations";
import { Message } from "@/lib/messages";

interface MockConversation extends ConversationModel {
  messages: Message[];
}

export const mockConversations: MockConversation[] = [
  {
    conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
    title: "Mock Conversation 82",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:28:04.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 42",
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "8158ecd7-0b3f-439c-bb23-db77a0d44c48",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:20.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 271",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "d725c8b5-15a2-4fe7-bd14-87f65e4d4a23",
        message_number: 2,
        updated_at: "2024-11-27T09:56:20.841974",
      },
      {
        created_at: "2024-11-27T09:56:46.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 859",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "be448723-d975-40b9-bb2a-c0f855ec47ef",
        message_number: 3,
        updated_at: "2024-11-27T09:56:46.841974",
      },
      {
        created_at: "2024-11-27T10:00:32.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 621",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "9d1e9bac-b1d1-420c-824d-28b7a5a47329",
        message_number: 4,
        updated_at: "2024-11-27T10:00:32.841974",
      },
      {
        created_at: "2024-11-27T10:01:32.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_3b043ff4.png",
              },
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "b4f8e460-fdff-4d11-bb0f-0c15dee03540",
        message_number: 5,
        updated_at: "2024-11-27T10:01:32.841974",
      },
      {
        created_at: "2024-11-27T10:05:38.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 469",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "01a41fc0-2b4d-4c36-8281-69f435ab3e2a",
        message_number: 6,
        updated_at: "2024-11-27T10:05:38.841974",
      },
      {
        created_at: "2024-11-27T10:10:08.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_809b3298.png",
              },
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "5f68f3a1-4c7f-4868-945e-beb25f9f3c4f",
        message_number: 7,
        updated_at: "2024-11-27T10:10:08.841974",
      },
      {
        created_at: "2024-11-27T10:11:42.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_d7aaccfa.png",
              },
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "73deeacc-d056-442a-a725-e6c72f49fc57",
        message_number: 8,
        updated_at: "2024-11-27T10:11:42.841974",
      },
      {
        created_at: "2024-11-27T10:14:16.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_08f83138.png",
              },
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "0deb89fa-ec83-46c0-ad73-0ccb0206689b",
        message_number: 9,
        updated_at: "2024-11-27T10:14:16.841974",
      },
      {
        created_at: "2024-11-27T10:14:21.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 971",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "2dae01c2-645f-4dfe-835f-290f2cb96f04",
        message_number: 10,
        updated_at: "2024-11-27T10:14:21.841974",
      },
      {
        created_at: "2024-11-27T10:15:52.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 295",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "d5c22b54-fa30-49d0-94c6-a2b36ca7e07a",
        message_number: 11,
        updated_at: "2024-11-27T10:15:52.841974",
      },
      {
        created_at: "2024-11-27T10:17:56.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 846",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "8d2de83e-6e59-497a-9243-39cb7ec23917",
        message_number: 12,
        updated_at: "2024-11-27T10:17:56.841974",
      },
      {
        created_at: "2024-11-27T10:19:26.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 50",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "fc1a8aae-cf53-4fd6-ae58-a7f9485e303f",
        message_number: 13,
        updated_at: "2024-11-27T10:19:26.841974",
      },
      {
        created_at: "2024-11-27T10:20:33.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 380",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "9d4e6192-2cc8-4d4c-9945-32dfb1831734",
        message_number: 14,
        updated_at: "2024-11-27T10:20:33.841974",
      },
      {
        created_at: "2024-11-27T10:23:05.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 329",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "82782ff2-c089-492e-9d8a-6e1ca72f6199",
        message_number: 15,
        updated_at: "2024-11-27T10:23:05.841974",
      },
      {
        created_at: "2024-11-27T10:23:38.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 618",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "0f95e68e-9b7d-4bce-a7f7-50c8b75b252f",
        message_number: 16,
        updated_at: "2024-11-27T10:23:38.841974",
      },
      {
        created_at: "2024-11-27T10:24:10.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 308",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "b9c272c4-3926-4202-bc4b-69088fbefb66",
        message_number: 17,
        updated_at: "2024-11-27T10:24:10.841974",
      },
      {
        created_at: "2024-11-27T10:28:04.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 872",
            },
          ],
        },
        conversation_id: "06207f42-9309-4645-9b30-131117cc8c96",
        extra_metadata: null,
        message_id: "b3748e83-aec8-4efb-80dc-73f9742ab189",
        message_number: 18,
        updated_at: "2024-11-27T10:28:04.841974",
      },
    ],
  },
  {
    conversation_id: "98329a9a-54e0-4688-b930-1e7858e220e0",
    title: "Mock Conversation 67",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T09:58:55.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 59",
        },
        conversation_id: "98329a9a-54e0-4688-b930-1e7858e220e0",
        extra_metadata: null,
        message_id: "9c89f9fb-e367-4534-b239-58fc89fa1366",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:58:55.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 503",
            },
          ],
        },
        conversation_id: "98329a9a-54e0-4688-b930-1e7858e220e0",
        extra_metadata: null,
        message_id: "55b517c7-8040-48bc-b20f-89b9215a9e3a",
        message_number: 2,
        updated_at: "2024-11-27T09:58:55.841974",
      },
    ],
  },
  {
    conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
    title: "Mock Conversation 64",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:30:47.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 16",
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "f1eaa4c4-8084-443c-977b-7c33d878f6e9",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:25.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_1d9c959a.png",
              },
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "f432f3c8-f035-48ea-85c1-17c4868dab8d",
        message_number: 2,
        updated_at: "2024-11-27T09:56:25.841974",
      },
      {
        created_at: "2024-11-27T10:00:47.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 720",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "94da4345-7d2a-4420-898e-68929ca9d457",
        message_number: 3,
        updated_at: "2024-11-27T10:00:47.841974",
      },
      {
        created_at: "2024-11-27T10:02:12.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 217",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "dd5c9bc7-a7d6-4453-83fb-9bcc04cb7edd",
        message_number: 4,
        updated_at: "2024-11-27T10:02:12.841974",
      },
      {
        created_at: "2024-11-27T10:03:13.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_26f132c7.png",
              },
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "4dce7c96-bd4b-4216-9767-4ad5299b9210",
        message_number: 5,
        updated_at: "2024-11-27T10:03:13.841974",
      },
      {
        created_at: "2024-11-27T10:03:21.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_28967d0e.png",
              },
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "ff07c369-2ee1-4c7d-b299-733a2ad0bc0b",
        message_number: 6,
        updated_at: "2024-11-27T10:03:21.841974",
      },
      {
        created_at: "2024-11-27T10:03:51.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 865",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "14556e30-bc84-4c89-b31f-24007fc259ca",
        message_number: 7,
        updated_at: "2024-11-27T10:03:51.841974",
      },
      {
        created_at: "2024-11-27T10:08:20.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 310",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "74827ef0-460e-443e-a164-f81921d1f8b2",
        message_number: 8,
        updated_at: "2024-11-27T10:08:20.841974",
      },
      {
        created_at: "2024-11-27T10:10:58.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_3192fa16.png",
              },
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "9f191563-54d2-4c6f-b36a-586dae4d4567",
        message_number: 9,
        updated_at: "2024-11-27T10:10:58.841974",
      },
      {
        created_at: "2024-11-27T10:14:00.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 112",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "2861b77c-4c55-42e6-a560-3fb03a1ef498",
        message_number: 10,
        updated_at: "2024-11-27T10:14:00.841974",
      },
      {
        created_at: "2024-11-27T10:14:50.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 554",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "4ffbe230-da7a-476c-843b-e5ab57115f35",
        message_number: 11,
        updated_at: "2024-11-27T10:14:50.841974",
      },
      {
        created_at: "2024-11-27T10:19:27.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 878",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "8bfea947-1f6b-4729-9ad4-5ec815690f8a",
        message_number: 12,
        updated_at: "2024-11-27T10:19:27.841974",
      },
      {
        created_at: "2024-11-27T10:21:43.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 605",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "8766ad02-6fa0-4d78-9af4-77f2844b9f9a",
        message_number: 13,
        updated_at: "2024-11-27T10:21:43.841974",
      },
      {
        created_at: "2024-11-27T10:25:42.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 603",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "737c3ecc-dfde-4f18-b86e-40d34b68eafd",
        message_number: 14,
        updated_at: "2024-11-27T10:25:42.841974",
      },
      {
        created_at: "2024-11-27T10:27:43.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 112",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "f1328c59-d471-4dea-8110-a85ad9450dda",
        message_number: 15,
        updated_at: "2024-11-27T10:27:43.841974",
      },
      {
        created_at: "2024-11-27T10:30:47.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 102",
            },
          ],
        },
        conversation_id: "981a3f92-635c-4d3a-a4cf-2a6ff9caaa64",
        extra_metadata: null,
        message_id: "ff3cb290-f6a3-4d67-9b7b-ea890cd734ba",
        message_number: 16,
        updated_at: "2024-11-27T10:30:47.841974",
      },
    ],
  },
  {
    conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
    title: "Mock Conversation 5",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:39:08.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 55",
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "95d1d7d3-28a9-4656-bf7b-c818f5567187",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:57:24.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 901",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "8c8adbb8-2adf-4e0a-a437-15d03672b004",
        message_number: 2,
        updated_at: "2024-11-27T09:57:24.841974",
      },
      {
        created_at: "2024-11-27T10:00:22.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 151",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "87752de3-03e8-4261-a9f2-5228590a7b1a",
        message_number: 3,
        updated_at: "2024-11-27T10:00:22.841974",
      },
      {
        created_at: "2024-11-27T10:01:28.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 841",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "154c9b84-45ea-4b6f-b751-33e00412fe3f",
        message_number: 4,
        updated_at: "2024-11-27T10:01:28.841974",
      },
      {
        created_at: "2024-11-27T10:05:14.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 241",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "e2809b3f-9e8a-478b-9a57-adb590e4cc09",
        message_number: 5,
        updated_at: "2024-11-27T10:05:14.841974",
      },
      {
        created_at: "2024-11-27T10:08:35.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 524",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "322a1fdc-d85f-4187-88c1-1d612870747a",
        message_number: 6,
        updated_at: "2024-11-27T10:08:35.841974",
      },
      {
        created_at: "2024-11-27T10:09:56.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 234",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "abfb840e-74ce-491b-bb06-7c45841e9667",
        message_number: 7,
        updated_at: "2024-11-27T10:09:56.841974",
      },
      {
        created_at: "2024-11-27T10:13:25.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_8e3926b9.png",
              },
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "640dbd0e-bea4-4098-9e9a-2d396f0be745",
        message_number: 8,
        updated_at: "2024-11-27T10:13:25.841974",
      },
      {
        created_at: "2024-11-27T10:15:47.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 415",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "0892f0b5-9095-430e-8111-eb5ec9841c3e",
        message_number: 9,
        updated_at: "2024-11-27T10:15:47.841974",
      },
      {
        created_at: "2024-11-27T10:19:53.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 238",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "da3773f2-6df8-4b70-8bcd-4bc140a7aa58",
        message_number: 10,
        updated_at: "2024-11-27T10:19:53.841974",
      },
      {
        created_at: "2024-11-27T10:21:02.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_e7c3f050.png",
              },
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "e7afe8d6-dc37-4627-8e99-80b550ba61be",
        message_number: 11,
        updated_at: "2024-11-27T10:21:02.841974",
      },
      {
        created_at: "2024-11-27T10:22:56.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_917ecd03.png",
              },
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "d324af5d-e00e-415b-9cc3-6da6f791378b",
        message_number: 12,
        updated_at: "2024-11-27T10:22:56.841974",
      },
      {
        created_at: "2024-11-27T10:27:42.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 323",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "3f355ddf-3bb8-4f25-8068-620f580d05c9",
        message_number: 13,
        updated_at: "2024-11-27T10:27:42.841974",
      },
      {
        created_at: "2024-11-27T10:32:34.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_b68113a5.png",
              },
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "137ab683-d674-4b6e-af1d-e1d66fa57366",
        message_number: 14,
        updated_at: "2024-11-27T10:32:34.841974",
      },
      {
        created_at: "2024-11-27T10:33:42.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 685",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "100a4077-fef8-4fb4-bfbb-61cd84504fa4",
        message_number: 15,
        updated_at: "2024-11-27T10:33:42.841974",
      },
      {
        created_at: "2024-11-27T10:37:55.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 311",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "68eb5408-3deb-4fe9-a77b-55a6827c1071",
        message_number: 16,
        updated_at: "2024-11-27T10:37:55.841974",
      },
      {
        created_at: "2024-11-27T10:39:08.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 116",
            },
          ],
        },
        conversation_id: "992655f0-f4bd-4bc2-999c-3435a8e7c5e3",
        extra_metadata: null,
        message_id: "c99f8115-be2d-4304-9f3c-074a20e10bdf",
        message_number: 17,
        updated_at: "2024-11-27T10:39:08.841974",
      },
    ],
  },
  {
    conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
    title: "Mock Conversation 15",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:34:37.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 26",
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "2b94019e-abd4-4246-8138-64c9990933b4",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:57:09.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 874",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "810f8842-df98-4bf2-b385-031ea92f5ca2",
        message_number: 2,
        updated_at: "2024-11-27T09:57:09.841974",
      },
      {
        created_at: "2024-11-27T09:58:18.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 313",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "b367760c-75c9-4889-a8f1-63029b6cdebd",
        message_number: 3,
        updated_at: "2024-11-27T09:58:18.841974",
      },
      {
        created_at: "2024-11-27T10:03:15.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 117",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "ee412633-d76a-41a4-864a-e29fda2bf8e1",
        message_number: 4,
        updated_at: "2024-11-27T10:03:15.841974",
      },
      {
        created_at: "2024-11-27T10:07:20.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 499",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "ca270a6e-36c9-4623-8bed-5e3f78988a36",
        message_number: 5,
        updated_at: "2024-11-27T10:07:20.841974",
      },
      {
        created_at: "2024-11-27T10:12:20.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 790",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "ace7c36a-7ed3-4015-a651-0b13f8272f00",
        message_number: 6,
        updated_at: "2024-11-27T10:12:20.841974",
      },
      {
        created_at: "2024-11-27T10:12:52.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_acf29023.png",
              },
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "ba2bcdbf-e29e-4ae2-ba92-65fde88adffc",
        message_number: 7,
        updated_at: "2024-11-27T10:12:52.841974",
      },
      {
        created_at: "2024-11-27T10:14:37.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 293",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "71dcc99f-5273-4de0-8a5b-125c230ba89d",
        message_number: 8,
        updated_at: "2024-11-27T10:14:37.841974",
      },
      {
        created_at: "2024-11-27T10:15:17.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 383",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "357bf31d-fa55-4645-b2ea-1eae69ac2fc3",
        message_number: 9,
        updated_at: "2024-11-27T10:15:17.841974",
      },
      {
        created_at: "2024-11-27T10:18:20.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 401",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "e5f68e57-99c4-45ae-8ed3-b8f43085d814",
        message_number: 10,
        updated_at: "2024-11-27T10:18:20.841974",
      },
      {
        created_at: "2024-11-27T10:22:58.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_0fd7a28c.png",
              },
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "a669a26b-f511-4ac4-af4d-e4baceac381e",
        message_number: 11,
        updated_at: "2024-11-27T10:22:58.841974",
      },
      {
        created_at: "2024-11-27T10:23:32.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 145",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "c40fbe38-3c51-48c2-b633-26ddcc1a0186",
        message_number: 12,
        updated_at: "2024-11-27T10:23:32.841974",
      },
      {
        created_at: "2024-11-27T10:24:42.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 512",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "f462effe-3a15-4a0d-bc46-e5e6eade3103",
        message_number: 13,
        updated_at: "2024-11-27T10:24:42.841974",
      },
      {
        created_at: "2024-11-27T10:28:56.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_944ebad3.png",
              },
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "9f651211-ab1c-4485-b4e1-df359da12da6",
        message_number: 14,
        updated_at: "2024-11-27T10:28:56.841974",
      },
      {
        created_at: "2024-11-27T10:30:31.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 296",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "e431b464-bed0-4002-93aa-6e9415a9aa29",
        message_number: 15,
        updated_at: "2024-11-27T10:30:31.841974",
      },
      {
        created_at: "2024-11-27T10:34:26.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_c0034efd.png",
              },
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "0e2eec1d-6dee-47cb-8dfa-09cf7a45f0e8",
        message_number: 16,
        updated_at: "2024-11-27T10:34:26.841974",
      },
      {
        created_at: "2024-11-27T10:34:37.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 514",
            },
          ],
        },
        conversation_id: "1379db68-ba17-4fac-833f-c8a44961b40f",
        extra_metadata: null,
        message_id: "1189aafd-d489-4a5a-ad1a-b0bc563b9491",
        message_number: 17,
        updated_at: "2024-11-27T10:34:37.841974",
      },
    ],
  },
  {
    conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
    title: "Mock Conversation 92",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:18:37.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 41",
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "d76e8641-27c7-4a19-8f8c-6b29964230cd",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:59:06.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 235",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "88af7f70-8f7e-4457-9095-7e5b1a0143cb",
        message_number: 2,
        updated_at: "2024-11-27T09:59:06.841974",
      },
      {
        created_at: "2024-11-27T10:02:36.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 498",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "14a496b8-2582-4979-bf17-bd10f3d4174d",
        message_number: 3,
        updated_at: "2024-11-27T10:02:36.841974",
      },
      {
        created_at: "2024-11-27T10:03:43.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 737",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "66cab650-2f70-4419-b43e-b9a3f62ef3bf",
        message_number: 4,
        updated_at: "2024-11-27T10:03:43.841974",
      },
      {
        created_at: "2024-11-27T10:06:48.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 593",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "9a49165f-cd27-47c6-88ba-97fb4e6c631c",
        message_number: 5,
        updated_at: "2024-11-27T10:06:48.841974",
      },
      {
        created_at: "2024-11-27T10:11:46.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 102",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "c9c54e53-2f5e-435a-8a3f-de5da972a87d",
        message_number: 6,
        updated_at: "2024-11-27T10:11:46.841974",
      },
      {
        created_at: "2024-11-27T10:14:41.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 811",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "ad92448f-f6f3-4609-8c1e-df576b85cc3e",
        message_number: 7,
        updated_at: "2024-11-27T10:14:41.841974",
      },
      {
        created_at: "2024-11-27T10:16:34.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 183",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "c6609b75-623e-4d30-90b0-dde9a2102c3f",
        message_number: 8,
        updated_at: "2024-11-27T10:16:34.841974",
      },
      {
        created_at: "2024-11-27T10:17:57.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 524",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "888bfe9a-f425-44c0-a8be-89cdc71673aa",
        message_number: 9,
        updated_at: "2024-11-27T10:17:57.841974",
      },
      {
        created_at: "2024-11-27T10:18:37.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 715",
            },
          ],
        },
        conversation_id: "674ee4af-6d6f-4105-97fd-c5e4a6e9790c",
        extra_metadata: null,
        message_id: "4619fa2a-4a75-4296-80f6-0af271be4869",
        message_number: 10,
        updated_at: "2024-11-27T10:18:37.841974",
      },
    ],
  },
  {
    conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
    title: "Mock Conversation 61",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:25:00.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 59",
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "b21399ee-107e-4aad-a901-99ae6ccecf11",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:59:26.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 547",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "eeba4cb9-d0b5-4b0a-b803-b86ac4796e95",
        message_number: 2,
        updated_at: "2024-11-27T09:59:26.841974",
      },
      {
        created_at: "2024-11-27T10:03:15.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 9",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "c322163d-5b8e-4714-b98b-05102216620d",
        message_number: 3,
        updated_at: "2024-11-27T10:03:15.841974",
      },
      {
        created_at: "2024-11-27T10:04:07.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 558",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "265d1e01-6761-4b0e-9bea-dbac38ba4f5e",
        message_number: 4,
        updated_at: "2024-11-27T10:04:07.841974",
      },
      {
        created_at: "2024-11-27T10:06:46.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 857",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "70ee9dc9-d551-4ef4-899f-5c8bb9d1fa64",
        message_number: 5,
        updated_at: "2024-11-27T10:06:46.841974",
      },
      {
        created_at: "2024-11-27T10:09:43.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 612",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "429c2205-ed18-4360-9bcf-92d0bc0a99e9",
        message_number: 6,
        updated_at: "2024-11-27T10:09:43.841974",
      },
      {
        created_at: "2024-11-27T10:13:49.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 340",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "a448b0ce-28b5-4b6d-9eac-960c13655d1d",
        message_number: 7,
        updated_at: "2024-11-27T10:13:49.841974",
      },
      {
        created_at: "2024-11-27T10:18:32.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 393",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "21d91976-85ac-4469-afdb-487907ec7041",
        message_number: 8,
        updated_at: "2024-11-27T10:18:32.841974",
      },
      {
        created_at: "2024-11-27T10:20:45.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_31971de2.png",
              },
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "255dce70-efc4-4e14-aef6-ec2b287f87b5",
        message_number: 9,
        updated_at: "2024-11-27T10:20:45.841974",
      },
      {
        created_at: "2024-11-27T10:24:29.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 271",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "154f3530-f607-4ea3-a689-ed28f5e38ed2",
        message_number: 10,
        updated_at: "2024-11-27T10:24:29.841974",
      },
      {
        created_at: "2024-11-27T10:25:00.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 994",
            },
          ],
        },
        conversation_id: "2d035c50-1882-4d87-a635-e7ec252c0856",
        extra_metadata: null,
        message_id: "86bce2c1-de09-4b5c-bae2-742fb9d7e373",
        message_number: 11,
        updated_at: "2024-11-27T10:25:00.841974",
      },
    ],
  },
  {
    conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
    title: "Mock Conversation 89",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:21:50.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 70",
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "2939db24-b5a5-46d1-bfa3-e256f924830f",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:58:07.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 581",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "8854407f-1bab-42ab-ae13-12455c4130d0",
        message_number: 2,
        updated_at: "2024-11-27T09:58:07.841974",
      },
      {
        created_at: "2024-11-27T09:58:38.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 183",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "0337933f-121b-47f2-b889-f190a9a6dcef",
        message_number: 3,
        updated_at: "2024-11-27T09:58:38.841974",
      },
      {
        created_at: "2024-11-27T10:00:23.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 948",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "3edc5018-6d4f-4561-804b-05c42bd1aff2",
        message_number: 4,
        updated_at: "2024-11-27T10:00:23.841974",
      },
      {
        created_at: "2024-11-27T10:01:18.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 786",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "0f14d782-ac1b-4363-be53-e53ba9c5e35a",
        message_number: 5,
        updated_at: "2024-11-27T10:01:18.841974",
      },
      {
        created_at: "2024-11-27T10:04:03.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_04c485c3.png",
              },
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "3ba9548f-4ad3-41f7-a51a-2b9095e2b8c3",
        message_number: 6,
        updated_at: "2024-11-27T10:04:03.841974",
      },
      {
        created_at: "2024-11-27T10:04:11.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 754",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "ffd8a279-3baa-474e-aee4-5c290c083104",
        message_number: 7,
        updated_at: "2024-11-27T10:04:11.841974",
      },
      {
        created_at: "2024-11-27T10:07:25.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 906",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "9cace7c7-9930-446a-9532-b3fc854f76f7",
        message_number: 8,
        updated_at: "2024-11-27T10:07:25.841974",
      },
      {
        created_at: "2024-11-27T10:09:26.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 887",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "55b63e9f-931c-4a11-bffa-fbbf1744bcf6",
        message_number: 9,
        updated_at: "2024-11-27T10:09:26.841974",
      },
      {
        created_at: "2024-11-27T10:13:46.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 880",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "b59e80f6-afac-4532-99ac-d1ca541ea374",
        message_number: 10,
        updated_at: "2024-11-27T10:13:46.841974",
      },
      {
        created_at: "2024-11-27T10:14:54.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 610",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "b664163c-972b-499a-815f-3537fd2dc990",
        message_number: 11,
        updated_at: "2024-11-27T10:14:54.841974",
      },
      {
        created_at: "2024-11-27T10:18:19.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 589",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "6f04d2c8-4890-46b0-869b-1266a919a8a4",
        message_number: 12,
        updated_at: "2024-11-27T10:18:19.841974",
      },
      {
        created_at: "2024-11-27T10:20:43.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 621",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "ac22e5c0-85ef-4783-a683-b2ed477f7c1c",
        message_number: 13,
        updated_at: "2024-11-27T10:20:43.841974",
      },
      {
        created_at: "2024-11-27T10:21:50.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 365",
            },
          ],
        },
        conversation_id: "a44736ee-0964-47d0-8361-73bc3867319a",
        extra_metadata: null,
        message_id: "c1e59115-7fff-4cee-bcc9-0c80fe00b1f4",
        message_number: 14,
        updated_at: "2024-11-27T10:21:50.841974",
      },
    ],
  },
  {
    conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
    title: "Mock Conversation 66",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:27:56.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 38",
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "a7c917e3-fe4d-410d-818c-0298b2e2553c",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:59:30.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 372",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "9058112a-ad94-4459-9f71-0d2ff490e9ac",
        message_number: 2,
        updated_at: "2024-11-27T09:59:30.841974",
      },
      {
        created_at: "2024-11-27T10:02:52.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_2686ba83.png",
              },
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "f7e301ca-5c3d-43b9-a431-5ca142dbb850",
        message_number: 3,
        updated_at: "2024-11-27T10:02:52.841974",
      },
      {
        created_at: "2024-11-27T10:04:09.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 47",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "4c97a833-b36f-4fd0-b875-699155aa7ce2",
        message_number: 4,
        updated_at: "2024-11-27T10:04:09.841974",
      },
      {
        created_at: "2024-11-27T10:04:16.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 820",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "2b3412b4-ed51-40ec-9f04-a79f1f56226a",
        message_number: 5,
        updated_at: "2024-11-27T10:04:16.841974",
      },
      {
        created_at: "2024-11-27T10:09:04.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 875",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "cba816ce-3176-4fe1-b019-b41551dc6f44",
        message_number: 6,
        updated_at: "2024-11-27T10:09:04.841974",
      },
      {
        created_at: "2024-11-27T10:09:31.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 962",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "4b2ca8a6-57d8-4e59-a7c2-f27fb95a97c0",
        message_number: 7,
        updated_at: "2024-11-27T10:09:31.841974",
      },
      {
        created_at: "2024-11-27T10:11:17.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 365",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "87d232be-e040-4894-9a1d-d2047321c07a",
        message_number: 8,
        updated_at: "2024-11-27T10:11:17.841974",
      },
      {
        created_at: "2024-11-27T10:12:51.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 436",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "dd414d09-0af6-4de4-ace8-75ebfe4dde71",
        message_number: 9,
        updated_at: "2024-11-27T10:12:51.841974",
      },
      {
        created_at: "2024-11-27T10:16:03.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 209",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "a25bcb60-f881-4a1f-9f6d-733cf95d2b04",
        message_number: 10,
        updated_at: "2024-11-27T10:16:03.841974",
      },
      {
        created_at: "2024-11-27T10:18:06.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 323",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "59edebb0-dffe-4c82-b8bd-df3950a3c0eb",
        message_number: 11,
        updated_at: "2024-11-27T10:18:06.841974",
      },
      {
        created_at: "2024-11-27T10:20:52.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 373",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "f1138cea-6da0-467a-9c65-59c530a97234",
        message_number: 12,
        updated_at: "2024-11-27T10:20:52.841974",
      },
      {
        created_at: "2024-11-27T10:24:24.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 717",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "2e92532c-90bf-42ea-b764-04e55bc51eb5",
        message_number: 13,
        updated_at: "2024-11-27T10:24:24.841974",
      },
      {
        created_at: "2024-11-27T10:26:03.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_a5a2d6aa.png",
              },
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "de6cfeea-2a7b-437c-8dd4-c0ed0f8d0418",
        message_number: 14,
        updated_at: "2024-11-27T10:26:03.841974",
      },
      {
        created_at: "2024-11-27T10:27:56.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 618",
            },
          ],
        },
        conversation_id: "0ff9fedb-3d57-4dbc-805e-99d18e859103",
        extra_metadata: null,
        message_id: "9cf699a0-2229-4ae2-8e4e-3afc167494bf",
        message_number: 15,
        updated_at: "2024-11-27T10:27:56.841974",
      },
    ],
  },
  {
    conversation_id: "fb20065d-aaf8-4d9e-a5e0-08d5b135dc54",
    title: "Mock Conversation 17",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T09:55:41.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 81",
        },
        conversation_id: "fb20065d-aaf8-4d9e-a5e0-08d5b135dc54",
        extra_metadata: null,
        message_id: "950b8256-96ac-4e35-8a23-713d4ace9cd0",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:55:41.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 926",
            },
          ],
        },
        conversation_id: "fb20065d-aaf8-4d9e-a5e0-08d5b135dc54",
        extra_metadata: null,
        message_id: "9160af2d-b6c7-42b3-8495-1ddde3b6fef2",
        message_number: 2,
        updated_at: "2024-11-27T09:55:41.841974",
      },
    ],
  },
  {
    conversation_id: "45e5f2de-53a9-4a98-b510-c9af35682f5d",
    title: "Mock Conversation 77",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:02:12.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 29",
        },
        conversation_id: "45e5f2de-53a9-4a98-b510-c9af35682f5d",
        extra_metadata: null,
        message_id: "cf188190-071c-4feb-b76d-c5946a546ce3",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:59:01.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 775",
            },
          ],
        },
        conversation_id: "45e5f2de-53a9-4a98-b510-c9af35682f5d",
        extra_metadata: null,
        message_id: "35ef5c78-658b-4bd1-aa22-2f02ddc00e35",
        message_number: 2,
        updated_at: "2024-11-27T09:59:01.841974",
      },
      {
        created_at: "2024-11-27T10:00:24.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 700",
            },
          ],
        },
        conversation_id: "45e5f2de-53a9-4a98-b510-c9af35682f5d",
        extra_metadata: null,
        message_id: "66c8b542-8876-404a-bc4f-fdcde63e18ac",
        message_number: 3,
        updated_at: "2024-11-27T10:00:24.841974",
      },
      {
        created_at: "2024-11-27T10:00:37.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 96",
            },
          ],
        },
        conversation_id: "45e5f2de-53a9-4a98-b510-c9af35682f5d",
        extra_metadata: null,
        message_id: "20e672ae-1745-4121-b1e1-62c4a1919cf5",
        message_number: 4,
        updated_at: "2024-11-27T10:00:37.841974",
      },
      {
        created_at: "2024-11-27T10:02:12.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 293",
            },
          ],
        },
        conversation_id: "45e5f2de-53a9-4a98-b510-c9af35682f5d",
        extra_metadata: null,
        message_id: "9949bac9-2d16-4393-9f6f-4ed8f25eeec6",
        message_number: 5,
        updated_at: "2024-11-27T10:02:12.841974",
      },
    ],
  },
  {
    conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
    title: "Mock Conversation 40",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:42:09.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 32",
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "e8b592b4-d86e-4557-817a-279e9f7cd9da",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:58:40.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_20857e20.png",
              },
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "160f190d-782d-46cf-9e87-b27dfdb1a9f2",
        message_number: 2,
        updated_at: "2024-11-27T09:58:40.841974",
      },
      {
        created_at: "2024-11-27T09:58:50.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 633",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "577c8fca-68e4-4e96-99c2-3e901f044a6d",
        message_number: 3,
        updated_at: "2024-11-27T09:58:50.841974",
      },
      {
        created_at: "2024-11-27T10:03:39.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 561",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "64239220-486e-4f19-9f62-c3030f4ff0b6",
        message_number: 4,
        updated_at: "2024-11-27T10:03:39.841974",
      },
      {
        created_at: "2024-11-27T10:04:31.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 172",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "15a8e733-1d8f-436c-a5af-af75dbd7b0be",
        message_number: 5,
        updated_at: "2024-11-27T10:04:31.841974",
      },
      {
        created_at: "2024-11-27T10:05:24.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 559",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "a901a36e-32a2-419f-9e43-ad2823b334b4",
        message_number: 6,
        updated_at: "2024-11-27T10:05:24.841974",
      },
      {
        created_at: "2024-11-27T10:06:15.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 947",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "e8c0ccda-ab37-411f-b390-cbbac4213fd7",
        message_number: 7,
        updated_at: "2024-11-27T10:06:15.841974",
      },
      {
        created_at: "2024-11-27T10:10:25.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 709",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "2526c7f0-7cdf-4038-a9f4-6ffb6075c3a2",
        message_number: 8,
        updated_at: "2024-11-27T10:10:25.841974",
      },
      {
        created_at: "2024-11-27T10:11:09.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 391",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "8b7030de-b896-4c91-bdc0-cda0a6e1471c",
        message_number: 9,
        updated_at: "2024-11-27T10:11:09.841974",
      },
      {
        created_at: "2024-11-27T10:15:32.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 409",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "a934133f-1a7a-4758-9dbe-5f1592d7b37b",
        message_number: 10,
        updated_at: "2024-11-27T10:15:32.841974",
      },
      {
        created_at: "2024-11-27T10:18:53.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 687",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "e1e151f6-b64a-4d8b-bba2-6cafe0f5b821",
        message_number: 11,
        updated_at: "2024-11-27T10:18:53.841974",
      },
      {
        created_at: "2024-11-27T10:22:42.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 292",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "41c25f9a-d822-4cde-b251-47e110e56b9e",
        message_number: 12,
        updated_at: "2024-11-27T10:22:42.841974",
      },
      {
        created_at: "2024-11-27T10:25:33.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_da1ed348.png",
              },
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "b93b1fcb-2aa7-4457-ba72-fb99a61694ff",
        message_number: 13,
        updated_at: "2024-11-27T10:25:33.841974",
      },
      {
        created_at: "2024-11-27T10:27:02.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 298",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "dc1c0aab-2b95-4d29-b442-3291df0ddcaf",
        message_number: 14,
        updated_at: "2024-11-27T10:27:02.841974",
      },
      {
        created_at: "2024-11-27T10:31:36.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 709",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "812fe59d-2c03-4b79-b283-ef84e38fed7f",
        message_number: 15,
        updated_at: "2024-11-27T10:31:36.841974",
      },
      {
        created_at: "2024-11-27T10:31:59.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 593",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "013aea73-d54f-42ed-99b0-8b027f1e2257",
        message_number: 16,
        updated_at: "2024-11-27T10:31:59.841974",
      },
      {
        created_at: "2024-11-27T10:35:12.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_a7dfe9e1.png",
              },
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "10c4b736-0e18-4c5d-9bce-597be80925bf",
        message_number: 17,
        updated_at: "2024-11-27T10:35:12.841974",
      },
      {
        created_at: "2024-11-27T10:39:54.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 124",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "6d58da2b-9041-43b8-8378-30acec401e3e",
        message_number: 18,
        updated_at: "2024-11-27T10:39:54.841974",
      },
      {
        created_at: "2024-11-27T10:42:09.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 731",
            },
          ],
        },
        conversation_id: "04937567-de14-4f3d-ad1a-75d44803ff40",
        extra_metadata: null,
        message_id: "328512d1-0722-4e24-a962-3f8c603b8364",
        message_number: 19,
        updated_at: "2024-11-27T10:42:09.841974",
      },
    ],
  },
  {
    conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
    title: "Mock Conversation 35",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:39:21.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 23",
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "0eca62d1-4ff2-478f-b8d1-7fea39b028f0",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:57:06.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 662",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "0c7bb244-be34-4d69-9d3f-516828473021",
        message_number: 2,
        updated_at: "2024-11-27T09:57:06.841974",
      },
      {
        created_at: "2024-11-27T10:01:52.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_867a1208.png",
              },
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "77e2959f-b845-4646-bc9a-ed0fb2704cb1",
        message_number: 3,
        updated_at: "2024-11-27T10:01:52.841974",
      },
      {
        created_at: "2024-11-27T10:02:02.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 448",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "92f8cbbf-e95f-4e10-b579-8dba440451af",
        message_number: 4,
        updated_at: "2024-11-27T10:02:02.841974",
      },
      {
        created_at: "2024-11-27T10:02:45.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 70",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "3ac680d6-57d8-41ff-bdff-5ec100601c6d",
        message_number: 5,
        updated_at: "2024-11-27T10:02:45.841974",
      },
      {
        created_at: "2024-11-27T10:04:17.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 232",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "7dd0f540-99bb-42e6-9701-c0c11a3d297d",
        message_number: 6,
        updated_at: "2024-11-27T10:04:17.841974",
      },
      {
        created_at: "2024-11-27T10:07:40.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 140",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "efb38485-120d-4a34-9695-63e9e940a4b3",
        message_number: 7,
        updated_at: "2024-11-27T10:07:40.841974",
      },
      {
        created_at: "2024-11-27T10:10:51.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 228",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "6ad82a83-5e83-4b6b-91a8-dc56cd4535a6",
        message_number: 8,
        updated_at: "2024-11-27T10:10:51.841974",
      },
      {
        created_at: "2024-11-27T10:14:26.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 296",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "ff690b27-61a6-4b94-8fde-e7d3bc83acee",
        message_number: 9,
        updated_at: "2024-11-27T10:14:26.841974",
      },
      {
        created_at: "2024-11-27T10:15:44.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 52",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "cc5c80fd-241a-48cc-8594-96dd68bd57ed",
        message_number: 10,
        updated_at: "2024-11-27T10:15:44.841974",
      },
      {
        created_at: "2024-11-27T10:17:50.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 813",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "fc61c789-a676-4aff-8c7c-5fefb518ccf3",
        message_number: 11,
        updated_at: "2024-11-27T10:17:50.841974",
      },
      {
        created_at: "2024-11-27T10:19:00.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_fbfdaaef.png",
              },
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "5edbe4dc-72cb-4521-87bd-f0801614e88e",
        message_number: 12,
        updated_at: "2024-11-27T10:19:00.841974",
      },
      {
        created_at: "2024-11-27T10:23:27.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 329",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "2e416a97-7587-4640-b411-ac0b9fa2c6e2",
        message_number: 13,
        updated_at: "2024-11-27T10:23:27.841974",
      },
      {
        created_at: "2024-11-27T10:26:04.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_3e5709a8.png",
              },
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "715224f9-77f5-48aa-accb-b8ee59c418c9",
        message_number: 14,
        updated_at: "2024-11-27T10:26:04.841974",
      },
      {
        created_at: "2024-11-27T10:26:04.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 842",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "3bfd686f-d461-499a-8458-5949de1dd347",
        message_number: 15,
        updated_at: "2024-11-27T10:26:04.841974",
      },
      {
        created_at: "2024-11-27T10:28:08.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_54b821bf.png",
              },
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "c17ecdbe-83fc-48d3-983a-30b36a0f0c3f",
        message_number: 16,
        updated_at: "2024-11-27T10:28:08.841974",
      },
      {
        created_at: "2024-11-27T10:33:02.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 966",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "6888445a-48db-45f4-b593-addb03114dcf",
        message_number: 17,
        updated_at: "2024-11-27T10:33:02.841974",
      },
      {
        created_at: "2024-11-27T10:34:39.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 543",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "66c5ed3c-fb1d-4de3-828d-3b714b9d9cdb",
        message_number: 18,
        updated_at: "2024-11-27T10:34:39.841974",
      },
      {
        created_at: "2024-11-27T10:39:21.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 955",
            },
          ],
        },
        conversation_id: "2daf1cca-193c-4512-b2ba-c4741df42e5e",
        extra_metadata: null,
        message_id: "2b5e7f2c-206a-4bc1-b99a-717e6cce92d5",
        message_number: 19,
        updated_at: "2024-11-27T10:39:21.841974",
      },
    ],
  },
  {
    conversation_id: "05547f7c-672c-4c02-9098-936165c01e4b",
    title: "Mock Conversation 86",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T09:58:46.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 76",
        },
        conversation_id: "05547f7c-672c-4c02-9098-936165c01e4b",
        extra_metadata: null,
        message_id: "49d3ed5d-e676-4a06-b1c6-a5a996f3ce0f",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:52.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 665",
            },
          ],
        },
        conversation_id: "05547f7c-672c-4c02-9098-936165c01e4b",
        extra_metadata: null,
        message_id: "8f3184e2-dc45-4f0f-8673-57142632f286",
        message_number: 2,
        updated_at: "2024-11-27T09:56:52.841974",
      },
      {
        created_at: "2024-11-27T09:58:46.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 243",
            },
          ],
        },
        conversation_id: "05547f7c-672c-4c02-9098-936165c01e4b",
        extra_metadata: null,
        message_id: "4c859fe7-6525-4d2c-9bae-83661493e942",
        message_number: 3,
        updated_at: "2024-11-27T09:58:46.841974",
      },
    ],
  },
  {
    conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
    title: "Mock Conversation 5",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:08:05.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 65",
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "d99ef29c-6d92-4b3a-a9da-814a4996294d",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:55:24.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_ad178526.png",
              },
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "a26389cc-19e0-4a78-82bf-693b14b41628",
        message_number: 2,
        updated_at: "2024-11-27T09:55:24.841974",
      },
      {
        created_at: "2024-11-27T09:58:33.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 110",
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "a72aae1a-9c4b-450b-a5c0-afee19c5970c",
        message_number: 3,
        updated_at: "2024-11-27T09:58:33.841974",
      },
      {
        created_at: "2024-11-27T10:00:36.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 583",
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "a4d49f1d-d6ed-4b12-b021-391a178285e4",
        message_number: 4,
        updated_at: "2024-11-27T10:00:36.841974",
      },
      {
        created_at: "2024-11-27T10:04:25.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 542",
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "3c069d92-6926-4778-a043-cf5ed1201c89",
        message_number: 5,
        updated_at: "2024-11-27T10:04:25.841974",
      },
      {
        created_at: "2024-11-27T10:06:10.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 986",
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "3f3754db-aab2-47e5-9ca5-1b48ab5cc656",
        message_number: 6,
        updated_at: "2024-11-27T10:06:10.841974",
      },
      {
        created_at: "2024-11-27T10:06:59.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 685",
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "1184156b-f075-4731-838d-08b075e95705",
        message_number: 7,
        updated_at: "2024-11-27T10:06:59.841974",
      },
      {
        created_at: "2024-11-27T10:08:05.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_3479cbf5.png",
              },
            },
          ],
        },
        conversation_id: "d1bcb117-53c9-44cc-a57a-203bf709d492",
        extra_metadata: null,
        message_id: "6d96d6d6-9aee-4174-a600-d492e047ac90",
        message_number: 8,
        updated_at: "2024-11-27T10:08:05.841974",
      },
    ],
  },
  {
    conversation_id: "438d728c-4094-4098-9405-156ad563442f",
    title: "Mock Conversation 8",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T09:54:56.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 67",
        },
        conversation_id: "438d728c-4094-4098-9405-156ad563442f",
        extra_metadata: null,
        message_id: "1a1f3b55-61ae-4538-a8a8-6929d3847c02",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
    ],
  },
  {
    conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
    title: "Mock Conversation 77",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:34:13.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 19",
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "853566e8-fa4e-47b5-a8e1-b9bf7066005b",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:08.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 981",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "a13b8f65-760d-435c-ba0c-8e07f64f7199",
        message_number: 2,
        updated_at: "2024-11-27T09:56:08.841974",
      },
      {
        created_at: "2024-11-27T09:57:03.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 329",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "74cfd349-b774-4beb-af1c-1625636ce814",
        message_number: 3,
        updated_at: "2024-11-27T09:57:03.841974",
      },
      {
        created_at: "2024-11-27T10:01:35.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 672",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "65ae3661-a4ef-4dee-9d5d-f36470458a1b",
        message_number: 4,
        updated_at: "2024-11-27T10:01:35.841974",
      },
      {
        created_at: "2024-11-27T10:02:19.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 370",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "13ddd718-fc7c-4c93-a97f-957120eb2887",
        message_number: 5,
        updated_at: "2024-11-27T10:02:19.841974",
      },
      {
        created_at: "2024-11-27T10:04:14.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 939",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "f1846939-6dea-4499-b946-bc92a624a9b7",
        message_number: 6,
        updated_at: "2024-11-27T10:04:14.841974",
      },
      {
        created_at: "2024-11-27T10:07:52.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 667",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "2108ec30-877e-4b04-bf8e-7e6e09a5c7e5",
        message_number: 7,
        updated_at: "2024-11-27T10:07:52.841974",
      },
      {
        created_at: "2024-11-27T10:10:23.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 262",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "2f9e4272-383b-4b7d-85b8-c4a7c3d3b8b7",
        message_number: 8,
        updated_at: "2024-11-27T10:10:23.841974",
      },
      {
        created_at: "2024-11-27T10:11:49.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 861",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "280629c2-c33a-4dbe-ac43-37e44f67fc11",
        message_number: 9,
        updated_at: "2024-11-27T10:11:49.841974",
      },
      {
        created_at: "2024-11-27T10:16:15.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 785",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "613ed3e3-325b-435f-a3ac-fb042ba36dd8",
        message_number: 10,
        updated_at: "2024-11-27T10:16:15.841974",
      },
      {
        created_at: "2024-11-27T10:20:28.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 454",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "9d49949e-8b4c-4b00-b7a1-f46a03763d7d",
        message_number: 11,
        updated_at: "2024-11-27T10:20:28.841974",
      },
      {
        created_at: "2024-11-27T10:24:00.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_185e72fa.png",
              },
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "2b2e69a0-6bdf-4f05-83b5-a38024d017d4",
        message_number: 12,
        updated_at: "2024-11-27T10:24:00.841974",
      },
      {
        created_at: "2024-11-27T10:25:38.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 38",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "620a927f-aede-4a37-a49c-ff1d3c540c2c",
        message_number: 13,
        updated_at: "2024-11-27T10:25:38.841974",
      },
      {
        created_at: "2024-11-27T10:26:46.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 418",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "7abab7e5-a76b-4ff3-ba83-425c762a8158",
        message_number: 14,
        updated_at: "2024-11-27T10:26:46.841974",
      },
      {
        created_at: "2024-11-27T10:28:10.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 544",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "986aadce-1416-42e3-acba-21e6802fd27b",
        message_number: 15,
        updated_at: "2024-11-27T10:28:10.841974",
      },
      {
        created_at: "2024-11-27T10:31:50.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 196",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "d21f3c04-1876-4341-9c49-9f1f7b9b298f",
        message_number: 16,
        updated_at: "2024-11-27T10:31:50.841974",
      },
      {
        created_at: "2024-11-27T10:32:40.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 485",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "e95373c0-9dbd-4f33-afdf-4fce05a65054",
        message_number: 17,
        updated_at: "2024-11-27T10:32:40.841974",
      },
      {
        created_at: "2024-11-27T10:34:13.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 185",
            },
          ],
        },
        conversation_id: "ad7b4c97-b0ea-4e84-8c29-abcb67fe364a",
        extra_metadata: null,
        message_id: "7989dd3d-ef78-440c-9742-2ec29673721b",
        message_number: 18,
        updated_at: "2024-11-27T10:34:13.841974",
      },
    ],
  },
  {
    conversation_id: "994d4b23-7385-40de-95ed-710a27f6d97e",
    title: "Mock Conversation 73",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:00:31.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 33",
        },
        conversation_id: "994d4b23-7385-40de-95ed-710a27f6d97e",
        extra_metadata: null,
        message_id: "81b37579-c3e6-4b8a-892b-6bc7ae369354",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:32.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 762",
            },
          ],
        },
        conversation_id: "994d4b23-7385-40de-95ed-710a27f6d97e",
        extra_metadata: null,
        message_id: "15b576b1-6925-4841-8b77-7473a8b46b68",
        message_number: 2,
        updated_at: "2024-11-27T09:56:32.841974",
      },
      {
        created_at: "2024-11-27T10:00:31.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 62",
            },
          ],
        },
        conversation_id: "994d4b23-7385-40de-95ed-710a27f6d97e",
        extra_metadata: null,
        message_id: "69ddd8c9-d7c8-409f-b997-d0530f97e37f",
        message_number: 3,
        updated_at: "2024-11-27T10:00:31.841974",
      },
    ],
  },
  {
    conversation_id: "f1cb7cae-443c-4400-ad05-f304035953fd",
    title: "Mock Conversation 29",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:02:47.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 20",
        },
        conversation_id: "f1cb7cae-443c-4400-ad05-f304035953fd",
        extra_metadata: null,
        message_id: "452a6f6b-09f4-4b19-8e27-7ccec4f6c493",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:57:39.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 380",
            },
          ],
        },
        conversation_id: "f1cb7cae-443c-4400-ad05-f304035953fd",
        extra_metadata: null,
        message_id: "1611becf-970a-4bcc-ac04-1cd692060899",
        message_number: 2,
        updated_at: "2024-11-27T09:57:39.841974",
      },
      {
        created_at: "2024-11-27T10:01:53.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_c0d2d228.png",
              },
            },
          ],
        },
        conversation_id: "f1cb7cae-443c-4400-ad05-f304035953fd",
        extra_metadata: null,
        message_id: "fb41bc9a-57ca-47d7-a3f0-03a341e96503",
        message_number: 3,
        updated_at: "2024-11-27T10:01:53.841974",
      },
      {
        created_at: "2024-11-27T10:02:47.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 278",
            },
          ],
        },
        conversation_id: "f1cb7cae-443c-4400-ad05-f304035953fd",
        extra_metadata: null,
        message_id: "45a61c24-e707-4d6d-9e2c-be3332520d4a",
        message_number: 4,
        updated_at: "2024-11-27T10:02:47.841974",
      },
    ],
  },
  {
    conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
    title: "Mock Conversation 17",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:25:28.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 51",
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "b5549daa-fe1b-47f8-8e9f-5d975062ac0e",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:58:38.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_4ce124b3.png",
              },
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "8b0943b9-076a-4476-93d6-992b8958ef41",
        message_number: 2,
        updated_at: "2024-11-27T09:58:38.841974",
      },
      {
        created_at: "2024-11-27T10:01:08.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 19",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "86168a8e-37f4-4a77-9328-a6a99c21b7a9",
        message_number: 3,
        updated_at: "2024-11-27T10:01:08.841974",
      },
      {
        created_at: "2024-11-27T10:04:02.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 473",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "6dd8a175-ba4c-42b5-a83c-2f6be9dee4ed",
        message_number: 4,
        updated_at: "2024-11-27T10:04:02.841974",
      },
      {
        created_at: "2024-11-27T10:08:51.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_586ef0d7.png",
              },
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "95145df5-7164-4891-8cea-e7517013cb46",
        message_number: 5,
        updated_at: "2024-11-27T10:08:51.841974",
      },
      {
        created_at: "2024-11-27T10:12:39.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 752",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "9b4087ad-597e-4081-9c32-232eb24f99f5",
        message_number: 6,
        updated_at: "2024-11-27T10:12:39.841974",
      },
      {
        created_at: "2024-11-27T10:12:52.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 940",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "18531eae-2e8e-47b8-ae15-5b654e743c19",
        message_number: 7,
        updated_at: "2024-11-27T10:12:52.841974",
      },
      {
        created_at: "2024-11-27T10:14:01.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 621",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "d98e5e60-3fb5-4700-8a5d-ca9529f3dbdb",
        message_number: 8,
        updated_at: "2024-11-27T10:14:01.841974",
      },
      {
        created_at: "2024-11-27T10:15:40.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 861",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "c84131c9-3ea2-4b38-bdb9-224f53428446",
        message_number: 9,
        updated_at: "2024-11-27T10:15:40.841974",
      },
      {
        created_at: "2024-11-27T10:18:32.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 845",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "d6befe2c-d86e-4927-93fc-86e13d5ee525",
        message_number: 10,
        updated_at: "2024-11-27T10:18:32.841974",
      },
      {
        created_at: "2024-11-27T10:23:19.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 650",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "4499b9f2-093e-467b-9dc1-65157a4be9da",
        message_number: 11,
        updated_at: "2024-11-27T10:23:19.841974",
      },
      {
        created_at: "2024-11-27T10:25:28.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 837",
            },
          ],
        },
        conversation_id: "15274a32-e5f7-4e40-b583-82c0df0150b2",
        extra_metadata: null,
        message_id: "43cf7529-5fdc-4abb-9ee0-6c901544eea8",
        message_number: 12,
        updated_at: "2024-11-27T10:25:28.841974",
      },
    ],
  },
  {
    conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
    title: "Mock Conversation 91",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:21:25.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 35",
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "3465eb67-5021-4ecd-8ddb-21dd0fea11e7",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:57.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_dcd1532a.png",
              },
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "752c1865-7f03-4cb7-b777-ee14f865f6f9",
        message_number: 2,
        updated_at: "2024-11-27T09:56:57.841974",
      },
      {
        created_at: "2024-11-27T09:59:20.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 134",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "d0a6d54a-0540-4f62-a961-12985dfa97c6",
        message_number: 3,
        updated_at: "2024-11-27T09:59:20.841974",
      },
      {
        created_at: "2024-11-27T10:03:26.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 458",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "4e8600f8-4a32-4535-abf0-6bd3734f5e23",
        message_number: 4,
        updated_at: "2024-11-27T10:03:26.841974",
      },
      {
        created_at: "2024-11-27T10:08:26.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 275",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "e7c43142-c015-4832-99f9-a55529c0b043",
        message_number: 5,
        updated_at: "2024-11-27T10:08:26.841974",
      },
      {
        created_at: "2024-11-27T10:09:47.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 75",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "67274c6c-d2ff-4e63-ae69-2dd72dee5682",
        message_number: 6,
        updated_at: "2024-11-27T10:09:47.841974",
      },
      {
        created_at: "2024-11-27T10:13:45.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 855",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "ac0f4f14-c466-41ad-af7a-1b80e2e5fe6a",
        message_number: 7,
        updated_at: "2024-11-27T10:13:45.841974",
      },
      {
        created_at: "2024-11-27T10:14:24.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 605",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "534ee94c-080b-4ea5-9f08-fbf839e3cf5c",
        message_number: 8,
        updated_at: "2024-11-27T10:14:24.841974",
      },
      {
        created_at: "2024-11-27T10:17:42.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 387",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "6a0c902b-da02-4589-a581-b8b3b894a2df",
        message_number: 9,
        updated_at: "2024-11-27T10:17:42.841974",
      },
      {
        created_at: "2024-11-27T10:20:33.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_e7b0f0b6.png",
              },
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "bed31d46-98bb-4401-ba84-86eea762e80a",
        message_number: 10,
        updated_at: "2024-11-27T10:20:33.841974",
      },
      {
        created_at: "2024-11-27T10:21:25.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 518",
            },
          ],
        },
        conversation_id: "4f2c2079-182d-4c5e-93ab-9eafd5ee34cc",
        extra_metadata: null,
        message_id: "07c8e4f6-c197-4c05-b968-279d56f54451",
        message_number: 11,
        updated_at: "2024-11-27T10:21:25.841974",
      },
    ],
  },
  {
    conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
    title: "Mock Conversation 18",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:29:33.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 51",
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "3d5b5f5f-4799-4bcb-b8bd-dd70a58328e7",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:55:34.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 229",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "6b270624-257e-40a7-ad65-2b64802245fe",
        message_number: 2,
        updated_at: "2024-11-27T09:55:34.841974",
      },
      {
        created_at: "2024-11-27T09:59:37.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 490",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "972e0bac-d124-411e-90b9-4e0e3c44015f",
        message_number: 3,
        updated_at: "2024-11-27T09:59:37.841974",
      },
      {
        created_at: "2024-11-27T10:00:47.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 176",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "27e57617-f9e0-4c17-a357-31424e7086a5",
        message_number: 4,
        updated_at: "2024-11-27T10:00:47.841974",
      },
      {
        created_at: "2024-11-27T10:05:35.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 23",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "d33ea1aa-07c1-4fef-8a07-fed576de20c9",
        message_number: 5,
        updated_at: "2024-11-27T10:05:35.841974",
      },
      {
        created_at: "2024-11-27T10:07:59.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 754",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "a6a88fe1-82c5-496b-a2c7-24fd3a39b342",
        message_number: 6,
        updated_at: "2024-11-27T10:07:59.841974",
      },
      {
        created_at: "2024-11-27T10:11:55.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 728",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "1f7d3007-e846-4cab-a09c-e8774d36abba",
        message_number: 7,
        updated_at: "2024-11-27T10:11:55.841974",
      },
      {
        created_at: "2024-11-27T10:12:58.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 2",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "4cadad63-d520-49b2-af7b-460176dd1a43",
        message_number: 8,
        updated_at: "2024-11-27T10:12:58.841974",
      },
      {
        created_at: "2024-11-27T10:13:14.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_69a0a5ae.png",
              },
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "bd5e72e1-74f6-44f0-b93d-a39d89020bf8",
        message_number: 9,
        updated_at: "2024-11-27T10:13:14.841974",
      },
      {
        created_at: "2024-11-27T10:14:03.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 593",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "f67e2541-d701-4c0f-bce6-e617e410224b",
        message_number: 10,
        updated_at: "2024-11-27T10:14:03.841974",
      },
      {
        created_at: "2024-11-27T10:14:03.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 37",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "ff6bea7a-d5da-4d3f-815d-850c72967f17",
        message_number: 11,
        updated_at: "2024-11-27T10:14:03.841974",
      },
      {
        created_at: "2024-11-27T10:17:59.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 649",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "322c0f32-fee3-4c30-859e-2364cb5ecc6a",
        message_number: 12,
        updated_at: "2024-11-27T10:17:59.841974",
      },
      {
        created_at: "2024-11-27T10:19:23.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 89",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "9d094a61-c569-4e56-93db-0a022fdf395f",
        message_number: 13,
        updated_at: "2024-11-27T10:19:23.841974",
      },
      {
        created_at: "2024-11-27T10:21:53.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 779",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "19e03b7b-09d8-4e39-a8dd-e5398ba824f7",
        message_number: 14,
        updated_at: "2024-11-27T10:21:53.841974",
      },
      {
        created_at: "2024-11-27T10:22:32.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_c824705e.png",
              },
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "6e12a618-1a3d-44f3-96a6-dbe6cd75380a",
        message_number: 15,
        updated_at: "2024-11-27T10:22:32.841974",
      },
      {
        created_at: "2024-11-27T10:22:34.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 500",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "7bd30c0a-f292-40e6-b1be-5906421a72e9",
        message_number: 16,
        updated_at: "2024-11-27T10:22:34.841974",
      },
      {
        created_at: "2024-11-27T10:26:03.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 460",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "b5282f16-e309-447d-8664-fd2fa23894b2",
        message_number: 17,
        updated_at: "2024-11-27T10:26:03.841974",
      },
      {
        created_at: "2024-11-27T10:29:33.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 996",
            },
          ],
        },
        conversation_id: "11c90935-b9df-4b36-87a4-c112a40d4996",
        extra_metadata: null,
        message_id: "b69d5235-cab1-484c-a001-ab1a6d5e791c",
        message_number: 18,
        updated_at: "2024-11-27T10:29:33.841974",
      },
    ],
  },
  {
    conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
    title: "Mock Conversation 15",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T10:18:47.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 47",
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "6bdd267d-59ef-4343-960f-06ff1a688fcd",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:59:29.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 425",
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "ce08192b-d651-4334-9cef-cc911508bbb2",
        message_number: 2,
        updated_at: "2024-11-27T09:59:29.841974",
      },
      {
        created_at: "2024-11-27T10:04:27.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_1766b161.png",
              },
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "a844eee8-9c77-4cf6-87e6-a4d817afd9dc",
        message_number: 3,
        updated_at: "2024-11-27T10:04:27.841974",
      },
      {
        created_at: "2024-11-27T10:05:23.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 771",
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "a8fed4c2-042a-4094-ba16-ff470f8db5cc",
        message_number: 4,
        updated_at: "2024-11-27T10:05:23.841974",
      },
      {
        created_at: "2024-11-27T10:09:11.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_720caa86.png",
              },
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "222f1db0-0167-4c3f-bf8e-fb23058813df",
        message_number: 5,
        updated_at: "2024-11-27T10:09:11.841974",
      },
      {
        created_at: "2024-11-27T10:11:01.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 554",
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "fdfca62e-0462-40f0-9652-b49cddab25be",
        message_number: 6,
        updated_at: "2024-11-27T10:11:01.841974",
      },
      {
        created_at: "2024-11-27T10:13:32.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_2ce6b4f2.png",
              },
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "19c4f695-3907-4644-9dc7-ac0399fe846b",
        message_number: 7,
        updated_at: "2024-11-27T10:13:32.841974",
      },
      {
        created_at: "2024-11-27T10:15:33.841974",
        content: {
          role: "user",
          content: [
            {
              type: "text",
              text: "Sample message content 587",
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "49c10be0-4d63-4319-8151-670abdf408ef",
        message_number: 8,
        updated_at: "2024-11-27T10:15:33.841974",
      },
      {
        created_at: "2024-11-27T10:18:47.841974",
        content: {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Sample message content 1000",
            },
          ],
        },
        conversation_id: "3c259b52-a673-4747-ad8f-05b819260a66",
        extra_metadata: null,
        message_id: "0749f247-8d23-46a4-9304-2317b8ce3a8d",
        message_number: 9,
        updated_at: "2024-11-27T10:18:47.841974",
      },
    ],
  },
  {
    conversation_id: "11ceabe5-518c-4bfe-a4b8-fe08ef7febe0",
    title: "Mock Conversation 32",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T09:54:56.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 43",
        },
        conversation_id: "11ceabe5-518c-4bfe-a4b8-fe08ef7febe0",
        extra_metadata: null,
        message_id: "d895f83e-189d-48cf-b00a-79bcf52fd800",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
    ],
  },
  {
    conversation_id: "46e4a2a8-53d9-4a52-b927-2bc09903d2bb",
    title: "Mock Conversation 41",
    created_at: "2024-11-27T09:54:56.841974",
    updated_at: "2024-11-27T09:56:15.841974",
    messages: [
      {
        created_at: "2024-11-27T09:54:56.841974",
        content: {
          role: "system",
          content: "Instruction for the bot 88",
        },
        conversation_id: "46e4a2a8-53d9-4a52-b927-2bc09903d2bb",
        extra_metadata: null,
        message_id: "95cfcd6e-2abe-424e-965f-a7a800e22f5d",
        message_number: 1,
        updated_at: "2024-11-27T09:54:56.841974",
      },
      {
        created_at: "2024-11-27T09:56:15.841974",
        content: {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: "https://example.com/image_cb9541d7.png",
              },
            },
          ],
        },
        conversation_id: "46e4a2a8-53d9-4a52-b927-2bc09903d2bb",
        extra_metadata: null,
        message_id: "e6f42a4e-ba71-4d8a-bb69-2aa2cfbc54dc",
        message_number: 2,
        updated_at: "2024-11-27T09:56:15.841974",
      },
    ],
  },
];
