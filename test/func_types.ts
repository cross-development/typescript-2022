{
  // Request
  // {
  //     "topicId": 5,
  //     "status": "published", // "draft", "deleted" - optional
  // }

  // Response
  // [
  //     {
  //         "question": "How does it work?",
  //         "answer": "Simply",
  //         "tag": [
  //             "popular",
  //             "new"
  //         ],
  //         "likes": 3,
  //         "status": "published"
  //     }
  // ]

  enum STATUS {
    DRAFT = "draft",
    DELETED = "deleted",
    PUBLISHED = "published",
  }

  async function getFaqs(req: { topicId: number; status?: STATUS }): Promise<
    {
      question: string;
      answer: string;
      tag: string[];
      likes: number;
      status: STATUS;
    }[]
  > {
    const res = await fetch("faqs", {
      method: "POST",
      body: JSON.stringify(req),
    });

    const data = await res.json();

    return data;
  }
}
